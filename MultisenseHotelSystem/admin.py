from django.contrib import admin
from .models import Hotel
from .models import Room
from .models import SalesInfo

class HotelAdmin(admin.ModelAdmin):
	list_display = ("room_number", "room_type", "room_account", "room_status",)

class RoomAdmin(admin.ModelAdmin):
	list_display = ("hotel_name", "hotel_address", "hotel_room",)

class SalesInfoAdmin(admin.ModelAdmin):
	list_display = ("sales_number", "sales_time", "sales_type",)
admin.site.register(Hotel)
admin.site.register(Room)
admin.site.register(SalesInfo)
# Register your models here.
