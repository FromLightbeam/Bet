from django.contrib import admin
from .models import Plan, Profile

admin.site.register((Plan, Profile))
