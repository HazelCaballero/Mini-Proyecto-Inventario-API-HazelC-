from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from .models import Productos, categoria, Empleados
from .serializers import ProductosSerializer, CategoriaSerializer, EmpleadosSerializer

# Vistas para la entidad Categoria

# Vista para listar todas las categorías existentes
class CategoriaListView(ListAPIView):
    queryset = categoria.objects.all()  # Consulta todas las categorías
    serializer_class = CategoriaSerializer  # Usa el serializador de categoría

# Vista para crear una nueva categoría
class CategoriaCreateView(CreateAPIView):
    queryset = categoria.objects.all()  # Consulta todas las categorías (necesario para CreateAPIView)
    serializer_class = CategoriaSerializer  # Usa el serializador de categoría

# Vista para obtener los detalles de una sola categoría por su ID
class CategoriaRetrieveView(RetrieveAPIView):
    queryset = categoria.objects.all()  # Consulta todas las categorías
    serializer_class = CategoriaSerializer  # Usa el serializador de categoría

# Vista para actualizar una categoría existente
class CategoriaUpdateView(UpdateAPIView):
    queryset = categoria.objects.all()  # Consulta todas las categorías
    serializer_class = CategoriaSerializer  # Usa el serializador de categoría

# Vista para eliminar una categoría existente
class CategoriaDestroyView(DestroyAPIView):
    queryset = categoria.objects.all()  # Consulta todas las categorías
    serializer_class = CategoriaSerializer  # Usa el serializador de categoría


# Vistas para la entidad Productos

# Vista para listar todos los productos existentes
class ProductosListView(ListAPIView):
    queryset = Productos.objects.all()  # Consulta todos los productos
    serializer_class = ProductosSerializer  # Usa el serializador de productos

# Vista para crear un nuevo producto
class ProductosCreateView(CreateAPIView):
    queryset = Productos.objects.all()  # Consulta todos los productos (necesario para CreateAPIView)
    serializer_class = ProductosSerializer  # Usa el serializador de productos

# Vista para obtener los detalles de un solo producto por su ID
class ProductosRetrieveView(RetrieveAPIView):
    queryset = Productos.objects.all()  # Consulta todos los productos
    serializer_class = ProductosSerializer  # Usa el serializador de productos

# Vista para actualizar un producto existente
class ProductosUpdateView(UpdateAPIView):
    queryset = Productos.objects.all()  # Consulta todos los productos
    serializer_class = ProductosSerializer  # Usa el serializador de productos

# Vista para eliminar un producto existente
class ProductosDestroyView(DestroyAPIView):
    queryset = Productos.objects.all()  # Consulta todos los productos
    serializer_class = ProductosSerializer  # Usa el serializador de productos


# Vistas para la entidad Empleados

# Vista para listar todos los empleados existentes
class EmpleadosListView(ListAPIView):
    queryset = Empleados.objects.all()  # Consulta todos los empleados
    serializer_class = EmpleadosSerializer  # Usa el serializador de empleados

# Vista para crear un nuevo empleado
class EmpleadosCreateView(CreateAPIView):
    queryset = Empleados.objects.all()  # Consulta todos los empleados (necesario para CreateAPIView)
    serializer_class = EmpleadosSerializer  # Usa el serializador de empleados

# Vista para obtener los detalles de un solo empleado por su ID
class EmpleadosRetrieveView(RetrieveAPIView):
    queryset = Empleados.objects.all()  # Consulta todos los empleados
    serializer_class = EmpleadosSerializer  # Usa el serializador de empleados

# Vista para actualizar un empleado existente
class EmpleadosUpdateView(UpdateAPIView):
    queryset = Empleados.objects.all()  # Consulta todos los empleados
    serializer_class = EmpleadosSerializer  # Usa el serializador de empleados

# Vista para eliminar un empleado existente
class EmpleadosDestroyView(DestroyAPIView):
    queryset = Empleados.objects.all()  # Consulta todos los empleados
    serializer_class = EmpleadosSerializer  # Usa el serializador de empleados

