# Generated by Django 2.1.7 on 2019-04-04 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0017_auto_20190325_1900'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mertics',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shortname', models.CharField(max_length=20)),
                ('name', models.CharField(max_length=500)),
            ],
        ),
    ]
