# Generated by Django 2.0.6 on 2018-12-20 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0013_auto_20181218_2133'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='PPDA',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='match',
            name='xPTS',
            field=models.FloatField(default=0.5),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='match',
            name='xg',
            field=models.FloatField(default=1.4),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='match',
            name='xgA',
            field=models.FloatField(default=1.4),
            preserve_default=False,
        ),
    ]
