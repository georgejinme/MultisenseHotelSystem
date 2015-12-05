# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultisenseHotelSystem', '0012_auto_20151206_0009'),
    ]

    operations = [
        migrations.CreateModel(
            name='Meals',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=40)),
                ('price', models.IntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='customer',
            name='meals',
            field=models.ManyToManyField(to='MultisenseHotelSystem.Meals'),
        ),
    ]
