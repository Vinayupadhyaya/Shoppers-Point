from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *
from django.conf import settings
from rest_framework import status
from django.shortcuts import redirect
import stripe 

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






# This is your test secret API key.
stripe.api_key = settings.STRIPE_SECRET_KEY;
class StripeCheckoutView(APIView):
    def get(self, request):
        return Response({"error": "GET method not allowed. Use POST."}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self , request):
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price': 'price_1PClO2SGW8vATneRCET3oXq6',
                        'quantity': 1,
                    },
                ],
                payment_method_types = ['card',],
                mode='payment',
                success_url= settings.SITE_URL + '/?success=true&&session_id={CHECKOUT_SESSION_ID}',
                cancel_url= settings.SITE_URL + '/?cancel=true',
            )
            return redirect(checkout_session.url)
        except:
            return Response(
                {'error' : 'Something went wrong when creating stripe checkout session'},
                status = status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
