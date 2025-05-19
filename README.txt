Nombre del Proyecto: Inventario API
Creadora: Hazel Pamela Caballero Elizondo(HPCE)


1-Inicialización del Proyecto
Backend (Django + DRF + MySQL)

1.Clona o descarga el repositorio en tu máquina.

2.Instala Python (si no lo tienes):
https://www.python.org/downloads/

3.Crea un entorno virtual (opcional pero recomendado):
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

4.Instala dependencias:
pip install django djangorestframework mysqlclient corsheaders

Frontend (React)
4.1Instala Node.js:
https://nodejs.org/

4.2Instala dependencias del frontend:
cd front
npm install
cd conexion-creativa
npm install

2-Configuración y creación de la API
Backend

1.Configura la base de datos MySQL en settings.py:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'inventariominip',
        'USER': 'root',
        'PASSWORD': '1234',
        'HOST': '127.0.0.1',
        'PORT': '3306'
    }
}

2.Crea la base de datos en MySQL:
CREATE DATABASE inventariominip;

3.Realiza migraciones:
cd back/inventario_api_hpce
python manage.py makemigrations
python manage.py migrate

4.Crea un superusuario (opcional, para admin de Django):
python manage.py createsuperuser

5.Ejecuta el servidor:
python manage.py runserver

Frontend
1.Ejecuta el frontend:
cd front/conexion-creativa
npm run dev

Accede a http://localhost:5173


3-Manejo de MySQL
La configuración de conexión está en settings.py.
El modelo de datos está en api_hpce/models.py.
Las migraciones crean las tablas automáticamente.
Puedes administrar los datos desde el panel de Django (/admin) o usando la API REST.


4-Pruebas y Validación
Backend
Puedes probar los endpoints desde el navegador, Postman o curl.
Endpoints principales:
GET /api/productos/ — Lista productos
POST /api/productos/create/ — Crea producto
PUT /api/productos/update/<id>/ — Actualiza producto
DELETE /api/productos/delete/<id>/ — Elimina producto
(Igual para categorias y empleados)

Ejemplos de uso de la API

Crear producto (POST)
Request:
POST /api/productos/create/

json
{
  "nombre": "Laptop",
  "descripcion": "Dell Latitude 5490",
  "precio": 15000,
  "cantidad": 5
}

Response:

json
{
  "id": 1,
  "nombre": "Laptop",
  "descripcion": "Dell Latitude 5490",
  "precio": 15000,
  "cantidad": 5
}


Listar productos (GET)
GET /api/productos/
Response:

json
[
  {
    "id": 1,
    "nombre": "Laptop",
    "descripcion": "Dell Latitude 5490",
    "precio": 15000,
    "cantidad": 5
  }
]


Actualizar producto (PUT)
PUT /api/productos/update/1/
Request:
json
{
  "nombre": "Laptop Pro",
  "descripcion": "Dell Latitude 5490 actualizado",
  "precio": 16000,
  "cantidad": 4
}


Eliminar producto (DELETE)
DELETE /api/productos/delete/1/

Validaciones implementadas
- El nombre no puede estar vacío.
- El precio debe ser un número positivo.
- La cantidad debe ser un entero positivo.

Posibles errores
- 400 Bad Request: Datos inválidos o campos faltantes.
- 404 Not Found: Producto no encontrado.

Frontend
El frontend consume la API y permite crear, editar, eliminar y listar productos, categorías y empleados desde la interfaz gráfica.
Si todo está bien configurado, deberías poder operar desde la web y ver los cambios reflejados en la base de datos.

Archivos clave:

Backend:
settings.py
models.py
views.py
urls.py
Frontend:
CallsProducts.jsx
CallsCategories.jsx
CallsEmployes.jsx
