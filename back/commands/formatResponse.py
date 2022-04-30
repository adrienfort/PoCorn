from botClient import bot

from botConfig import CHANNEL_ID

from logger.logger import logger


def parseData(data: dict) -> str:
    return "data"

async def sendMessage(data: str):
    channel = bot.get_channel(CHANNEL_ID)
    if len(data) > 4000:
        logger.panic(f"Message too long: {data}")
    await channel.send(data)
