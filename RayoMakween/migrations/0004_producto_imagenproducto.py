# Generated by Django 4.1.2 on 2024-06-25 22:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rayoMakween', '0003_producto_alter_trabajo_imagenes'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='imagenProducto',
            field=models.ImageField(null=True, upload_to='images'),
        ),
    ]
