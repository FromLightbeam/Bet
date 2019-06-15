from django.contrib import admin
from .models import * 

admin.site.register((Profile, Club, Action, League, Season, MatchMetric, ConfigParser))

@admin.register(Metric)
class MetricAdmin(admin.ModelAdmin):
    list_display = ('shortname', 'description')

class MetricInline(admin.TabularInline):
    model = MatchMetric

@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'league', 'season', 'date')
    list_filter = ('league', 'season', 'date')
    inlines = [
        MetricInline,
    ]

