from django.urls import path
from . import views

app_name = 'Q1'
urlpatterns = [
    path('', views.ambulance_list, name='ambulance_list'),
    path('<int:pk>/', views.ambulance_detail, name='ambulance_detail'),
    path('new/', views.ambulance_new, name='ambulance_new'),
    path('<int:pk>/edit/', views.ambulance_edit, name='ambulance_edit'),
]