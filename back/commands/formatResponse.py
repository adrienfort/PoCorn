from botClient import bot

from botConfig import CHANNEL_ID

from logger.logger import logger


def parseData(data: dict):
    return "data"

async def sendMessage(data: dict):
    channel = bot.get_channel(int(CHANNEL_ID))
    if len(data) > 4000:
        logger.panic(f"Message too long: {data}")
    await channel.send(data)