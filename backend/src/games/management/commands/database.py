from games.models import Game
from django.core.management.base import BaseCommand, CommandError
import re

class Command(BaseCommand):
    args = '<foo bar ...>' 
    help = 'our help string comes here'

    def _create_tags(self):
        quoted = re.compile('"[^"]*"')
        f = open(r'C:/Users/Sam/Desktop/ChessVisualizer-master/backend/src/games/management/commands/chessData.txt','r')
        line = f.readline()
        string = ""
        white = ""
        black = ""
        whiteelo = ""
        blackelo = ""
        date = ""
        event = ""
        result = ""
        while line:
            if ("split" in line):
                tlisp = Game(pgn = string, white = white, black = black, whiteelo = whiteelo, blackelo = blackelo, date = date, event = event, result = result)
                tlisp.save()
                string = ""
                line = f.readline()
                continue
            if ('[' in line or ']' in line):
                event = quoted.findall(line)[0]
                line = f.readline()
                line = f.readline()
                date = quoted.findall(line)[0]
                line = f.readline()
                line = f.readline()
                line = f.readline()
                result = quoted.findall(line)[0]
                line = f.readline()
                white = quoted.findall(line)[0]
                line = f.readline()
                black = quoted.findall(line)[0]
                line = f.readline()
                line = f.readline()
                whiteelo = quoted.findall(line)[0]
                line = f.readline()
                blackelo = quoted.findall(line)[0]
                f.readline()
                f.readline()
            if ('[' not in line):
                string += line
            line = f.readline()
    def handle(self, *args, **options):
        self._create_tags()
