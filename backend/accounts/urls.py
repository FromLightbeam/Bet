from django.contrib import admin
from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from rest_framework import routers

from .views import PlanViewSet, ProfileViewSet, UserViewSet


router = routers.DefaultRouter()
router.register('plans', PlanViewSet, base_name='plans-list')
router.register('profiles', ProfileViewSet, base_name='profiles-list')
router.register('users', UserViewSet, base_name='profiles-list')



urlpatterns = [
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-refresh/', refresh_jwt_token),
    path('api-token-verify/', verify_jwt_token),
] + router.urls

# urlpatterns = [
#     path('api-token-auth/', obtain_jwt_token),
# ]
