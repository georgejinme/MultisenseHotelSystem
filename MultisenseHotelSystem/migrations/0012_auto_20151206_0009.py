# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0011_auto_20151205_2141'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='hotel',
            field=models.ForeignKey(blank=True, to='MultisenseHotelSystem.Room', null=True),
        ),
    ]
