from django.contrib import admin
from .models import Hotel
from .models import Room
from .models import SalesInfo
from .models import Staff

class HotelAdmin(admin.ModelAdmin):
	list_display = ("room_number", "room_type", "room_account", "room_status",)

class RoomAdmin(admin.ModelAdmin):
	list_display = ("hotel_name", "hotel_address", "hotel_room",)

class SalesInfoAdmin(admin.ModelAdmin):
	list_display = ("sales_number", "sales_time", "sales_type",)

class StaffAdmin(admin.ModelAdmin):
	list_display = ("staff_name", "staff_gender", "staff_rank", "staff_position", "staff_hotel", "staff_salary")

admin.site.register(Hotel)
admin.site.register(Room)
admin.site.register(SalesInfo)
admin.site.register(Staff)
# Register your models here.
