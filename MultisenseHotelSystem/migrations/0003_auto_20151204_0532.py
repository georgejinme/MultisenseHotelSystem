# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0002_auto_20151204_0519'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hotel',
            name='hotel_id',
        ),
        migrations.AlterField(
            model_name='room',
            name='room_number',
            field=models.CharField(max_length=10),
        ),
    ]
