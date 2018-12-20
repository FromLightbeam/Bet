from django.contrib import admin
from .models import Profile, Club, Match, Action, MatchAction, Bet

admin.site.register((Profile, Club, Match, Action, MatchAction, Bet))
