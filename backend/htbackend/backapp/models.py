from django.db import models
from django.core.validators import MinLengthValidator
from django.contrib.auth.models import User
from django.db.models.fields import BLANK_CHOICE_DASH
# Create your models here.


class Createaccount(models.Model):
     name = models.CharField(max_length=30)
     emailid = models.EmailField(max_length=50)
     password = models.TextField(max_length=16,
                                 validators = [
                                      MinLengthValidator(8 , 'the minimum character needed for the password')
                                 ])

     