# Generated by Django 2.1.7 on 2019-05-16 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_player_playermetric_seasonmetric'),
    ]

    operations = [
        migrations.CreateModel(
            name='ConfigParser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nameField', models.CharField(max_length=50)),
                ('seasonField', models.CharField(max_length=50)),
                ('seasonFormat', models.CharField(max_length=20)),
                ('leagueField', models.CharField(max_length=50)),
                ('dateField', models.CharField(max_length=50)),
                ('dateFormat', models.CharField(max_length=50)),
                ('club1Field', models.CharField(max_length=50)),
                ('club2Field', models.CharField(max_length=50)),
            ],
        ),
    ]
