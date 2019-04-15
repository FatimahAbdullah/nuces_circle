from django.shortcuts import render
from student.models import Student
def home(request):
    return render(request, 'home.html')
def login(request):
    return render(request, 'home.html')
def student_signup(request):
    if request.method == 'POST':
        print(1)
        if request.POST['key'] == request.POST['key_confirm']:
            try:
                user = User.objects.get(username=request.POST['username'])
                return render(request, 'home.html', {'error':'Username has already been taken'})
                print(2)
            except User.DoesNotExist:
                user = User.objects.create_user(request.POST['username'], password=request.POST['key'])
                fullname=request.POST['fullname'].split(" ",1)
                user.first_name=fullname[0]
                user.last_name=fullname[1]
                user.email=request.POST['email']
                print(3)
                auth.login(request,user)
                student=Student()
                student.user=user
                print(4)
                return redirect('student/feed')
        else:
            return render(request, 'home.html', {'error':'Passwords must match'})
    else:
        # User wants to enter info
        return render(request, 'accounts/signup.html')
