from django.shortcuts import render, redirect, get_object_or_404
from .models import Student, Post, Accomplishment, Skill, Interest, Endorsement, Job, Application
from django.contrib.auth.decorators import login_required
from django.utils import timezone
# Create your views here.
@login_required
def feed(request):
    return render(request, 'feed.html')
@login_required
def profile(request):
    user=request.user
    student=Student.objects.get(user=user)
    return render(request, 'profile.html',{'student': student})
def show(request, student_id):
    student=get_object_or_404(Student, pk=student_id)
    return render(request, 'profile.html',{'student': student})
@login_required
def edit(request):
    student=Student.objects.get(user=request.user)
    return render(request, 'edit.html', {'student': student})
@login_required
def profile_edit(request):
    user=request.user
    student=Student.objects.get(user=user)
    if request.method == 'POST':
        fullname=request.POST['name'].split(" ",1)
        user.first_name=fullname[0].lower().capitalize()
        user.last_name=fullname[1].lower().capitalize()
        user.email=request.POST['email']
        if request.POST['newpass'] is not '':
            user.password=request.POST['newpass']
        user.save()
        student.bio=request.POST['publicinfo']
    return render(request, 'edit.html', {'student': student, 'message': 'Profile Successfully Edited'})
@login_required
def connections(request):
    return render(request, 'connections.html')
@login_required
def add_post(request):
    if request.method == 'POST':
        if request.POST['post_body']:
            post = Post()
            post.body=request.POST['post_body']
            print(request.POST['post_body'])
        if request.FILES['post_image']:
            post.image = request.FILES['post_image']
        post.date=timezone.datetime.now()
        user=request.user
        student=Student.objects.get(user=user)
        post.student=student
        post.save()
    return render(request, 'feed.html')
