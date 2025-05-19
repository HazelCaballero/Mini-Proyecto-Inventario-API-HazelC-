from django.db import models

# Tabla para almacenar las categorías de productos
class categoria(models.Model):
    # Nombre de la categoría (único y obligatorio)
    nombre = models.CharField(max_length=100, null=False, unique=True)
    # Descripción de la categoría (opcional)
    descripcion = models.TextField(null=True, blank=True)
    
    # Representación en texto de la categoría
    def __str__(self):
        return self.nombre

# Tabla para almacenar los productos
class Productos(models.Model):
    # Nombre del producto (obligatorio)
    nombre = models.CharField(max_length=100, null=False)
    # Descripción del producto (opcional)
    descripcion = models.TextField(null=True, blank=True)
    # Precio del producto (obligatorio, hasta 10 dígitos y 2 decimales)
    precio = models.DecimalField(max_digits=10, decimal_places=2, null=False)
    # Cantidad disponible en stock (por defecto 0)
    stock = models.IntegerField(default=0)
    # Relación con la categoría (clave foránea, si se elimina la categoría se eliminan los productos)
    categoria = models.ForeignKey(categoria, on_delete=models.CASCADE, related_name='productos')

    # Representación en texto del producto
    def __str__(self):
        return self.nombre

# Tabla para almacenar empleados
class Empleados(models.Model):
    # Nombre del empleado (obligatorio)
    nombre = models.CharField(max_length=100, null=False)
    # Apellido del empleado (obligatorio)
    apellido = models.CharField(max_length=100, null=False)
    # Correo electrónico único del empleado (obligatorio)
    email = models.EmailField(unique=True, null=False)
    # Teléfono del empleado (opcional)
    telefono = models.CharField(max_length=15, blank=True, null=True)
    # Fecha de contratación del empleado (obligatorio)
    fecha_contratacion = models.DateField(null=False)
    # Cédula única del empleado (obligatorio)
    cedula = models.CharField(max_length=12, unique=True, null=False)

    # Representación en texto del empleado
    def __str__(self):
        return f"{self.nombre} {self.apellido}"
