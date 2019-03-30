from django.db import models
from django.utils import timezone
from django.conf import settings

class Ambulance(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_date = models.DateTimeField(default = timezone.now)
    driver = models.CharField(max_length=30)
    amb_num = models.CharField(max_length=10)
    hospital_name = models.CharField(max_length=50)
    
    # def publish(self):
    #     self.published_date = timezone.now()
    #     self.save()
    
    def __str__(self):
        return str(self.amb_num)
