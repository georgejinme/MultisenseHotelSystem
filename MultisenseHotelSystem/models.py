from django.db import models

# Create your models here.

class Room(models.Model):
	room_number = models.CharField(max_length = 10)
# SINGLE, DOUBLE SEMIDOUBLE, TWIN, TRIPLE, SUITE, OTHER
	room_type = models.CharField(max_length = 20)
	room_account = models.IntegerField()
# available, booked, purchased, occupied
	room_status = models.CharField(max_length = 20)
	def __unicode__(self):
		return str(self.id) + "|" + self.room_number + "|" + self.room_type + "|" + self.room_status

class Hotel(models.Model):
	hotel_name = models.CharField(max_length = 100)
	hotel_address = models.CharField(max_length = 500)
	hotel_tel = models.CharField(max_length = 20)
	hotel_room = models.ManyToManyField(Room)
	def __unicode__(self):
		return self.hotel_name + "|" + self.hotel_address + "|" + self.hotel_tel

class SalesInfo(models.Model):
	sale_number = models.IntegerField()
	sale_time = models.IntegerField()
	sale_type = models.CharField(max_length = 20)
	sale_hotel = models.CharField(max_length = 100)
	def __unicode__(self):
		return str(self.id)

class Staff(models.Model):
	staff_name = models.CharField(max_length = 40)
	staff_gender = models.CharField(max_length = 10)
	staff_rank = models.CharField(max_length = 20)
	staff_position = models.CharField(max_length = 20)
	staff_hotel = models.CharField(max_length = 100)
	def __unicode__(self):
		return str(self.id) + "|" + self.staff_name