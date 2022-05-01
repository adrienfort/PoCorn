import discord
from discord.ext import commands

from logger.logger import logger

intents = discord.Intents.all()

bot = commands.Bot(command_prefix='/', intents=intents)


@bot.event
async def on_ready():
    logger.info("Ready")


@bot.event
async def on_command_error(ctx, error):
    logger.error(error)
    if isinstance(error, commands.errors.CheckFailure):
        await ctx.send('You do not have the correct role for this command.')
    else:
        await ctx.send('Command not found.')
