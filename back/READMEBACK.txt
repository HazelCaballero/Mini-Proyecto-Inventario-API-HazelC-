Backend - Inventario API

Este backend implementa una API REST para gestionar productos de inventario utilizando Django. Permite crear, listar, actualizar y eliminar productos, y utiliza MySQL como base de datos.

1. Instalación de dependencias

Instala Django, Django REST Framework y el conector de MySQL:

pip install django djangorestframework mysqlclient

- django: Framework principal para el backend.
- djangorestframework: Extensión para crear APIs REST de forma sencilla.
- mysqlclient: Conector para usar MySQL con Django.


2. Configuración de la base de datos

En el archivo settings.py del proyecto Django, se configura la base de datos MySQL así:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'base_de_datos',
        'USER': 'usuario_mysql',
        'PASSWORD': 'contraseña_mysql',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

Nota: Asegúrarse de crear la base de datos en MySQL antes de correr las migraciones.


 3. Migraciones

Ejecuta estos comandos en la terminal:

python manage.py makemigrations
python manage.py migrate


4. Estructura del proyecto

manage.py: Utilidad principal para comandos Django.
inventario/: Carpeta del proyecto principal.
productos/: App donde está el modelo Producto y las vistas de la API.
    models.py: Modelo Producto.
    serializers.py: Serializador para Producto.
    views.py: Vistas de la API.
    urls.py: Rutas de la app.
inventario/settings.py: Configuración general del proyecto.



5. Ejecución del servidor

En la terminal, ejecuta: python manage.py runserver


6. Métodos implementados

-GET /api/productos/: Lista todos los productos.
-GET /api/productos/{id}/: Obtiene un producto por ID.
-POST /api/productos/: Crea un nuevo producto.
-PUT /api/productos/{id}/: Actualiza un producto existente.
-DELETE /api/productos/{id}/: Elimina un producto.


7. Pruebas y documentación automática

Puedes probar la API desde el navegador o usando herramientas como Postman/.  
