# Importamos los modelos que vamos a serializar y el módulo de serializers de DRF
from .models import Productos, categoria, Empleados
from rest_framework import serializers

# Serializador para la categoria
class CategoriaSerializer(serializers.ModelSerializer):
    # La clase Meta define el modelo y los campos que se van a serializar
    class Meta:
        model = categoria  # Modelo a serializar
        fields = '__all__'  # Serializa todos los campos del modelo

# Serializador para los productos
class ProductosSerializer(serializers.ModelSerializer):
    # Para mostrar los datos de la categoría anidada descomentar la siguiente línea:
    # categoria = CategoriaSerializer()
    class Meta:
        model = Productos  # Modelo a serializar
        fields = '__all__'  # Serializa todos los campos del modelo

# Serializador para los empleados 
class EmpleadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleados  # Modelo a serializar
        fields = '__all__'  # Serializa todos los campos del modelo
