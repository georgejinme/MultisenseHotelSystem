# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0004_hotel_hotel_tel'),
    ]

    operations = [
        migrations.CreateModel(
            name='SalesInfo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('sale_number', models.IntegerField()),
                ('sale_time', models.IntegerField()),
                ('sale_type', models.CharField(max_length=20)),
            ],
        ),
    ]
