from django.db import models
from django.db.models import Q
from django.db.models.signals import pre_save



class GameQuerySet(models.query.QuerySet):
    def active(self):
        return self.all()

    def search(self, query):
        return self.filter(
                Q(id__icontains=query) 
            )

class GameManager(models.Manager):
    def get_queryset(self):
        return GameQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()


    def search(self, query):
        return self.get_queryset().search(query)


class Game(models.Model):
    pgn        = models.TextField()

    objects = GameManager()


    def __str__(self): # __unicode__
        return self.pgn

    
