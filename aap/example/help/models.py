from django.db import models
# Create your models here.
class ambulance(models.Model):
	#driver name and phone number along with the given location
	name=models.CharField(max_length=50)
	phone_number=models.IntegerField(default=0)
	def __str__(self):
		return self.name
class user(models.Model):
	phone_number=models.IntegerField(default=0)
	moderator=models.BooleanField(default=False)
	ambulance=models.ForeignKey(ambulance,on_delete=models.CASCADE)