from django.shortcuts import render
from .models import Student, Post, Accomplishment, Skill, Interest, Endorsement, Job, Application
# Create your views here.
def feed(request):
    return render(request, 'feed.html')
def profile(request):
    return render(request, 'profile.html')
def edit(request):
    return render(request, 'edit.html')
def connections(request):
    return render(request, 'connections.html')
