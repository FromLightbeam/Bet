# Generated by Django 2.0.6 on 2018-12-17 18:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20181217_1801'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='match',
            name='club_1',
        ),
        migrations.RemoveField(
            model_name='match',
            name='club_2',
        ),
        migrations.RemoveField(
            model_name='MatchBet',
            name='action',
        ),
        migrations.RemoveField(
            model_name='MatchBet',
            name='id_club',
        ),
        migrations.RemoveField(
            model_name='MatchBet',
            name='id_match',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='group_id',
        ),
    ]
