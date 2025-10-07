from rest_framework import serializers
from .models import Developer

class DevSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = '__all__'