# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('room_number', models.IntegerField()),
                ('room_type', models.CharField(max_length=20)),
                ('room_account', models.IntegerField()),
                ('room_status', models.CharField(max_length=20)),
            ],
        ),
        migrations.AddField(
            model_name='hotel',
            name='hotel_room',
            field=models.ManyToManyField(to='MultisenseHotelSystem.Room'),
        ),
    ]
