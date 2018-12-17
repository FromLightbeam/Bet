from django.contrib import admin
from .models import Profile, Club, Match, Action, Match_bet

admin.site.register((Profile, Club, Match, Action, Match_bet))
