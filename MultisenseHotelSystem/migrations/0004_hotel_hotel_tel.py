# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0003_auto_20151204_0532'),
    ]

    operations = [
        migrations.AddField(
            model_name='hotel',
            name='hotel_tel',
            field=models.CharField(default=0, max_length=20),
            preserve_default=False,
        ),
    ]
