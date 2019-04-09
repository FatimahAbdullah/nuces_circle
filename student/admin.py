from django.contrib import admin
from .models import Student, Post, Accomplishment, Skill, Interest, Endorsement, Job, Application

# Register your models here.
admin.site.register(Student)
admin.site.register(Post)
admin.site.register(Accomplishment)
admin.site.register(Skill)
admin.site.register(Interest)
admin.site.register(Endorsement)
admin.site.register(Job)
admin.site.register(Application)
