import discord

from botClient import bot

from botConfig import CHANNEL_ID, HOST_ALEPH

from logger.logger import logger
import hashlib


import json, os

from datetime import datetime

from mockDb import eventMapper
from customTypes import Watcher


def writeData(jsonData: dict, time):
    if not os.path.exists("save_notif"):
        os.makedirs("save_notif")

    f = open(f"./save_notif/{time}.txt", "w")
    f.write(json.dumps(jsonData))
    f.close()


dictCryptoToken = {
    "ethereum-mainnet": "ETH",
    "ethereum-ropsten": "ETH",
    "ethereum-goerli": "ETH",

    "binance-mainnet": "BNB",
    "binance-testnet": "BNB",

    "avalanche-mainnet": "AVAX",
    "avalanche-fuji": "AVAX",

    "polygon-mainnet": "MATIC",
    "polygon-mumbai": "MATIC"
}

async def sendMessage(data: dict):
    channel = bot.get_channel(int(CHANNEL_ID))
    currentTime = hashlib.sha256(datetime.now().strftime('%D:%H:%M:%S').encode()).hexdigest()
    writeData(data, currentTime)
    currCrypto = ""
    for val in eventMapper.values():
        if val.address == data["data"]["transaction"]["from"] or val.address == data["data"]["transaction"]["to"]:
            currCrypto = dictCryptoToken.get(val.network)
            break
    if currCrypto is None:
        currCrypto = "?"
    json_data = {
        "type": data["event"],
        "hash": data["data"]["transaction"]["hash"],
        "block": data["data"]["transaction"]["blockHash"],
        "from": data["data"]["transaction"]["from"],
        "to": data["data"]["transaction"]["to"],
        "value": str(int(data["data"]["transaction"]["value"]["raw"]) / 10**18) + " " + str(currCrypto),
    }
    embedVar = discord.Embed(title="New transaction :satellite:", color=discord.Color.blue())
    embedVar.add_field(name="**transaction hash :recycle: :**", value=f"{json_data['hash']}", inline=False)
    embedVar.add_field(name="Block hash :ice_cube: :", value=f"{json_data['block']}", inline=False)
    embedVar.add_field(name="Sender :blue_circle: :", value=f"{json_data['from']}", inline=False)
    embedVar.add_field(name="Receiver :red_circle: :", value=f"{json_data['to']}", inline=False)
    embedVar.add_field(name="Amount :money_with_wings: :", value=f"{json_data['value']}", inline=False)
    embedVar.add_field(name=f"Get more infos here :", value=f"{HOST_ALEPH}/infos/?file={currentTime}", inline=False)

    await channel.send(embed=embedVar)


async def sendWelcomeMessage():
    channel = bot.get_channel(int(CHANNEL_ID))
    embedVar = discord.Embed(title="Welcome to the PoCorn Discord Bot :satellite:", description="**PoCorn is a blockchain monitoring bot :rocket:**\n\n**It is currently in beta phase :money_with_wings:**\n\n**Enjoy ! :satellite:**", color=discord.Color.red())
    await channel.send(embed=embedVar)