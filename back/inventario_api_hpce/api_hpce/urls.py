# Importamos la función path para definir las rutas de la API
from django.urls import path
# Importamos las vistas para cada operación de cada modelo
from .views import CategoriaListView, CategoriaCreateView, CategoriaRetrieveView, CategoriaUpdateView, CategoriaDestroyView
from .views import ProductosListView, ProductosCreateView, ProductosRetrieveView, ProductosUpdateView, ProductosDestroyView
from .views import EmpleadosListView, EmpleadosCreateView, EmpleadosRetrieveView, EmpleadosUpdateView, EmpleadosDestroyView

# Definimos la lista de rutas (endpoints) de la API
urlpatterns = [
    # Rutas para el modelo Categoria
    # Listar todas las categorías
    path('categorias/', CategoriaListView.as_view(), name='categoria-list'),
    # Crear una nueva categoría
    path('categorias/create/', CategoriaCreateView.as_view(), name='categoria-create'),
    # Obtener una categoría por su ID (pk)
    path('categorias/<int:pk>/', CategoriaRetrieveView.as_view(), name='categoria-detail'),
    # Actualizar una categoría por su ID (pk)
    path('categorias/update/<int:pk>/', CategoriaUpdateView.as_view(), name='categoria-update'),
    # Eliminar una categoría por su ID (pk)
    path('categorias/delete/<int:pk>/', CategoriaDestroyView.as_view(), name='categoria-delete'),

    # Rutas para el modelo Productos
    # Listar todos los productos
    path('productos/', ProductosListView.as_view(), name='productos-list'),
    # Crear un nuevo producto
    path('productos/create/', ProductosCreateView.as_view(), name='productos-create'),
    # Obtener un producto por su ID (pk)
    path('productos/<int:pk>/', ProductosRetrieveView.as_view(), name='productos-detail'),
    # Actualizar un producto por su ID (pk)
    path('productos/update/<int:pk>/', ProductosUpdateView.as_view(), name='productos-update'),
    # Eliminar un producto por su ID (pk)
    path('productos/delete/<int:pk>/', ProductosDestroyView.as_view(), name='productos-delete'),

    # Rutas para el modelo Empleados
    # Listar todos los empleados
    path('empleados/', EmpleadosListView.as_view(), name='empleados-list'),
    # Crear un nuevo empleado
    path('empleados/create/', EmpleadosCreateView.as_view(), name='empleados-create'),
    # Obtener un empleado por su ID (pk)
    path('empleados/<int:pk>/', EmpleadosRetrieveView.as_view(), name='empleados-detail'),
    # Actualizar un empleado por su ID (pk)
    path('empleados/update/<int:pk>/', EmpleadosUpdateView.as_view(), name='empleados-update'),
    # Eliminar un empleado por su ID (pk)
    path('empleados/delete/<int:pk>/', EmpleadosDestroyView.as_view(), name='empleados-delete')
]