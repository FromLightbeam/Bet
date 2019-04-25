from django.contrib import admin
from .models import Profile, Club, Match, Action, MatchAction, Mertic, League

admin.site.register((Profile, Club, Match, Action, MatchAction, League))

@admin.register(Mertic)
class MerticAdmin(admin.ModelAdmin):
    list_display = ('shortname', 'description')

