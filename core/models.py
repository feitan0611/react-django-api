from django.db import models

class Developer(models.Model):
    nom = models.CharField(max_length=200)
    prenom = models.CharField(max_length=200)
    stack = models.TextField(help_text='react, html, js ...')
