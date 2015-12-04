# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0005_salesinfo'),
    ]

    operations = [
        migrations.AddField(
            model_name='salesinfo',
            name='sale_hotel',
            field=models.CharField(default='123', max_length=100),
            preserve_default=False,
        ),
    ]
