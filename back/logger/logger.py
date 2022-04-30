from sys import exit
from colorama import Fore
from colorama import Style

from botConfig import MODE

class Logger:
    """A simple logger"""
    app: str

    def __init__(self, app: str):
        self.app = app

    def panic(self, msg: str, code: int):
        print(f'{Fore.LIGHTBLUE_EX}[{self.app}]{Style.RESET_ALL}'
              f'{Fore.RED}[PANIC]{Style.RESET_ALL}: '
              f'{msg}.')
        exit(code)

    def error(self, msg: str):
        print(f'{Fore.LIGHTBLUE_EX}[{self.app}]{Style.RESET_ALL}'
              f'{Fore.RED}[ERROR]{Style.RESET_ALL}: '
              f'{msg}.')

    def debug(self, msg: str):
        if MODE == "DEBUG":
            print(f'{Fore.LIGHTBLUE_EX}[{self.app}]{Style.RESET_ALL}'
                  f'{Fore.YELLOW}[DEBUG]{Style.RESET_ALL}: '
                  f'{msg}.')

    def info(self, msg: str):
        print(f'{Fore.LIGHTBLUE_EX}[{self.app}]{Style.RESET_ALL}'
              f'{Fore.BLUE}[INFO]{Style.RESET_ALL}: '
              f'{msg}.')


logger = Logger("PoC Bot")
