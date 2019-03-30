from django.shortcuts import render

def basic(request):
    return render(request,'base.html',context=None)