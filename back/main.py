from dotenv import load_dotenv
load_dotenv()

from botClient import bot
from botConfig import TOKEN


# Load commands
print(f"Token: {TOKEN}")

bot.run(TOKEN)
