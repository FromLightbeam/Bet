# Generated by Django 2.0.6 on 2018-06-18 10:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_plan_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='account_type',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.Plan'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='plan_activation_datetime',
            field=models.DateTimeField(blank=True),
        ),
    ]
