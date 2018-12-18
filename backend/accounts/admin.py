from django.contrib import admin
from .models import Profile, Club, Match, Action, MatchAction

admin.site.register((Profile, Club, Match, Action, MatchAction))
