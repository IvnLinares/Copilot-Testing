# 🚀 Guía de Inicio Rápido

## Instalación Express

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/IvnLinares/Copilot-Testing.git
cd Copilot-Testing
```

### 2️⃣ Instalar dependencias

#### Opción A: Instalar todo de una vez
```bash
npm run install:all
```

#### Opción B: Instalar manualmente
```bash
# Backend
cd backend
npm install

# Frontend (en otra terminal)
cd frontend
npm install
```

### 3️⃣ Iniciar los servidores

#### Terminal 1 - Backend
```bash
cd backend
npm run dev
```
✅ El backend estará en http://localhost:3000

#### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```
✅ El frontend estará en http://localhost:5173

### 4️⃣ Abrir en el navegador
Visita http://localhost:5173 y comienza a crear tareas!

## 🎯 Primeros Pasos

1. **Crear una tarea**: Escribe un título y descripción, luego haz clic en "✨ Crear Tarea"
2. **Marcar como completada**: Haz clic en el botón ✅ para marcar una tarea como completada
3. **Editar tarea**: Haz clic en el botón ✏️ para editar los detalles de una tarea
4. **Eliminar tarea**: Haz clic en el botón 🗑️ para eliminar una tarea

## 🧪 Probar la API Directamente

```bash
# Obtener todas las tareas
curl http://localhost:3000/api/tasks

# Crear una nueva tarea
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Mi primera tarea","description":"Descripción de ejemplo"}'

# Marcar tarea como completada (ejemplo con ID 1)
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":1}'
```

## 🎨 Personalizar con Copilot

Ahora que tienes el proyecto funcionando, puedes usar GitHub Copilot para:

### Ideas de Features
1. **Añadir fechas límite**
   - Agregar campo `due_date` a la base de datos
   - Mostrar fechas en la UI
   - Ordenar por fecha de vencimiento

2. **Categorías de tareas**
   - Crear tabla de categorías
   - Selector de categoría en el formulario
   - Filtrar tareas por categoría

3. **Prioridades**
   - Campo de prioridad (baja, media, alta)
   - Visualización con colores
   - Ordenamiento por prioridad

4. **Búsqueda**
   - Barra de búsqueda
   - Filtrar por título o descripción
   - Búsqueda en tiempo real

### Ejemplo con Copilot
Abre cualquier archivo y comienza a escribir comentarios sobre lo que quieres hacer:

```javascript
// TODO: Añadir funcionalidad de búsqueda que filtre tareas por título
// Copilot te ayudará a completar el código!
```

## 📚 Estructura de Archivos Clave

```
Copilot-Testing/
├── backend/
│   └── server.js          ← Aquí está toda la lógica del API
├── frontend/
│   ├── src/
│   │   ├── App.vue              ← Componente principal
│   │   ├── components/
│   │   │   └── TaskManager.vue  ← Gestor de tareas
│   │   └── services/
│   │       └── api.js           ← Llamadas a la API
│   └── vite.config.js     ← Configuración de Vite
└── README.md              ← Documentación completa
```

## 🐛 Solución de Problemas

### El backend no inicia
- Verifica que el puerto 3000 esté libre: `lsof -i :3000`
- Asegúrate de estar en el directorio `backend`
- Revisa que las dependencias estén instaladas: `npm install`

### El frontend no se conecta al backend
- Verifica que el backend esté corriendo en http://localhost:3000
- Revisa la configuración del proxy en `frontend/vite.config.js`
- Abre las DevTools del navegador y revisa la consola

### Error de CORS
- Asegúrate de que el middleware CORS esté habilitado en `backend/server.js`
- El backend ya incluye `cors()` configurado correctamente

## 🎓 Recursos de Aprendizaje

- **GitHub Copilot**: [Documentación oficial](https://docs.github.com/copilot)
- **Vue 3**: [Guía oficial](https://vuejs.org/guide/)
- **Express**: [Documentación](https://expressjs.com/)
- **SQLite**: [Tutorial](https://www.sqlite.org/quickstart.html)

## 💡 Tips para usar Copilot

1. **Escribe comentarios descriptivos** antes de escribir código
2. **Usa nombres de funciones claros** y Copilot sugerirá la implementación
3. **Prueba diferentes sugerencias** con Tab/Ctrl+Enter
4. **Crea tests** y deja que Copilot escriba las implementaciones
5. **Refactoriza código** pidiendo a Copilot que mejore lo existente

## ✨ ¡Listo para explorar!

Ahora tienes un proyecto completo para experimentar con todas las capacidades de GitHub Copilot. ¡Diviértete programando! 🚀
