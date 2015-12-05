from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from MultisenseHotelSystem.models import Hotel
from MultisenseHotelSystem.models import Room
from MultisenseHotelSystem.models import SalesInfo
from MultisenseHotelSystem.models import Staff
from MultisenseHotelSystem.models import Receptionist
from MultisenseHotelSystem.models import Customer
from django.utils import timezone
import datetime
import time
import csv

#initial database
def initial(request):
	'''hotelname = ["Magic Castle Hotel", "Hotel Magic stone", "Magic Hotel Los Angeles", "Jerry's Magic Motel",
				 "The Line Magic", "Magic Sunset Boulevard Hotel", "Hotel Magic stone", "The Surrey Magic",
				 "The Mark Magic", "the Quin Magic", "Library Magic Hotel", "Hotel Magic Elysee", "The Pearl Magic Hotel",
				 "The Broome Magic", "Magic Distrikt Hotel", "The Magic Nolitan Hotel", "Affinia Magic Gardens",
				 "Hotel Le Soleil Magic", "Opus Hotel Magic", "The Talbott Hotel Magic", "Thompson Hotel Magic"]
	hoteladdress = ["7025 Franklin Avenue, Hollywood, Los Angeles, CA 90028 (Central L.A)",
					"701 Stone Canyon Rd., Los Angeles, CA 90077 (Westside)",
					"8435 Beverly Blvd, Los Angeles, CA 90048 (Central L.A)",
					"285 Lucas Avenue, Los Angeles, CA 90026 (Downtown)",
					"3515 Wilshire Blvd., Los Angeles, CA 90010 (Formerly The Wilshire Hotel Los Angeles) (Central L.A)",
					"11461 Sunset Boulevard, Los Angeles, CA 90049 (Westside)",
					"1697 Pacific Avenue, Venice Beach, Los Angeles, CA 90291 (Westside)",
					"20 E. 76th Street, New York City, NY 10021",
					"Madison Avenue at 77th Street, 25 East 77th Street, New York City, NY 10078 (Manhattan)",
					"101 West 57th Street, at 6th Avenue, New York City, NY 10019 (Manhattan)",
					"299 Madison Ave., at 41st St., Entrance on 41st Street, New York City, NY 10017 (Manhattan)",
					"60 E. 54th St., New York City, NY 10022 (Manhattan)",
					"233 West 49th Street, New York City, NY 10019 (Manhattan)",
					"431 Broome Street, New York City, NY 10013 (Manhattan)",
					"342 West 40th Street, New York City, NY 10018 (Manhattan)",
					"30 Kenmare Street, New York City, NY 10012 (Manhattan)",
					"215 E 64th Street, New York City, NY 10021 (Formerly Lyden Gardens) (Manhattan)",
					"567 Hornby St, Vancouver, British Columbia V6C 2E8, Canada (Downtown)",
					"322 Davie Street, Vancouver, British Columbia V6B 5Z6, Canada (Downtown)",
					"20 East Delaware Place, Chicago, IL 60611 (Gold Coast)",
					"21 E. Bellevue Place, Chicago, IL 60611 (Gold Coast)"]
	hoteltel = ["1 323-851-0800", "1 310-472-1211", "866-203-2212", "213-481-8181", "213-381-7411", "310-476-6571",
				"310-452-1111", "212-288-3700", "866-744-4300", "212-245-7846", "212-983-4500", "212-753-1066",
				"800-801-3457", "212-431-2929", "212-706-6100", "212-925-2555", "212-355-1230", "877-632-3030",
				"866-642-6787", "+1 312-825-2688", "+1 312-266-2100"]
	for i in range(0, 21):
		h = Hotel(hotel_name = hotelname[i], hotel_address = hoteladdress[i], hotel_tel = hoteltel[i])	
		h.save()	
		for i in range(0, 10):
			p = Room(room_number = "100" + str(i), room_type = "SINGLE", room_account = 230, room_status = "available")
			p.save()
			h.hotel_room.add(p)
		for i in range(0, 10):
			p = Room(room_number = "200" + str(i), room_type = "DOUBLE", room_account = 200, room_status = "available")
			p.save()
			h.hotel_room.add(p)
		for i in range(0, 10):
			p = Room(room_number = "300" + str(i), room_type = "SEMIDOUBLE", room_account = 190, room_status = "available")
			p.save()
			h.hotel_room.add(p)
		for i in range(0, 10):
			p = Room(room_number = "400" + str(i), room_type = "TWIN", room_account = 200, room_status = "available")
			p.save()
			h.hotel_room.add(p)
		for i in range(0, 10):
			p = Room(room_number = "500" + str(i), room_type = "TRIPLE", room_account = 210, room_status = "available")
			p.save()
			h.hotel_room.add(p)
		for i in range(0, 10):
			p = Room(room_number = "600" + str(i), room_type = "SUITE", room_account = 230, room_status = "available")
			p.save()
			h.hotel_room.add(p)
		for i in range(0, 10):
			p = Room(room_number = "700" + str(i), room_type = "OTHER", room_account = 0, room_status = "available")
			p.save()
			h.hotel_room.add(p)
	'''
	'''for i in range(0, 6):
		currtime = time.mktime(datetime.datetime.now().timetuple())
		s = SalesInfo(sale_number = 230, sale_time = int(currtime), sale_type = "SINGLE", sale_hotel = "Magic Castle Hotel")
		s.save()
		s = SalesInfo(sale_number = 230, sale_time = int(currtime), sale_type = "SINGLE", sale_hotel = "Hotel Magic stone")
		s.save()
	for i in range(0, 10):
		currtime = time.mktime(datetime.datetime.now().timetuple())
		s = SalesInfo(sale_number = 200, sale_time = int(currtime), sale_type = "DOUBLE", sale_hotel = "Magic Castle Hotel")
		s.save()
		s = SalesInfo(sale_number = 200, sale_time = int(currtime), sale_type = "DOUBLE", sale_hotel = "Library Magic Hotel")
		s.save()
	for i in range(0, 3):
		currtime = time.mktime(datetime.datetime.now().timetuple())
		s = SalesInfo(sale_number = 190, sale_time = int(currtime), sale_type = "SEMIDOUBLE", sale_hotel = "Magic Castle Hotel")
		s.save()
		s = SalesInfo(sale_number = 190, sale_time = int(currtime), sale_type = "SEMIDOUBLE", sale_hotel = "Thompson Hotel Magic")
		s.save()
	for i in range(0, 9):
		currtime = time.mktime(datetime.datetime.now().timetuple())
		s = SalesInfo(sale_number = 200, sale_time = int(currtime), sale_type = "TWIN", sale_hotel = "Magic Castle Hotel")
		s.save()
		s = SalesInfo(sale_number = 200, sale_time = int(currtime), sale_type = "TWIN", sale_hotel = "The Broome Magic")
		s.save()
	for i in range(0, 2):
		currtime = time.mktime(datetime.datetime.now().timetuple())
		s = SalesInfo(sale_number = 210, sale_time = int(currtime), sale_type = "TRIPLE", sale_hotel = "Magic Castle Hotel")
		s.save()
		s = SalesInfo(sale_number = 210, sale_time = int(currtime), sale_type = "TRIPLE", sale_hotel = "the Quin Magic")
		s.save()
	for i in range(0, 1):
		currtime = time.mktime(datetime.datetime.now().timetuple())
		s = SalesInfo(sale_number = 230, sale_time = int(currtime), sale_type = "SUITE", sale_hotel = "Magic Castle Hotel")
		s.save()
		s = SalesInfo(sale_number = 230, sale_time = int(currtime), sale_type = "SUITE", sale_hotel = "The Mark Magic")
		s.save()
	return HttpResponse("initial success")'''
	'''csvfile = file('/Users/gougoumemeda/WAPProject/MultisenseHotelSystem/static/csv/STAFF_MST.csv', 'rb')
	reader = csv.reader(csvfile)
	for line in reader:
		if (line[5] == 'hotel_id'):
			continue
		s = Staff(staff_name = line[1], staff_gender = line[2], staff_rank = line[3], staff_position = line[4], staff_hotel = hotelname[int(line[5]) - 1])
		s.save()
	csvfile.close()'''
	'''u = User.objects.get(username = "xinr")
	r = Receptionist(name = "xinr", gender = "female", address = "Shanghai Dongchuan Road No.800", hotel = "Magic Castle Hotel", authorityUser = u)
	r.save()
	print User.objects.get(username = "xinr")'''
	return HttpResponse("initial error: you have already initialized.")



