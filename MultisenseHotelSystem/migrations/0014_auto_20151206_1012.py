# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0013_auto_20151206_0037'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('number', models.IntegerField()),
                ('meal', models.ManyToManyField(to='MultisenseHotelSystem.Meals')),
            ],
        ),
        migrations.RemoveField(
            model_name='customer',
            name='meals',
        ),
        migrations.AddField(
            model_name='customer',
            name='order',
            field=models.ManyToManyField(to='MultisenseHotelSystem.Order'),
        ),
    ]
