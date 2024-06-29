from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session
from django.utils import timezone
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    context={"clase": "inicio"}
    return render(request, 'demo/index.html', context)


def galeria(request):
    users=get_current_users()
    context={"clase": "galeria", "users":users}
    return render(request, 'demo/galeria.html', context)

@login_required
def perfil(request):
    context={"clase": "perfil"}
    return render(request, 'demo/perfil.html', context)

def registro(request):
    if request.method != "POST":
        context={"clase": "registro"}
        return render(request, 'demo/registro.html', context)
    else:
        nombre = request.POST["nombre"]
        email = request.POST["email"]
        password = request.POST["password"]
        user = User.objects.create_user(nombre, email, password)
        user.save()
        context={"clase": "registro", "mensaje":"Los datos fueron registrados"}
        return render(request, 'demo/registro.html', context)
    

def get_current_users():
    active_sessions = Session.objects.filter(expire_date__gte=timezone.now())
    user_id_list = []
    for session in active_sessions:
        data = session.get_decoded()
        user_id_list.append(data.get('_auth_user_id', None))
    # Query all logged in users based on id list
    return User.objects.filter(id__in=user_id_list)