#login and register
def login(request):
	if (request.user.is_authenticated()):
		return HttpResponseRedirect("/homepage/")
	return render(request, 'login/login.html')

def loginCheck(request):
	if (request.method == 'POST'):
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(username=username, password=password)
		if user is not None:
			auth_login(request, user)
			return JsonResponse("Login Success", safe=False)
		else:
			return JsonResponse("Wrong Username or Password", safe=False)
	else:
		return JsonResponse("Login Fail", safe=False)

def register(request):
	if (request.method == 'POST'):
		username = request.POST['username']
		password = request.POST['password']
		email = request.POST['email']
		if (len(User.objects.filter(username=username)) != 0):
			return JsonResponse("Username Already Exists", safe=False)
		else:
			user = User.objects.create_user(username, email, password)
			user.is_staff = False
			user.first_name = "Customer"
			user.save()
			c = Customer(name = username, gender = "male", email = email, address = "Shanghai Dongchuan Road", passpord = "310114199411023811", tel = "18017126712", authorityUser = user)
			c.save()
			return JsonResponse("Regist Success", safe=False)
	else:
		return JsonResponse("Regist Fail", safe=False)

#log out
def logout(request):
	auth_logout(request)
	return JsonResponse("Log Out success", safe=False)

#main page
def homepage(request):
	if (request.user.is_authenticated()):
		return render(request, 'homepage/homepage.html')
	else:
		return HttpResponseRedirect("/login/")

