from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views
from .views import exit



urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('inicio', views.inicio, name='inicio'),
    path('contacto', views.contacto, name='contacto'),
    path('formPostulacion', views.formPostulacion, name='formPostulacion'),
    path('login', views.login, name='login'),
     path('trabajo1', views.trabajo1, name='trabajo1'),
     path('trabajo2', views.trabajo2, name='trabajo2'),
     path('trabajo3', views.trabajo3, name='trabajo3'),
    path('trabajos', views.trabajos, name='trabajos'),
    path('trabajos/delete/<int:idTrabajo>/', views.delete_trabajo, name='delete_trabajo'),
    path('productos', views.productos, name='productos'),
    path('registro', views.registro, name='registro'),
    path('prueba', views.prueba, name='prueba'),
    path('logout', exit, name='exit'),
]
# NO BORRAR
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)