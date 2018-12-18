from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from rest_framework import serializers
from .models import Profile, Club, Match, Action, MatchAction

# class PlanSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Plan
#         fields = '__all__'

class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'

class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Action
        fields = '__all__'


class MatchActionSerializer(serializers.ModelSerializer):
    action = ActionSerializer()
    class Meta:
        model = MatchAction
        fields = '__all__'


class MatchSerializer(serializers.ModelSerializer):
    club_1 = ClubSerializer()
    club_2 = ClubSerializer()

    class Meta:
        model = Match
        fields = '__all__'




class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
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

