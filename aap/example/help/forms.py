from django import forms
from .models import ambulance
class amb(forms.Form):
	name=forms.CharField(max_length=50)
	phone_number=forms.IntegerField()
	lat=forms.FloatField()
	lon=forms.FloatField()

class emergency(forms.Form):
	ambulance=forms.ChoiceField(choices=[(x, x) for x in ambulance.objects.all()])
	phone_number=forms.IntegerField()
