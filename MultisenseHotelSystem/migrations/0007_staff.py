# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0006_salesinfo_sale_hotel'),
    ]

    operations = [
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('staff_name', models.CharField(max_length=40)),
                ('staff_gender', models.CharField(max_length=10)),
                ('staff_rank', models.CharField(max_length=20)),
                ('staff_position', models.CharField(max_length=20)),
                ('staff_hotel', models.CharField(max_length=100)),
            ],
        ),
    ]
