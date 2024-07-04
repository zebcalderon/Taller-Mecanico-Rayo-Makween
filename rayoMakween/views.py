from django.shortcuts import render, redirect, get_object_or_404
from .forms import *
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
    if request.method == 'POST':
        trabajo_id = request.POST.get('trabajo_id')
        if trabajo_id:
            # Update existing job
            trabajo = get_object_or_404(Trabajo, idTrabajo=trabajo_id)
            form = TrabajoForm(request.POST, request.FILES, instance=trabajo)
        else:
            # Create new job
            form = TrabajoForm(request.POST, request.FILES)
        
        if form.is_valid():
            form.save()
            return redirect('trabajos')  # Replace 'trabajos' with the name of your URL pattern for this view
        else:
            print(form.errors)  # Print form errors to the console
    else:
        form = TrabajoForm()

    trabajos_todos = Trabajo.objects.all()
    isMecanico = request.user.groups.filter(name='Mecanico').exists()
    canAñadirTrabajo = request.user.has_perm('rayoMakween.add_article')

    # Create a dictionary of forms for each job
    forms_dict = {trabajo.idTrabajo: TrabajoForm(instance=trabajo) for trabajo in trabajos_todos}

    context = {
        'todos_trabajos': trabajos_todos,
        'es_Mecanico': isMecanico,
        'tiene_AñadirTrabajo': canAñadirTrabajo,
        'form': TrabajoForm(),
        'forms_dict': forms_dict,
    }

    return render(request, 'rayoMakween/trabajos.html', context)

def delete_trabajo(request, idTrabajo):
    trabajo = get_object_or_404(Trabajo, idTrabajo=idTrabajo)
    if request.method == 'POST':
        trabajo.delete()
        return redirect('trabajos')
    return render(request, 'rayoMakween/trabajos.html')

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
