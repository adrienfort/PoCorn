from pydantic import BaseModel
from botConfig import CHANNEL_ID

class Watcher(BaseModel):
    address: str
    network: str
    watcherType: str
    channelId: str = CHANNEL_ID
    confirmationBlocks: str = 1
