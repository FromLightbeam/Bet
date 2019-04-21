from django.contrib import admin
from .models import Profile, Club, Match, Action, MatchAction, Bet, Mertic

admin.site.register((Profile, Club, Match, Action, MatchAction, Bet))

@admin.register(Mertic)
class MerticAdmin(admin.ModelAdmin):
    list_display = ('shortname', 'description')
