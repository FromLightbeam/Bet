# Generated by Django 2.1.7 on 2019-04-22 20:21

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0021_auto_20190422_1835'),
    ]

    operations = [
        migrations.CreateModel(
            name='League',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
            ],
        ),
        migrations.RemoveField(
            model_name='bet',
            name='action',
        ),
        migrations.RemoveField(
            model_name='bet',
            name='user',
        ),
        migrations.RemoveField(
            model_name='match',
            name='data',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='money_count',
        ),
        migrations.AddField(
            model_name='match',
            name='date',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='match',
            name='time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.DeleteModel(
            name='Bet',
        ),
        migrations.AddField(
            model_name='match',
            name='league',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='matches', to='accounts.League'),
        ),
    ]