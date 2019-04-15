from django.shortcuts import render
from .models import Student, Post, Accomplishment, Skill, Interest, Endorsement, Job, Application
# Create your views here.
def home(request):
    return render(request, 'feed.html')
