from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout

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