def getUserInfo(request):
	res = {"username": request.user.username, "type": request.user.first_name}
	return JsonResponse(res, safe = False)

#manager sales info
def getHotelNameAndRoomType(request):
	hotels = {"name": ["ALL"], "type": ["ALL", "SINGLE", "DOUBLE", "SEMIDOUBLE", "TWIN", "TRIPLE", "SUITE"]}
	for i in Hotel.objects.all():
		hotels["name"].append(i.hotel_name)
	return JsonResponse(hotels, safe=False)

def getSalesInfoWithTime(request):
	res = {'timeLabel':[], 'ammount': []}
	currtime = time.mktime(datetime.datetime.now().timetuple())
	sales = SalesInfo.objects.all()
	if (request.POST['time'] == "ALL"):
		currYear = time.localtime().tm_year
		for i in range(currYear - 4, currYear + 1):
			res['timeLabel'].append(i)
			res['ammount'].append(0)
		for s in sales:
			if 4 - (int(currtime) - s.sale_time) / 31507200 >= 0:
				res['ammount'][currYear + 4 - time.localtime(s.sale_time).tm_year] += s.sale_number
			else:
				break;
	elif (request.POST['time'] == "Today"):
		currHour = time.localtime().tm_hour 
		for i in range(0, currHour + 1):
			res['timeLabel'].append(i)
			res['ammount'].append(0)
		for s in sales:
			if currHour - (int(currtime) - s.sale_time) / 3600 >= 0:
				res['ammount'][time.localtime(s.sale_time).tm_hour] += s.sale_number
			else:
				break;
	elif (request.POST['time'] == "One Week"):
		currWeek = time.localtime().tm_wday
		for i in range(1, currWeek + 1):
			res['timeLabel'].append(i)
			res['ammount'].append(0)
		for s in sales:
			if currWeek - (int(currtime) - s.sale_time) / 86400 >= 0:
				res['ammount'][time.localtime(s.sale_time).tm_wday - 1] += s.sale_number
			else:
				break
	elif (request.POST['time'] == "One Month"):
		currDay = time.localtime().tm_mday
		for i in range(1, currDay + 1):
			res['timeLabel'].append(i)
			res['ammount'].append(0)
		for s in sales:
			if currDay - (int(currtime) - s.sale_time) / 86400 >= 0:
				res['ammount'][time.localtime(s.sale_time).tm_mday - 1] += s.sale_number
			else:
				break;
	elif (request.POST['time'] == "One Year"):
		currMonth = time.localtime().tm_mon
		for i in range(1, currMonth + 1):
			res['timeLabel'].append(i)
			res['ammount'].append(0)
		for s in sales:
			if currMonth - (int(currtime) - s.sale_time) / 2625600 >= 0:
				res['ammount'][time.localtime(s.sale_time).tm_mon - 1] += s.sale_number
			else:
				break;

	return JsonResponse(res, safe=False)


