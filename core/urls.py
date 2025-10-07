from django.urls import path, include
from . import views
from rest_framework import routers
from .views import DevViewSet

router = routers.DefaultRouter()
router.register(r'developpeurs', DevViewSet, basename='developpeurs')

urlpatterns = [
    path('', views.index, name='index'),
    path('boutique/', views.index, name='boutique'),
    # route
    path('', include(router.urls)),
]
