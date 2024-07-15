from django.contrib import admin

# Register your models here.
from .models import Musician, Album, Genero, Postulante

admin.site.register(Musician)
admin.site.register(Album)
admin.site.register(Genero)
admin.site.register(Postulante)