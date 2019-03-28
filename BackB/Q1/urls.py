from django.urls import path
from . import views

app_name = 'Q1'
urlpatterns = [
    path('', views.ambulance_list, name='ambulance_list'),
    path('<int:pk>/', views.ambulance_detail, name='ambulance_detail'),
    #path('new/', views.post_new, name='post_new'),
    # path('<int:pk>/edit/', views.post_edit, name='post_edit'),
    # path('<int:pk>/remove/',views.comment_remove, name='comment_remove'),
]