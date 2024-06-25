from django.shortcuts import render

# Create your views here.

def inicio(request):
    context={}
    return render(request, 'rayoMakween/inicio.html', context)

def formPostulacion(request):
    context={}
    return render(request, 'rayoMakween/formPostulacion.html', context)

def contacto(request):
    context={}
    return render(request, 'rayoMakween/contacto.html', context)

def productos(request):
    context={}
    return render(request, 'rayoMakween/productos.html', context)

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

def trabajos(request):
    context={}
    return render(request, 'rayoMakween/trabajos.html', context)

def registro(request):
    context={}
    return render(request, 'rayoMakween/registro.html', context)