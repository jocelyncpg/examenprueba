from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index, name='index'),
    path('galeria', views.galeria, name='galeria'),
    path('registro', views.registro, name='registro'),
    path('perfil', views.perfil, name='perfil'),
    path('vinilo', views.vinilo, name='vinilo'),
    path('contactanos', views.contactanos, name='contactanos'),
    path('comprar', views.comprar, name='comprar'),  
    path('cassette', views.cassette, name='cassette'),   
    path('cd', views.cd, name='cd'),     
    path('pagar/', views.pagar, name='pagar'),
    path('realizarpago/', views.realizarpago, name='realizarpago'),      
    
       # Ingresar
    path('listadoSQL', views.listadoSQL, name='listadoSQL'),
    path('crud/', views.crud, name='crud'),
    path('alumnosAdd/', views.alumnosAdd, name='alumnosAdd'),
    path('alumnos_del/<str:pk>/', views.alumnos_del, name='alumnos_del'),
    path('alumnos_findEdit/<str:pk>/', views.alumnos_finEdit, name='alumnos_findEdit'),
    path('alumnosUpdate/', views.alumnosUpdate, name='alumnosUpdate'),    
]


