# Generated by Django 2.0.6 on 2018-12-17 18:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_auto_20181217_1804'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='club_1',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='first_club', to='accounts.Club'),
        ),
        migrations.AddField(
            model_name='match',
            name='club_2',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='second_club', to='accounts.Club'),
        ),
        migrations.AddField(
            model_name='MatchBet',
            name='action',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.Action'),
        ),
        migrations.AddField(
            model_name='MatchBet',
            name='id_club',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.Club'),
        ),
        migrations.AddField(
            model_name='MatchBet',
            name='id_match',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.Match'),
        ),
        migrations.AddField(
            model_name='profile',
            name='group_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.UserGroup'),
        ),
    ]
