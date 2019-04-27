from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import mixins, viewsets
from rest_framework.response import Response

from .models import Profile, Club, Match, Action, MatchAction, League, Season, MatchMetric, Metric
from .serializers import ProfileSerializer, ClubSerializer, MatchSerializer, ActionSerializer, UserSerializer, MatchActionSerializer

import re
import csv
import pandas as pd

from .helper import get_or_create
from io import StringIO
# Create your views here.


class MatchActionViewSet(viewsets.ModelViewSet):
    serializer_class = MatchActionSerializer
    queryset = MatchAction.objects.all()


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


class MatchCSVView(APIView):
    def post(self, request, format=None):
        """
        Return a list of all users.
        """
        print('\n\nAAAAA\n\n\n')
        # sep func need
        
        requried_fields = {
            'date': 'Date',
            'club_1': 'HomeTeam',
            'club_2': 'AwayTeam'
        }
        file_name = request.data['file'].name        
        season_name = re.findall("[\d/]+-?[\d]*", file_name)
        season_name = season_name[0] if len(season_name) else 'default' 

        # Read about chunks. read() may be bad desicion for big data
        csv_file = request.data['file'].read().decode('utf-8')

        data = pd.read_csv(StringIO(csv_file))
        
        league = get_or_create(League, { 'name': 'LaLiga' })
        season = get_or_create(Season, { 'name': season_name })
    
        # print(reader)
        metrics = []
        # sep func need
        for field in data.columns.values:
            if not field in requried_fields.values():
                metrics.append(get_or_create(Metric, { 'shortname': field }))

        for index, row in data.iterrows():
            club_1 = get_or_create(Club, {'name': row[requried_fields['club_1']] })
            club_2 = get_or_create(Club, {'name': row[requried_fields['club_2']] })
            match = get_or_create(
                Match, 
                {
                    'club_1': club_1,
                    'club_2': club_2,
                    'league': league,
                    'season': season,
                    'date': row[requried_fields['date']]
                }
            )
            for metric in metrics:
                # get or create tooooo long
                MatchMetric.objects.create(
                    value=row[metric.shortname],
                    match=match,
                    metric=metric
                )

        return Response('tupo kracivo')
