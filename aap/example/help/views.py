from django.shortcuts import render,redirect
from .models import ambulance,user
from .forms import amb,emergency
# Create your views here.
def reg(request):
	
	return render(request,'help/page.html')

def add_ambulance(request):
	if request.method=='POST':
		form=amb(request.POST)
		if form.is_valid():
			name=request.POST['name']
			phone_number=request.POST['phone_number']
			lat=request.POST['lat']
			lon=request.POST['lon']
			use=ambulance.objects.create(name=name,phone_number=phone_number,lat=lat,lon=lon)
			use.save()
			return render(request,'help/page.html',context)
	form=amb()
	context={'form':form}
	return render(request,'help/ambulance.html',context)

def call(request):
	if request.method=='POST':
		form=emergency(request.POST)
		if form.is_valid():
			amp=ambulance.objects.filter(name__exact=request.POST['ambulance'])
			alb=amp[0]
			phone_number=request.POST['phone_number']
			use=user.objects.create(phone_number=phone_number,ambulance=alb,moderator=False)
			use.save()
			context={'all':amp}
			return render(request,'help/page.html',context)
	form=emergency()
	context={'form':form}
	return render(request,'help/ambulance.html',context)


