import uvicorn
import asyncio
from dotenv import load_dotenv

load_dotenv()

from logger.logger import logger

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

from botClient import bot
from botConfig import TOKEN

from commands.formatResponse import sendMessage
from watcher import router as watcherRouter
from watcher import removeWatcher

app.include_router(watcherRouter)
app.add_middleware(
    CORSMiddleware,
    allow_origins= [
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/webhook")
async def webhooks(data: dict):
    await sendMessage(data)
    return {"status": "ok"}


@app.get("/infos/")
async def read_item(file: str):
    f = open(f"./save_notif/{file}.txt", "r")
    return {f.read()}


@app.on_event("startup")
async def startupDiscord():
    logger.info("Removing old watcher")
    if not removeWatcher():
        logger.info("Can't remove old watcher")
    asyncio.create_task(bot.start(TOKEN))
    await asyncio.sleep(2)
    logger.info(f"Connected as {bot.user} !")


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8080)
