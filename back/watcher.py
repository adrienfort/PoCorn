from fastapi import APIRouter, HTTPException
from botConfig import STARTON_API_KEY, HOST_ALEPH
from customTypes import Watcher
from mockDb import eventMapper
import requests
import json

router = APIRouter()

url = "https://api.starton.io/v2/watcher"

headers = {
  'x-api-key': STARTON_API_KEY,
  'Content-Type': 'application/json'
}

@router.post("/watcher")
async def handler(params: Watcher):
    payload = json.dumps({
        "address": params.address,
        "network": params.network,
        "type": params.watcherType,
        "webhookUrl": HOST_ALEPH + "/webhook",
        "confirmationsBlocks": params.confirmationBlocks
    })
    response = requests.request("POST", url, headers=headers, data=payload)
    if response.status_code != 201:
        raise HTTPException(status_code = response.status_code, detail=response.json())
    id = response.json()["id"]
    eventMapper[id] = params
    return {"id": id}

@router.patch("/watcher/{id}")
async def patch_handler(id: str, params: Watcher):
    payload = json.dumps({
        "address": params.address,
        "network": params.network,
        "type": params.watcherType,
        "webhookUrl": HOST_ALEPH + "/webhook",
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

@router.patch("/channel-id")
async def getChannelId(channelId: dict):
    CHANNEL_ID = channelId["channelId"]
    if (CHANNEL_ID != channelId["channelId"]):
        raise HTTPException(status_code = 400, detail="Channel id is not valid")
    print(CHANNEL_ID)
    return {"message": "OK", "channelId": CHANNEL_ID}
