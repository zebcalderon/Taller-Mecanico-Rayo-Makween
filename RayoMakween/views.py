from django.shortcuts import render

# Create your views here.


def inicio(request):
    context={}
    return render(request, 'RayoMakween/inicio.html', context)

def formPostulacion(request):
    context={}
    return render(request, 'RayoMakween/formPostulacion.html', context)

def contacto(request):
    context={}
    return render(request, 'RayoMakween/contacto.html', context)

def signin(request):
    context={}
    return render(request, 'RayoMakween/signin.html', context)

def trabajo1(request):
    context={}
    return render(request, 'RayoMakween/trabajo1.html', context)

def trabajo2(request):
    context={}
    return render(request, 'RayoMakween/trabajo2.html', context)

def trabajo3(request):
    context={}
    return render(request, 'RayoMakween/trabajo3.html', context)

def trabajo4(request):
    context={}
    return render(request, 'RayoMakween/trabajo4.html', context)