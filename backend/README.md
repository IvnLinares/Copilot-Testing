# Backend - API REST con Express y SQLite

## Descripción

Backend del proyecto Copilot Testing Sandbox. Proporciona una API REST completa para gestionar tareas utilizando Express.js y SQLite.

## Tecnologías

- **Express 5**: Framework web
- **SQLite3**: Base de datos embebida
- **CORS**: Manejo de solicitudes cross-origin
- **Body-parser**: Procesamiento de JSON
- **Nodemon**: Auto-reinicio en desarrollo

## Estructura

```
backend/
├── server.js         # Servidor principal con rutas y lógica
├── database.sqlite   # Base de datos (generada automáticamente)
├── package.json      # Dependencias y scripts
└── .env.example      # Ejemplo de variables de entorno
```

## Instalación

```bash
npm install
```

## Configuración

Crea un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

Configura las variables:
```
PORT=3000
```

## Ejecución

### Modo desarrollo (con auto-reinicio)
```bash
npm run dev
```

### Modo producción
```bash
npm start
```

## API Endpoints

### Base URL
`http://localhost:3000`

### Endpoints Disponibles

#### 1. Obtener información de la API
```
GET /
```

**Respuesta:**
```json
{
  "message": "Welcome to Copilot Testing API",
  "endpoints": {
    "tasks": {
      "getAll": "GET /api/tasks",
      "getOne": "GET /api/tasks/:id",
      "create": "POST /api/tasks",
      "update": "PUT /api/tasks/:id",
      "delete": "DELETE /api/tasks/:id"
    }
  }
}
```

#### 2. Obtener todas las tareas
```
GET /api/tasks
```

**Respuesta:**
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Tarea ejemplo",
      "description": "Descripción de la tarea",
      "completed": 0,
      "created_at": "2024-01-01 12:00:00",
      "updated_at": "2024-01-01 12:00:00"
    }
  ]
}
```

#### 3. Obtener una tarea específica
```
GET /api/tasks/:id
```

**Respuesta:**
```json
{
  "task": {
    "id": 1,
    "title": "Tarea ejemplo",
    "description": "Descripción de la tarea",
    "completed": 0,
    "created_at": "2024-01-01 12:00:00",
    "updated_at": "2024-01-01 12:00:00"
  }
}
```

#### 4. Crear una nueva tarea
```
POST /api/tasks
Content-Type: application/json

{
  "title": "Nueva tarea",
  "description": "Descripción opcional"
}
```

**Respuesta:**
```json
{
  "message": "Task created successfully",
  "task": {
    "id": 2,
    "title": "Nueva tarea",
    "description": "Descripción opcional",
    "completed": false
  }
}
```

#### 5. Actualizar una tarea
```
PUT /api/tasks/:id
Content-Type: application/json

{
  "title": "Tarea actualizada",
  "description": "Nueva descripción",
  "completed": true
}
```

**Respuesta:**
```json
{
  "message": "Task updated successfully"
}
```

#### 6. Eliminar una tarea
```
DELETE /api/tasks/:id
```

**Respuesta:**
```json
{
  "message": "Task deleted successfully"
}
```

## Base de Datos

### Esquema de la tabla `tasks`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | INTEGER | ID único (auto-increment) |
| title | TEXT | Título de la tarea (requerido) |
| description | TEXT | Descripción opcional |
| completed | BOOLEAN | Estado de completado (0 o 1) |
| created_at | DATETIME | Fecha de creación |
| updated_at | DATETIME | Fecha de última actualización |

## Manejo de Errores

El API devuelve los siguientes códigos de estado:

- `200` - OK
- `201` - Created
- `400` - Bad Request (datos inválidos)
- `404` - Not Found (recurso no encontrado)
- `500` - Internal Server Error

## Ideas de Extensión

1. **Autenticación**
   - Implementar JWT
   - Middleware de autenticación
   - Rutas protegidas

2. **Validación**
   - Usar joi o express-validator
   - Validación de schemas

3. **Paginación**
   - Añadir parámetros page y limit
   - Incluir metadata de paginación

4. **Filtrado y Búsqueda**
   - Filtrar por estado (completed/pending)
   - Búsqueda por título
   - Ordenamiento personalizado

5. **Relaciones**
   - Añadir usuarios
   - Categorías de tareas
   - Etiquetas

6. **Testing**
   - Tests unitarios con Jest
   - Tests de integración con Supertest
   - Mocking de la base de datos

## Dependencias Principales

```json
{
  "express": "^5.1.0",
  "sqlite3": "^5.1.7",
  "cors": "^2.8.5",
  "body-parser": "^2.2.0",
  "dotenv": "^17.2.3"
}
```

## Notas

- La base de datos SQLite se crea automáticamente al iniciar el servidor
- El archivo `database.sqlite` no debe ser commiteado (está en .gitignore)
- En producción, considera usar PostgreSQL o MySQL
