from django.contrib import admin
from .models import Hotel
from .models import Room

class HotelAdmin(admin.ModelAdmin):
	list_display = ("room_number", "room_type", "room_account", "room_status",)

class RoomAdmin(admin.ModelAdmin):
	list_display = ("hotel_name", "hotel_address", "hotel_room",)
admin.site.register(Hotel)
admin.site.register(Room)
# Register your models here.
