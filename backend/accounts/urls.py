from django.contrib import admin
from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from rest_framework import routers

from .views import ProfileViewSet, UserViewSet, ActionViewSet, MatchViewSet, ClubViewSet, MatchActionViewSet, BetActionViewSet, SimpleBetViewSet


router = routers.DefaultRouter()
# router.register('plans', PlanViewSet, base_name='plans-list')
router.register('profiles', ProfileViewSet, base_name='profiles-list')
router.register('users', UserViewSet, base_name='profiles-list')
router.register('club', ClubViewSet, base_name='club-list')
router.register('match', MatchViewSet, base_name='match-list')
router.register('action', ActionViewSet, base_name='action-list')
router.register('matchaction', MatchActionViewSet, base_name='match-action-list')
router.register('bet', BetActionViewSet, base_name='match-action-list')
router.register('simplebet', SimpleBetViewSet, base_name='match-action-list')



urlpatterns = [
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-refresh/', refresh_jwt_token),
    path('api-token-verify/', verify_jwt_token),
] + router.urls

# urlpatterns = [
#     path('api-token-auth/', obtain_jwt_token),
# ]
