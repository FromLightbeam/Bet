# Generated by Django 2.1.7 on 2019-04-04 17:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0019_auto_20190404_1711'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mertic',
            old_name='name',
            new_name='description',
        ),
    ]
