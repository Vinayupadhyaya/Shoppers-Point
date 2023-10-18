from django.shortcuts import render
from rest_framework.decorators import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *


class ReactView (APIView):
    def get(self, request):
        output = [{"name": output.name,
                   "email": output.emailid,
                   "password": output.password}
                  for output in Createaccount.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# Create your views here.
