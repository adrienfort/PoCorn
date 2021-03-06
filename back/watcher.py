from fastapi import APIRouter, HTTPException
from botConfig import STARTON_API_KEY, HOST_ALEPH
from customTypes import Watcher
from mockDb import eventMapper
from commands.formatResponse import sendWelcomeMessage
import requests
import json

router = APIRouter()

url = "https://api.starton.io/v2/watcher"

headers = {
  'x-api-key': STARTON_API_KEY,
  'Content-Type': 'application/json'
}

def removeWatcher():
    response = requests.request("GET", url , headers=headers)
    if response.status_code != 200:
        raise HTTPException(status_code=500, detail="Error while getting watcher list")
    watchers = response.json()
    for req in watchers["items"]:
        print(req["id"])
        response = requests.request("DELETE" , url + "/" + str(req["id"]), headers=headers)
        if response.status_code != 200:
            raise HTTPException(status_code=500, detail="Error while deleting watcher")
    return True

@router.get("/infos/")
async def read_item(file: str):
    f = open(f"./save_notif/{file}.txt", "r")
    return {f.read()}

@router.post("/watcher/")
async def handler(params: Watcher):
    payload = json.dumps({
        "address": params.address,
        "network": params.network,
        "type": params.watcherType,
        "webhookUrl": HOST_ALEPH + "/webhook",
        "channelId": params.channelId,
        "confirmationsBlocks": params.confirmationBlocks
    })
    response = requests.request("POST", url, headers=headers, data=payload)
    if response.status_code != 201:
        raise HTTPException(status_code = response.status_code, detail=response.json())
    id = response.json()["id"]
    eventMapper[id] = params
    await sendWelcomeMessage(params.channelId)
    return {"id": id}

@router.patch("/watcher/{id}")
async def patch_handler(id: str, params: Watcher):
    payload = json.dumps({
        "address": params.address,
        "network": params.network,
        "type": params.watcherType,
        "webhookUrl": HOST_ALEPH + "/webhook",
        "channelId": params.channelId,
        "confirmationsBlocks": params.confirmationBlocks
    })
    response = requests.request("PATCH", url + f"/{id}", headers=headers, data=payload)
    if response.status_code != 200:
        raise HTTPException(status_code = response.status_code, detail=response.json())
    eventMapper.update({id: params})
    return {"id": id}

@router.get("/watcher/")
async def get_handler():
    response = requests.request("GET", url, headers=headers)
    if response.status_code != 200:
        raise HTTPException(status_code = response.status_code, detail=response.json())
    return response.json()

@router.get("/watcher/{id}")
async def get_handler(id: str):
    response = requests.request("GET", url + f"/{id}", headers=headers)
    if response.status_code != 200:
        raise HTTPException(status_code = response.status_code, detail=response.json())
    return response.json()

@router.delete("/watcher/{id}")
async def delete_handler(id: str):
    response = requests.request("DELETE", url + f"{id}", headers=headers)
    if response.status_code != 200:
        raise HTTPException(status_code = response.status_code, detail=response.json())
    del eventMapper[id]
    return {"message": "OK"}

@router.get("/test")
async def test():
    return eventMapper
