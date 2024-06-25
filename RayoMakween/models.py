from django.db import models

# Create your models here.

class Trabajo(models.Model):
    idTrabajo           = models.AutoField(primary_key=True)
    nombreTrabajo       = models.CharField(max_length=30)
    nombreMecanico      = models.CharField(max_length=20)
    fecha               = models.DateField(blank=False, null=False)
    observacion         = models.CharField(max_length=200)
    materiales          = models.CharField(max_length=80)
    imagenes            = models.ImageField(upload_to='images/')
    
    def __str__(self):
        return str(self.nombreTrabajo)
