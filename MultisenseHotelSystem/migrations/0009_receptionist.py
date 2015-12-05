# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('MultisenseHotelSystem', '0008_staff_staff_salary'),
    ]

    operations = [
        migrations.CreateModel(
            name='Receptionist',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=40)),
                ('gender', models.CharField(max_length=10)),
                ('address', models.CharField(max_length=500)),
                ('hotel', models.CharField(max_length=100)),
                ('authorityUser', models.OneToOneField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
