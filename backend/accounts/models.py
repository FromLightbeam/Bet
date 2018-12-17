from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from datetime import datetime


class Plan(models.Model):
    name = models.CharField(max_length=10)
    likes_per_day = models.SmallIntegerField()
    follows_per_day = models.SmallIntegerField()
    duration = models.DurationField(blank=True)


class Profile(models.Model):

    INST_PROFILE_CHOICES = (
        ('n', 'New'),
        ('r', 'Recent'),
        ('e', 'Experienced'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    inst_login = models.CharField(max_length=32, blank=True)
    inst_password = models.CharField(max_length=64, blank=True)
    inst_profile_type = models.CharField(max_length=1, choices=INST_PROFILE_CHOICES, default='e')
    registered_at = models.DateField(auto_now_add=True)
    plan_activation_datetime = models.DateTimeField(blank=True,  null=True, default=None)
    account_type = models.ForeignKey(Plan, on_delete=models.SET_NULL, null=True, default=None)

    def is_expired(self):
        if self.account_type:
            return not (self.plan_activation_datetime + self.account_type.duration >= datetime.now()) 
        else:
            return None
    is_expired.short_description = 'Is expired'


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()