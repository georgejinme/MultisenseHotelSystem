"""WAPProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^initial/', 'MultisenseHotelSystem.views.initial', name = "initial"),

    url(r'^login/', 'MultisenseHotelSystem.views.login', name = "login"),
    url(r'^homepage/', 'MultisenseHotelSystem.views.homepage', name = "homepage"),
    url(r'^loginCheck/', 'MultisenseHotelSystem.views.loginCheck', name = "loginCheck"),
    url(r'^register/', 'MultisenseHotelSystem.views.register', name = "register"),
    url(r'^getUserInfo/', 'MultisenseHotelSystem.views.getUserInfo', name = "getUserInfo"),
    url(r'^logout/', 'MultisenseHotelSystem.views.logout', name = "logout"),

    #sales info
    url(r'^getHotelNameAndRoomType/', 'MultisenseHotelSystem.views.getHotelNameAndRoomType', name = "getHotelNameAndRoomType"),
    url(r'^getSalesInfoWithTime/', 'MultisenseHotelSystem.views.getSalesInfoWithTime', name = "getSalesInfoWithTime"),
    url(r'^getSalesInfoWithHotelAndType/', 'MultisenseHotelSystem.views.getSalesInfoWithHotelAndType', name = "getSalesInfoWithHotelAndType"),

    #staff info
    url(r'^getStaffInfo/', 'MultisenseHotelSystem.views.getStaffInfo', name = "getStaffInfo"),
    url(r'^changeStaffSalary/', 'MultisenseHotelSystem.views.changeStaffSalary', name = "changeStaffSalary"),

    #today's bill info
    url(r'^todayInfo/', 'MultisenseHotelSystem.views.todayInfo', name = "todayInfo"),
    url(r'^hotelInfo/', 'MultisenseHotelSystem.views.hotelInfo', name = "hotelInfo"),

    #reservation
    url(r'^roomInfo/', 'MultisenseHotelSystem.views.roomInfo', name = "roomInfo"),
]
