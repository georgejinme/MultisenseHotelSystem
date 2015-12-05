# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0007_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='staff',
            name='staff_salary',
            field=models.IntegerField(default=10000),
            preserve_default=False,
        ),
    ]
