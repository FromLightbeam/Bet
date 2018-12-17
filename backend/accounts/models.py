from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from datetime import datetime


class User_group(models.Model):
    name = models.CharField(max_length=32, null=False)


class Profile(models.Model):
    # INST_PROFILE_CHOICES = (
    #     ('n', 'New'),
    #     ('r', 'Recent'),
    #     ('e', 'Experienced'),
    # )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50, null=False)
    second_name = models.CharField(max_length=50, null=False)
    money_count = models.DecimalField(max_digits=10, decimal_places=2)
    group_id = models.ForeignKey(User_group, on_delete=models.CASCADE, blank=True, null=True)
    # inst_profile_type = models.CharField(max_length=1, choices=INST_PROFILE_CHOICES, default='e')


class Club(models.Model):
  name = models.CharField(max_length=150, null=False)
  count_game = models.IntegerField(default=0)
  win_count_game = models.IntegerField(default=0)

class Match(models.Model):
    club_1 = models.ForeignKey(Club, on_delete=models.CASCADE, related_name='first_club', blank=True, null=True)
    club_2 = models.ForeignKey(Club, on_delete=models.CASCADE, related_name='second_club', blank=True, null=True)
    data = models.DateTimeField()
    goal_1 = models.IntegerField(default=0)
    goal_2 = models.IntegerField(default=0)

class Action(models.Model):
    name = models.CharField(max_length=50, null=False)


class Match_bet(models.Model):
    id_club = models.ForeignKey(Club, on_delete=models.CASCADE, blank=True, null=True)
    id_match = models.ForeignKey(Match, on_delete=models.CASCADE, blank=True, null=True)
    action = models.ForeignKey(Action, on_delete=models.CASCADE, blank=True, null=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()