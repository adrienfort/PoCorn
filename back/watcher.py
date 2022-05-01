from fastapi import APIRouter, HTTPException
from botConfig import STARTON_API_KEY
from customTypes import Watcher
from mockDb import eventMapper
import requests
import json

router = APIRouter()

url = "https://api.starton.io/v2/watcher"

payload = json.dumps({
  "address": "0x83dBe66D4Af30A16b738606e80E686235b683EF3",
  "network": "polygon-mumbai",
  "type": "ADDRESS_ACTIVITY",
  "webhookUrl": "https://webhook.site/4a0971fb-fcdd-4a91-98b5-d08d4d1fb5c3",
  "confirmationsBlocks": 1
})

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
        "webhookUrl": "https://z5thl2lfiufig3gn72hkgpeypmqs2t7z7eukyhspml3ivi633aga.aleph.sh/webhook",
        "confirmationsBlocks": params.confirmationBlocks
    })
    response = requests.request("POST", url, headers=headers, data=payload)
    if response.status_code != 201:
        raise HTTPException(status_code = response.status_code, detail=response.json())
    id = response.json()["id"]
    eventMapper[id] = params
    return {"message": "OK"}

@router.patch("/watcher/{id}")
async def patch_handler(id: str, params: Watcher):
    payload = json.dumps({
        "address": params.address,
        "network": params.network,
        "type": params.watcherType,
        "webhookUrl": "https://z5thl2lfiufig3gn72hkgpeypmqs2t7z7eukyhspml3ivi633aga.aleph.sh/",
        "confirmationsBlocks": params.confirmationBlocks
    })
    response = requests.request("PATCH", url + f"/{id}", headers=headers, data=payload)
    if response.status_code != 201:
        raise HTTPException(status_code = response.status_code, detail=response.json())
    eventMapper.update({id: params})
    return {"message": "OK"}

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
