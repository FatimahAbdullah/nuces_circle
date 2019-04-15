from django.db import models
from django.contrib.auth.models import User
from company.models import Company
# Create your models here.
class Student(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	image = models.ImageField(upload_to='images/', blank=True)
	bio = models.TextField(max_length=500, blank=True)
	connections = models.ManyToManyField("self")
	def __str__(self):
		return self.user.username

class Post(models.Model):
	student = models.ForeignKey(Student, on_delete=models.CASCADE)
	image = models.ImageField(upload_to='posts/', blank=True)
	body = models.TextField()
	date = models.DateTimeField(auto_now_add=True)
	def __str__(self):
		return self.body

class Accomplishment(models.Model):
	student = models.ForeignKey(Student, on_delete=models.CASCADE)
	type = models.CharField(max_length=100)
	description=models.TextField()

class Skill(models.Model):
	student = models.ForeignKey(Student, on_delete=models.CASCADE)
	name=models.CharField(max_length=150)

class Interest(models.Model):
	student = models.ForeignKey(Student, on_delete=models.CASCADE)
	company = models.OneToOneField(Company, on_delete=models.CASCADE)

class Endorsement(models.Model):
	skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
	person = models.OneToOneField(Student, on_delete=models.CASCADE)


class Job(models.Model):
    company=models.ForeignKey(Company, on_delete=models.CASCADE)
    description=models.TextField()
    applicants=models.ManyToManyField(Student, through='application',through_fields=('job','student'))

class Application(models.Model):
    job=models.ForeignKey(Job, on_delete=models.CASCADE)
    student=models.ForeignKey(Student, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
