# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('MultisenseHotelSystem', '0009_receptionist'),
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=40)),
                ('gender', models.CharField(max_length=10)),
                ('email', models.CharField(max_length=40)),
                ('address', models.CharField(max_length=500)),
                ('passpord', models.CharField(max_length=100)),
                ('tel', models.CharField(max_length=30)),
                ('authorityUser', models.OneToOneField(to=settings.AUTH_USER_MODEL)),
                ('hotel', models.ForeignKey(to='MultisenseHotelSystem.Room')),
            ],
        ),
    ]
