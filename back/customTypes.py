from pydantic import BaseModel

class Watcher(BaseModel):
    address: str
    network: str
    watcherType: str
    confirmationBlocks: str = 1
