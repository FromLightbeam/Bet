# Generated by Django 2.0.6 on 2018-12-17 18:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_club_logo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='money_count',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
    ]
