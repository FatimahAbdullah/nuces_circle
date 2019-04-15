from django.shortcuts import render, redirect
from student.models import Student
from django.contrib.auth.models import User
from django.contrib import auth

def home(request):
    return render(request, 'home.html')
def login(request):
    if request.method == 'POST':
        user = auth.authenticate(username=request.POST['username'],password=request.POST['password'])
        if user is not None:
            auth.login(request, user)
            return redirect('student/feed')
        else:
            return render(request, 'home.html',{'error':'username or password is incorrect.'})
    else:
        return render(request, 'home.html')
def logout(request):
    if request.method == 'POST':
        auth.logout(request)
        return redirect('')
def student_signup(request):
    if request.method == 'POST':
        if request.POST['key'] == request.POST['key_confirm']:
            try:
                user = User.objects.get(username=request.POST['username'])
                return render(request, 'home.html', {'error':'Username has already been taken'})
            except User.DoesNotExist:
                user = User.objects.create_user(request.POST['username'], password=request.POST['key'])
                fullname=request.POST['fullname'].split(" ",1)
                user.first_name=fullname[0]
                user.last_name=fullname[1]
                user.email=request.POST['email']
                user.save()
                auth.login(request,user)
                student=Student(user=user)
                student.save()
                return redirect('student/feed')
        else:
            return render(request, 'home.html', {'error':'Passwords must match'})
    else:
        # User wants to enter info
        return render(request, 'accounts/signup.html')
