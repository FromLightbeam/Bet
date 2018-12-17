from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework.permissions import AllowAny
from rest_framework import mixins, viewsets

from .models import Profile
from .serializers import ProfileSerializer, UserSerializer
# Create your views here.


class ProfileViewSet(viewsets.ModelViewSet):

    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


# class PlanViewSet(viewsets.ModelViewSet):

#     serializer_class = PlanSerializer
#     queryset = Plan.objects.all()


class UserViewSet(viewsets.ModelViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]
