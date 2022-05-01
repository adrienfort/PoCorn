import discord

from botClient import bot

from botConfig import CHANNEL_ID, STARTON_API_KEY

from logger.logger import logger
import hashlib


import json

from datetime import datetime

def parseData(data: dict):
    return "data"


def writeData(jsonData: dict, time):
    f = open(f"./save_notif/{time}.txt", "w")
    f.write(json.dumps(jsonData))
    f.close()


async def sendMessage(data: dict):
    channel = bot.get_channel(int(CHANNEL_ID))
    currentTime = hashlib.sha256(datetime.now().strftime('%D:%H:%M:%S').encode()).hexdigest()
    writeData(data, currentTime)
    if len(data) > 4000:
        logger.panic(f"Message too long: {data}")
    json_data = {
        "type": data["event"],
        "hash": data["data"]["transaction"]["hash"],
        "block": data["data"]["transaction"]["blockHash"],
        "from": data["data"]["transaction"]["from"],
        "to": data["data"]["transaction"]["to"],
        "value": int(data["data"]["transaction"]["value"]["raw"]) / 10**18,
    }
    embedVar = discord.Embed(title="New transaction :satellite:", color=discord.Color.blue())
    embedVar.add_field(name="**transaction hash :recycle: :**", value=f"{json_data['hash']}", inline=False)
    embedVar.add_field(name="Block hash :ice_cube: :", value=f"{json_data['block']}", inline=False)
    embedVar.add_field(name="Sender :blue_circle: :", value=f"{json_data['from']}", inline=False)
    embedVar.add_field(name="Receiver :red_circle: :", value=f"{json_data['to']}", inline=False)
    embedVar.add_field(name="Amount :money_with_wings: :", value=f"{json_data['value']}", inline=False)
    embedVar.add_field(name=f"Get more infos here :", value=f"http://localhost:8080/infos/?file={currentTime}", inline=False)

    await channel.send(embed=embedVar)
