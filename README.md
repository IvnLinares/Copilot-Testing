# 🚀 Copilot-Testing Sandbox

Proyecto desarrollado para el testing y exploración de GitHub Copilot Agent Mode

## 📋 Descripción

Este es un proyecto sandbox completo diseñado para practicar, aprender y explorar todas las funcionalidades de GitHub Copilot en modo agente. Incluye un stack web moderno con:

- **Frontend**: Vue 3 + Vite
- **Backend**: Express.js
- **Base de Datos**: SQLite

## 🎯 Objetivo

Proporcionar un entorno de desarrollo web completo donde puedas:

- ✨ Experimentar con todas las capacidades de Copilot
- 🧪 Probar diferentes patrones y prácticas de código
- 📚 Aprender desarrollo web potenciado por IA
- 🔧 Implementar nuevas funcionalidades con ayuda de Copilot
- 🎨 Mejorar tus habilidades de programación

## 🏗️ Estructura del Proyecto

```
Copilot-Testing/
├── backend/           # API REST con Express y SQLite
│   ├── server.js     # Servidor principal
│   ├── package.json  # Dependencias del backend
│   └── .env.example  # Variables de entorno ejemplo
├── frontend/          # Aplicación Vue 3
│   ├── src/
│   │   ├── components/    # Componentes Vue
│   │   ├── services/      # Servicios para API
│   │   ├── App.vue        # Componente principal
│   │   ├── main.js        # Punto de entrada
│   │   └── style.css      # Estilos globales
│   ├── index.html         # HTML principal
│   ├── vite.config.js     # Configuración de Vite
│   └── package.json       # Dependencias del frontend
└── README.md
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/IvnLinares/Copilot-Testing.git
   cd Copilot-Testing
   ```

2. **Instalar dependencias del backend**
   ```bash
   cd backend
   npm install
   ```

3. **Instalar dependencias del frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Ejecución en Desarrollo

1. **Iniciar el backend**
   ```bash
   cd backend
   npm run dev
   ```
   El servidor estará disponible en `http://localhost:3000`

2. **Iniciar el frontend** (en otra terminal)
   ```bash
   cd frontend
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

## 📡 API Endpoints

El backend proporciona los siguientes endpoints:

### Tareas (Tasks)

- `GET /api/tasks` - Obtener todas las tareas
- `GET /api/tasks/:id` - Obtener una tarea específica
- `POST /api/tasks` - Crear una nueva tarea
- `PUT /api/tasks/:id` - Actualizar una tarea
- `DELETE /api/tasks/:id` - Eliminar una tarea

### Ejemplo de Uso

```javascript
// Crear una tarea
POST /api/tasks
Content-Type: application/json

{
  "title": "Mi primera tarea",
  "description": "Descripción de la tarea"
}
```

## 🎨 Funcionalidades Actuales

- ✅ CRUD completo de tareas
- ✅ Interfaz de usuario moderna y responsive
- ✅ Persistencia de datos con SQLite
- ✅ API REST completamente funcional
- ✅ Diseño con modo claro/oscuro automático

## 💡 Ideas para Practicar con Copilot

Aquí hay algunas ideas de funcionalidades que puedes implementar usando Copilot:

1. **Autenticación de Usuarios**
   - Implementar login/registro
   - JWT tokens
   - Middleware de autenticación

2. **Funcionalidades Avanzadas de Tareas**
   - Añadir fechas de vencimiento
   - Prioridades y etiquetas
   - Filtros y búsqueda
   - Ordenamiento personalizado

3. **Mejoras de UI/UX**
   - Animaciones y transiciones
   - Drag & drop para reordenar
   - Notificaciones toast
   - Modo oscuro manual

4. **Testing**
   - Tests unitarios con Jest
   - Tests de integración
   - Tests E2E con Playwright

5. **Características Adicionales**
   - Exportar tareas a PDF/CSV
   - Estadísticas y gráficos
   - Sincronización en tiempo real con WebSockets
   - PWA (Progressive Web App)

## 🛠️ Tecnologías Utilizadas

### Backend
- **Express**: Framework web minimalista
- **SQLite3**: Base de datos embebida
- **CORS**: Middleware para habilitar CORS
- **Body-parser**: Parse de request bodies
- **Nodemon**: Auto-reinicio en desarrollo

### Frontend
- **Vue 3**: Framework progresivo de JavaScript
- **Vite**: Build tool de última generación
- **Axios**: Cliente HTTP
- **CSS3**: Estilos modernos con variables CSS

## 📝 Scripts Disponibles

### Backend
- `npm start` - Iniciar servidor en producción
- `npm run dev` - Iniciar servidor con nodemon (desarrollo)

### Frontend
- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Preview de la build de producción

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Este es un proyecto de aprendizaje, así que siéntete libre de:

1. Hacer fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es open source y está disponible bajo la licencia ISC.

## 🎓 Recursos de Aprendizaje

- [Documentación de GitHub Copilot](https://docs.github.com/copilot)
- [Vue 3 Documentation](https://vuejs.org/)
- [Express.js Guide](https://expressjs.com/)
- [SQLite Documentation](https://www.sqlite.org/docs.html)

## 💬 Soporte

Si tienes preguntas o sugerencias, no dudes en abrir un issue en el repositorio.

---

Hecho con ❤️ y GitHub Copilot
