from pydantic import BaseModel

class Watcher(BaseModel):
    address: str
    network: str
    watcherType: str
    channelId: str
    confirmationBlocks: str = 1
