from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index, name='index'),
    path('galeria', views.galeria, name='galeria'),
    path('registro', views.registro, name='registro'),
    path('perfil', views.perfil, name='perfil'),
]
