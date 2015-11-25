from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect, JsonResponse

def login(request):
    return render(request, 'login/login.html')

def loginCheck(request):
    return JsonResponse("fuck", safe=False)

def homepage(request):
    return render(request, 'homepage/homepage.html')