from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404, redirect
from .models import Ambulance
from django.utils import timezone
from .forms import AmbulanceForm
from django.contrib.auth.decorators import login_required

def ambulance_list(request):
    ambulances = Ambulance.objects.all()
    return render(request, 'ambulance_list.html', {'ambulances' : ambulances})

def ambulance_detail(request,pk):
    ambulance = get_object_or_404(Ambulance,pk=pk)
    return render(request, 'ambulance_detail.html', {'ambulance' : ambulance})

@login_required
def ambulance_new(request):
    if request.method == "POST":
        form = AmbulanceForm(request.POST)
        if form.is_valid():
            ambulance = form.save(commit=False)
            ambulance.user = request.user
            ambulance.published_date = timezone.now()
            ambulance.save()
            return redirect('Q1:ambulance_list', pk=ambulance.pk)
    else:
        form = AmbulanceForm()
    return render(request, 'ambulance_edit.html', {'form': form})

@login_required
def ambulance_edit(request, pk):
    ambulance = get_object_or_404(Ambulance, pk=pk)
    if request.method == "POST":
        form = AmbulanceForm(request.POST, instance=ambulance)
        if form.is_valid():
            ambulance = form.save(commit=False)
            ambulance.author = request.user
            ambulance.published_date = timezone.now()
            ambulance.save()
            return redirect('Q1:ambulance_detail', pk=ambulance.pk)
    else:
        form = AmbulanceForm(instance=ambulance)
    return render(request, 'ambulance_edit.html', {'form': form})