from games.models import Game
from django.core.management.base import BaseCommand, CommandError
import re


class Command(BaseCommand):
    quoted = re.compile('"[^"]*"')
    args = '<foo bar ...>' 
    help = 'our help string comes here'

    def _create_tags(self):
        f = open(r'C:/Users/Sam/.spyder-py3/chessData.txt','r')
        line = f.readline()
        string = ""
        while line:
            if ("split" in line):
                tlisp = Game(pgn = string)
                tlisp.save()
                string = ""
                line = f.readline()
                continue
            if ('[' not in line):
                string += line
            line = f.readline()
    def handle(self, *args, **options):
        self._create_tags()
