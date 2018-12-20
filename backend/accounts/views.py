from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework.permissions import AllowAny
from rest_framework import mixins, viewsets
from rest_framework.response import Response

from .models import Profile, Club, Match, Action, MatchAction, Bet
from .serializers import ProfileSerializer, ClubSerializer, MatchSerializer, ActionSerializer, UserSerializer, MatchActionSerializer, BetSerializer, SimpleBetSerializer

# Create your views here.


class MatchActionViewSet(viewsets.ModelViewSet):
    serializer_class = MatchActionSerializer
    queryset = MatchAction.objects.all()


class BetActionViewSet(viewsets.ModelViewSet):
    serializer_class = BetSerializer
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return Bet.objects.filter(user=user)

class SimpleBetViewSet(viewsets.ModelViewSet):
    serializer_class = SimpleBetSerializer

    def create(self, request):
        Bet.objects.create(
            user=self.request.user,
            money=request.data['money'],
            action=MatchAction.objects.filter(id=request.data['action'])[0],
        )
        return Response({'status': 200})

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """ 
        user = self.request.user
        return Bet.objects.filter(user=user)


class ActionViewSet(viewsets.ModelViewSet):
    serializer_class = ActionSerializer
    queryset = Action.objects.all()


class MatchViewSet(viewsets.ModelViewSet):
    serializer_class = MatchSerializer
    queryset = Match.objects.all()


class ClubViewSet(viewsets.ModelViewSet):
    serializer_class = ClubSerializer
    queryset = Club.objects.all()


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
