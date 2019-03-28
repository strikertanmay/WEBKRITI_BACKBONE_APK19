from django import forms

from .models import Ambulance

class AmbulanceForm(forms.ModelForm):

    class Meta:
        model = Ambulance
        fields = ('driver', 'amb_num','hospital_name')
