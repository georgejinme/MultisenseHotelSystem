# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0010_customer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='hotel',
            field=models.ForeignKey(to='MultisenseHotelSystem.Room', null=True),
        ),
    ]
