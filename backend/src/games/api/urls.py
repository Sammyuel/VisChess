from django.conf.urls import url

from .views import GameList, GameID

urlpatterns = [
    url(r'^$', GameList.as_view()),
    url(r'^[0-9]+/$', GameID.as_view()),

]
