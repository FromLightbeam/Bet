from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from datetime import datetime


class UserGroup(models.Model):
    name = models.CharField(max_length=32, null=False)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50, null=False)
    second_name = models.CharField(max_length=50, null=False)
    money_count = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    group_id = models.ForeignKey(UserGroup, on_delete=models.CASCADE, blank=True, null=True)


class Club(models.Model):
  name = models.CharField(max_length=150, null=False)
  logo = models.CharField(max_length=250, blank=True, null=True)
  count_game = models.IntegerField(default=0)
  win_count_game = models.IntegerField(default=0)

  def __str__(self):
      return self.name


class Match(models.Model):
    club_1 = models.ForeignKey(Club, on_delete=models.CASCADE, related_name='first_club', blank=True, null=True)
    club_2 = models.ForeignKey(Club, on_delete=models.CASCADE, related_name='second_club', blank=True, null=True)
    data = models.DateTimeField()
    description = models.CharField(max_length=500, null=False)
    goal_1 = models.IntegerField(default=0)
    goal_2 = models.IntegerField(default=0)

    xg = models.FloatField(blank=True, null=True)
    xgA = models.FloatField(blank=True, null=True)
    xPTS = models.FloatField(blank=True, null=True)
    PPDA = models.FloatField(blank=True, null=True)

    def __str__(self):
        return '{0}-{1}'.format(self.club_1, self.club_2)


class Action(models.Model):
    name = models.CharField(max_length=50, null=False)
    def __str__(self):
        return self.name



class MatchAction(models.Model):
    match = models.ForeignKey(Match, on_delete=models.CASCADE, blank=True, null=True)
    action = models.ForeignKey(Action, on_delete=models.CASCADE, blank=True, null=True)
    result = models.NullBooleanField(blank=True, null=True)
    coefficient = models.FloatField()
    
    def __str__(self):
        return '{0}. {1}'.format(self.match, self.action)


class Bet(models.Model):
    action = models.ForeignKey(MatchAction, on_delete=models.CASCADE, blank=True, null=True)
    money = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, related_name='bets')

    def __str__(self):
        return '{0}. {1}'.format(self.action, self.user)


class Mertic(models.Model):
    shortname = models.CharField(max_length=20)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.shortname


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
