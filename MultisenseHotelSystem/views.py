from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User

#login and register
def login(request):
    return render(request, 'login/login.html')

def loginCheck(request):
    return JsonResponse("fuck", safe=False)

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


#main page
def homepage(request):
    return render(request, 'homepage/homepage.html')