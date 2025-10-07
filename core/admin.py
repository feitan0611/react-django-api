from django.contrib import admin
from .models import Developer

@admin.register(Developer)
class DevAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prenom', 'stack')