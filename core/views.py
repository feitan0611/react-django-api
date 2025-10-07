from django.shortcuts import render
from .models import Developer
from rest_framework import viewsets, permissions
from .serializers import DevSerializer

# Create your views here.

def index(request):
    developer = Developer.objects.all()
    return render(request, 'core/index.html', {'developer' : developer})

def boutique(request):
    return render(request, 'core/boutique.html')

# viwestes 

class DevViewSet(viewsets.ModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DevSerializer
