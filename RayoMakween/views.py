from django.shortcuts import render
from .models import *

# Create your views here.

def inicio(request):
    primer_trabajo = Trabajo.objects.first()  # Get the first record
    trabajos_siguientes = Trabajo.objects.all()[1:3]
    
    context = {
        'trabajo1': primer_trabajo,
        'trabajos2y3': trabajos_siguientes,
        
    }
    return render(request, 'rayoMakween/inicio.html', context)

def trabajos(request):
    trabajos_todos      = Trabajo.objects.all()
    isMecanico          = request.user.groups.filter(name='Mecanico').exists()
    canAñadirTrabajo    = request.user.has_perm('rayoMakween.add_article')
    context={
        'todos_trabajos':   trabajos_todos,
        'es_Mecanico':       isMecanico,
        'tiene_AñadirTrabajo': canAñadirTrabajo
    }
    return render(request, 'rayoMakween/trabajos.html', context)

def productos(request):
    productos = Producto.objects.all()
    
    context={
        'productos': productos
    }
    return render(request, 'rayoMakween/productos.html', context)

def formPostulacion(request):
    context={}
    return render(request, 'rayoMakween/formPostulacion.html', context)

def contacto(request):
    context={}
    return render(request, 'rayoMakween/contacto.html', context)

def signin(request):
    context={}
    return render(request, 'rayoMakween/signin.html', context)

def trabajo1(request):
    context={}
    return render(request, 'rayoMakween/trabajo1.html', context)

def trabajo2(request):
    context={}
    return render(request, 'rayoMakween/trabajo2.html', context)

def trabajo3(request):
    context={}
    return render(request, 'rayoMakween/trabajo3.html', context)

def registro(request):
    context={}
    return render(request, 'rayoMakween/registro.html', context)

def prueba(request):
    context={}
    return render(request, 'rayoMakween/prueba.html', context)
