from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Trabajo(models.Model):
    idTrabajo           = models.AutoField(primary_key=True)
    nombreTrabajo       = models.CharField(max_length=30)
    nombreMecanico      = models.CharField(max_length=20, null=True)
    fecha               = models.DateField(blank=False, null=False)
    observacion         = models.CharField(max_length=200)
    materiales          = models.CharField(max_length=80)
    imagenes            = models.ImageField(upload_to='images', null=True)
    
    def __str__(self):
        return str(self.nombreTrabajo)+" REALIZADO POR: "+ str(self.nombreMecanico)
    
class Producto(models.Model):
    idProducto          = models.AutoField(primary_key=True)
    nombreProducto      = models.CharField(max_length=50)
    precioProducto      = models.IntegerField()
    marcaProducto       = models.CharField(max_length=30)
    imagenProducto      = models.ImageField(upload_to='images', null=True)

    def __str__(self):
        return str(self.nombreProducto)+ " " + str(self.marcaProducto)+ " $" + str(self.precioProducto)

class Perfil(models.Model):
    USUARIO_CHOICES = [
        ('Cliente', 'Cliente'),
        ('Administrador', 'Administrador'),
        ('Superusuario', 'Superusuario'),
    ]
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    tipo_usuario = models.CharField(
        choices=USUARIO_CHOICES,
        max_length=50,
        blank=False,
        null=False,
        verbose_name='Tipo de usuario'
    )
    rut = models.CharField(max_length=15, blank=False, null=False, verbose_name='RUT')
    direccion = models.CharField(max_length=800, blank=False, null=False, verbose_name='Dirección')
    subscrito = models.BooleanField(blank=False, null=False, verbose_name='Subscrito')
    imagen = models.ImageField(upload_to='perfiles/', blank=False, null=False, verbose_name='Imagen')
    
    class Meta:
        db_table = 'Perfil'
        verbose_name = "Perfil de usuario"
        verbose_name_plural = "Perfiles de usuarios"
        ordering = ['tipo_usuario']

    def __str__(self):
        return f'{self.usuario.first_name} {self.usuario.last_name} (ID {self.id} - {self.tipo_usuario})'
    
    def acciones():
        return {
            'accion_eliminar': 'eliminar el Perfil',
            'accion_actualizar': 'actualizar el Perfil'
        }