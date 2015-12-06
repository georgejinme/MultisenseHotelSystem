# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0014_auto_20151206_1012'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='meal',
        ),
        migrations.AddField(
            model_name='order',
            name='meal',
            field=models.ForeignKey(blank=True, to='MultisenseHotelSystem.Meals', null=True),
        ),
    ]
