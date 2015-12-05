from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Room(models.Model):
	room_number = models.CharField(max_length = 10)
# SINGLE, DOUBLE SEMIDOUBLE, TWIN, TRIPLE, SUITE, OTHER
	room_type = models.CharField(max_length = 20)
	room_account = models.IntegerField()
# available, booked, occupied
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

class Meals(models.Model):
	name = models.CharField(max_length = 40)
	price = models.IntegerField()
	def __unicode__(self):
		return str(self.id) + "|" + self.name + "|" + str(self.price)

class Staff(models.Model):
	staff_name = models.CharField(max_length = 40)
	staff_gender = models.CharField(max_length = 10)
	staff_rank = models.CharField(max_length = 20)
	staff_position = models.CharField(max_length = 20)
	staff_hotel = models.CharField(max_length = 100)
	staff_salary = models.IntegerField()
	def __unicode__(self):
		return str(self.id) + "|" + self.staff_name

class Receptionist(models.Model):
	name = models.CharField(max_length = 40)
	gender = models.CharField(max_length = 10)
	address = models.CharField(max_length = 500)
	hotel = models.CharField(max_length = 100)
	authorityUser = models.OneToOneField(User)
	def __unicode__(self):
		return str(self.id) + "|" + self.name

class Customer(models.Model):
	name = models.CharField(max_length = 40)
	gender = models.CharField(max_length = 10)
	email = models.CharField(max_length = 40)
	address = models.CharField(max_length = 500)
	hotel = models.ForeignKey(Room, null = True, blank=True)
	passpord = models.CharField(max_length = 100)
	tel = models.CharField(max_length = 30)
	authorityUser = models.OneToOneField(User)
	meals = models.ManyToManyField(Meals)
	def __unicode__(self):
		return str(self.id) + "|" + self.name

