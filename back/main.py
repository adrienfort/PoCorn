import uvicorn
import asyncio
from dotenv import load_dotenv
load_dotenv()

from logger.logger import logger

from fastapi import FastAPI
app = FastAPI()

from botClient import bot
from botConfig import TOKEN

from commands.formatResponse import sendMessage
from watcher import router as watcherRouter

app.include_router(watcherRouter)

@app.post("/webhook")
async def webhooks(data: dict):
    logger.info(data)
    await sendMessage(data)
    return {"status": "ok"}


@app.on_event("startup")
async def startupDiscord():
    asyncio.create_task(bot.start(TOKEN))
    await asyncio.sleep(2)
    logger.info(f"Connected as {bot.user} !")

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8080)
