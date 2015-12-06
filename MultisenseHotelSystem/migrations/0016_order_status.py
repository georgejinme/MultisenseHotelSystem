# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0015_auto_20151206_1015'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='status',
            field=models.CharField(default='receive', max_length=30),
            preserve_default=False,
        ),
    ]
