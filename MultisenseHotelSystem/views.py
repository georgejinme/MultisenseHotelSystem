from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from MultisenseHotelSystem.models import Hotel
from MultisenseHotelSystem.models import Room

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
			user.first_name = "manager"
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
