from django.urls import path
from . import views



urlpatterns = [
    path('inicio', views.inicio, name='inicio'),
    path('contacto', views.contacto, name='contacto'),
    path('formPostulacion', views.formPostulacion, name='formPostulacion'),
    path('signin', views.signin, name='signin'),
    path('trabajo1', views.trabajo1, name='trabajo1'),
    path('trabajo2', views.trabajo2, name='trabajo2'),
    path('trabajo3', views.trabajo3, name='trabajo3'),
    path('trabajos', views.trabajos, name='trabajos'),
    path('productos', views.productos, name='productos'),
    path('registro', views.registro, name='registro'),
]
