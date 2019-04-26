import csv
from io import StringIO

from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import mixins, viewsets
from rest_framework.response import Response

from .models import Profile, Club, Match, Action, MatchAction
from .serializers import ProfileSerializer, ClubSerializer, MatchSerializer, ActionSerializer, UserSerializer, MatchActionSerializer

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
        csv_file = request.data['file'].read().decode('utf-8')
        # A generator returning chunks of the file. 
        # If multiple_chunks() is True, you should use this method in a loop instead of read().

        # In practice, it’s often easiest simply to use chunks() all the time. 
        # Looping over chunks() instead of using read() ensures that large files don’t overwhelm your system’s memory.
        # print(type(csv_file))
        # print(csv_file)

        
            # csv_reader = csv.reader(csv_file, delimiter=',')
            # csv.reader(csv_file, delimiter=',')
            # csv_reader.fieldnames
        # f = csv_file.decode
        reader = csv.DictReader(csv_file.split('\n'), delimiter=',')
        for row in reader:
            # print(type(row))
            print(row['Date'])
        for name in reader.fieldnames:
            print(name)
            # print('\t'.join(row))
        # for name in csv_reader.fieldnames:
            # print(name)
        # print(dir(csv_reader.fieldnames))
        return Response('tupo kracivo')
