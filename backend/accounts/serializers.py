from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from rest_framework import serializers
from .models import *


class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'


class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Action
        fields = '__all__'


class MatchSerializer(serializers.ModelSerializer):
    club_1 = ClubSerializer()
    club_2 = ClubSerializer()

    class Meta:
        model = Match
        fields = '__all__'


class MatchActionSerializer(serializers.ModelSerializer):
    action = ActionSerializer()
    match = MatchSerializer()
    class Meta:
        model = MatchAction
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'


class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            password = make_password(validated_data['password'])
        )
        return user

