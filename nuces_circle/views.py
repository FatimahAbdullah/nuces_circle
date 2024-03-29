from django.shortcuts import render, redirect
from student.models import Student
from django.contrib.auth.models import User
from django.contrib import auth
from django.core.mail import send_mail

def home(request):
    if request.user.is_authenticated:
        print('authenticated')
        return redirect('/student/feed')
    print('NOT authenticated')
    return render(request, 'home.html')
def login(request):
    if request.method == 'POST':
        user = auth.authenticate(username=request.POST['username_login'],password=request.POST['password_login'])
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
        return redirect('home')
def student_signup(request):
    if request.method == 'POST':
        if request.POST['key'] == request.POST['key_confirm']:
            try:
                user = User.objects.get(username=request.POST['username'])
                return render(request, 'home.html', {'error':'Username has already been taken'})
            except User.DoesNotExist:
                user = User.objects.create_user(request.POST['username'], password=request.POST['key'])
                fullname=request.POST['fullname'].split(" ",1)
                user.first_name=fullname[0].lower().capitalize()
                user.last_name=fullname[1].lower().capitalize()
                user.email=request.POST['email']
                user.save()
                auth.login(request,user)
                student=Student(user=user)
                student.save()
                send_mail(
                'NUCES Circle Validation',
                'Hi user, \n\nYour NUCES-Circle account has been created. Enjoy!\n\nBest Regards,\nNUCES-Circle Team',
                'nuces.circle.confirmation@gmail.com',
                [user.email],
                fail_silently=False,
                )
                return redirect('student/feed')
        else:
            return render(request, 'home.html', {'error':'Passwords must match'})
    else:
        # User wants to enter info
        return render(request, 'accounts/signup.html')
