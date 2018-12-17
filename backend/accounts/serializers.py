from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from rest_framework import serializers
from .models import Plan, Profile

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
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

