from django.db import models

# Create your models here.


class Createaccount(models.Model):
    name = models.CharField(max_length=30)
    emailid = models.CharField(max_length=100)
    password = models.CharField(max_length=20)
