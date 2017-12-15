from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from games.models import Game
from .serializers import GameSerializer
from rest_framework.reverse import reverse
from rest_framework.views import APIView

from games.models import Game


class GameList(generics.ListAPIView):
	serializer_class = GameSerializer
	def get_queryset(self):
		query = self.request.GET.get("q")
		qs = Game.objects.all()
		return qs

class GameID(generics.ListAPIView):
	serializer_class = GameSerializer
	def get_queryset(self):
		query = self.request.GET.get("q")
		qs = Game.objects.search(query)
	
		if query:
			qs = Game.objects.search(query)
		else:
			qs = Game.objects.all()
		return qs