def getSalesInfoWithHotelAndType(request):
	hotel = request.POST['hotel']
	typeN = request.POST['type']
	currtime = time.mktime(datetime.datetime.now().timetuple())
	res = {"hotel": [], "type": [], "amount": []}
	if (request.POST['priority'] == "hotel"):
		typeN = "ALL"
	elif (request.POST['priority'] == "type"):
		hotel = "ALL"
	sales = ""
	if (hotel == "ALL"):
		if (typeN != "ALL"):
			sales = SalesInfo.objects.filter(sale_type=typeN)
		else:
			sales = SalesInfo.objects.all()
		for i in Hotel.objects.all():
			res['hotel'].append(i.hotel_name)
			res['amount'].append(0)
		if request.POST['time'] == "ALL":
			for s in sales:
				res['amount'][res['hotel'].index(s.sale_hotel)] += s.sale_number
		elif request.POST['time'] == "Today":
			currHour = time.localtime().tm_hour
			for s in sales:
				if (int(currtime) - s.sale_time) / 3600 <= currHour:
					res['amount'][res['hotel'].index(s.sale_hotel)] += s.sale_number
				else:
					break;
		elif request.POST['time'] == "One Week":
			currWeek = time.localtime().tm_wday
			for s in sales:
				if (int(currtime) - s.sale_time) / 86400 <= currWeek:
					res['amount'][res['hotel'].index(s.sale_hotel)] += s.sale_number
				else:
					break;
		elif request.POST['time'] == "One Month":
			currDay = time.localtime().tm_mday
			for s in sales:
				if (int(currtime) - s.sale_time) / 86400 <= currDay:
					res['amount'][res['hotel'].index(s.sale_hotel)] += s.sale_number
				else:
					break;
		elif request.POST['time'] == "One Year":
			currMonth = time.localtime().tm_mon
			for s in sales:
				if (int(currtime) - s.sale_time) / 2625600 <= currMonth:
					res['amount'][res['hotel'].index(s.sale_hotel)] += s.sale_number
				else:
					break;
	else:
		sales = SalesInfo.objects.filter(sale_hotel=hotel)
		res['type'] = ["SINGLE", "DOUBLE", "SEMIDOUBLE", "TWIN", "TRIPLE", "SUITE"]
		res['amount'] = [0, 0, 0, 0, 0, 0]
		if request.POST['time'] == "ALL":
			for s in sales:
				res['amount'][res['type'].index(s.sale_type)] += s.sale_number
		elif request.POST['time'] == "Today":
			currHour = time.localtime().tm_hour
			for s in sales:
				if (int(currtime) - s.sale_time) / 3600 <= currHour:
					res['amount'][res['type'].index(s.sale_type)] += s.sale_number
				else:
					break;
		elif request.POST['time'] == "One Week":
			currWeek = time.localtime().tm_wday
			for s in sales:
				if (int(currtime) - s.sale_time) / 86400 <= currWeek:
					res['amount'][res['type'].index(s.sale_type)] += s.sale_number
				else:
					break;
		elif request.POST['time'] == "One Month":
			currDay = time.localtime().tm_mday
			for s in sales:
				if (int(currtime) - s.sale_time) / 86400 <= currDay:
					res['amount'][res['type'].index(s.sale_type)] += s.sale_number
				else:
					break;
		elif request.POST['time'] == "One Year":
			currMonth = time.localtime().tm_mon
			for s in sales:
				if (int(currtime) - s.sale_time) / 2625600 <= currMonth:
					res['amount'][res['type'].index(s.sale_type)] += s.sale_number
				else:
					break;
	return JsonResponse(res, safe=False)

# manager human resource staff info
def getStaffInfo(request):
	res = {'staff':[]}
	staff = Staff.objects.all()
	for s in staff:
		if s.staff_position.find("manager") == -1:
			tmp = {'name': s.staff_name, 'gender': s.staff_gender, 'rank': s.staff_rank, 'hotel': s.staff_hotel, 'salary': s.staff_salary}
			res['staff'].append(tmp)
	return JsonResponse(res, safe=False)

def changeStaffSalary(request):
	name = request.POST['pname'].split("|")
	salary = request.POST['psalary']
	for n in name:
		s = Staff.objects.filter(staff_name = n).update(staff_salary = salary)
	return JsonResponse({"success": True}, safe=False)


# receptionist check bill
def todayInfo(request):
	res = {'today': ""}
	currTimeUnix = time.localtime()
	currtime = time.strftime("%Y-%m-%d %H:%M:%S", currTimeUnix)
	res['today'] = currtime
	return JsonResponse(res, safe=False)

def hotelInfo(request):
	res = {"hotel": request.user.receptionist.hotel}
	return JsonResponse(res, safe=False)





