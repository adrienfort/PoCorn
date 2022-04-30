import os
import sys

# WARNING
# We don't use logger here to avoid import loop

def exit_error(msg: str) -> None:
    """
    Display error message prefixed by [ERROR]
    :param msg: Error message
    """
    print(f'[ERROR]: {msg}')
    sys.exit(1)


TOKEN: str = os.getenv("BOT_TOKEN")

if TOKEN is None:
    exit_error("No token provided")

ADM: str = os.getenv("ADM_ROLE")

if ADM is None:
    exit_error("No administrator provided")

MODE: str = os.getenv("MODE")

if MODE is None:
    exit_error("No mode provided")

if MODE != "DEBUG" and MODE != "PRODUCTION":
    exit_error(f'Mode {MODE} is not valid')
