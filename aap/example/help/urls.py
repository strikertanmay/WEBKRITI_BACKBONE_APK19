
from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.reg,name='register'),
    path('add/',views.add_ambulance,name='reg'),
    path('call/',views.call,name='call'),
]
