from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Company(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    logo = models.ImageField(upload_to='logos/',blank=True)
    name= models.CharField(max_length=100)
    description=models.TextField()
