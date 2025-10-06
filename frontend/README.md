# Frontend - Aplicación Vue 3

## Descripción

Frontend del proyecto Copilot Testing Sandbox. Aplicación web moderna construida con Vue 3 y Vite que consume la API REST del backend.

## Tecnologías

- **Vue 3**: Framework progresivo de JavaScript
- **Vite**: Build tool rápido y moderno
- **Axios**: Cliente HTTP para llamadas a la API
- **CSS3**: Estilos modernos con variables CSS

## Estructura

```
frontend/
├── src/
│   ├── components/
│   │   └── TaskManager.vue    # Componente gestor de tareas
│   ├── services/
│   │   └── api.js              # Servicio de llamadas a la API
│   ├── App.vue                 # Componente raíz
│   ├── main.js                 # Punto de entrada
│   └── style.css               # Estilos globales
├── public/                     # Archivos estáticos
├── index.html                  # HTML principal
├── vite.config.js              # Configuración de Vite
└── package.json                # Dependencias y scripts
```

## Instalación

```bash
npm install
```

## Ejecución

### Modo desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Build para producción
```bash
npm run build
```
Los archivos compilados se generarán en el directorio `dist/`

### Preview de producción
```bash
npm run preview
```

## Características

### TaskManager Component

El componente principal que gestiona todas las operaciones CRUD:

- ✅ Crear nuevas tareas
- ✅ Listar todas las tareas
- ✅ Editar tareas existentes
- ✅ Marcar tareas como completadas/pendientes
- ✅ Eliminar tareas
- ✅ Interfaz responsive
- ✅ Modo claro/oscuro automático

### Servicio API

El servicio `api.js` proporciona métodos para interactuar con el backend:

```javascript
import api from './services/api'

// Obtener todas las tareas
await api.getTasks()

// Crear una tarea
await api.createTask({ title: 'Mi tarea', description: 'Descripción' })

// Actualizar una tarea
await api.updateTask(1, { completed: true })

// Eliminar una tarea
await api.deleteTask(1)
```

## Configuración

### Variables de Entorno

Puedes crear un archivo `.env` para configurar la URL de la API:

```
VITE_API_URL=http://localhost:3000
```

Por defecto, usa `http://localhost:3000` si no se especifica.

### Proxy de Desarrollo

Vite está configurado para hacer proxy de las solicitudes `/api` al backend:

```javascript
// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
```

## Estilos

### Variables CSS

El proyecto usa variables CSS para temas:

```css
:root {
  color-scheme: light dark;
  /* Tema oscuro por defecto */
}

@media (prefers-color-scheme: light) {
  /* Ajustes para tema claro */
}
```

### Diseño Responsive

Los estilos están optimizados para diferentes tamaños de pantalla:

```css
@media (max-width: 768px) {
  /* Estilos para móviles */
}
```

## Componentes

### App.vue

Componente raíz que estructura la aplicación:

- Header con título y descripción
- Main con el TaskManager
- Footer con información del proyecto

### TaskManager.vue

Componente principal que incluye:

1. **Formulario de Tareas**
   - Input para título
   - Textarea para descripción
   - Botones de acción (Crear/Actualizar/Cancelar)

2. **Lista de Tareas**
   - Visualización de todas las tareas
   - Estados de carga y error
   - Acciones por tarea (completar, editar, eliminar)

## Ideas de Extensión

1. **Enrutamiento**
   - Instalar Vue Router
   - Crear múltiples vistas
   - Navegación entre páginas

2. **Estado Global**
   - Implementar Pinia o Vuex
   - Gestión centralizada del estado
   - Persistencia de datos

3. **Componentes Adicionales**
   - Componente de Estadísticas
   - Gráficos con Chart.js
   - Calendario de tareas
   - Filtros avanzados

4. **UX Mejorada**
   - Animaciones con Transition
   - Drag & drop con VueDraggable
   - Notificaciones toast
   - Confirmaciones modales

5. **Formularios Avanzados**
   - Validación con VeeValidate
   - Campos de fecha con date picker
   - Selectores de prioridad
   - Etiquetas/tags

6. **Testing**
   - Tests unitarios con Vitest
   - Tests de componentes
   - Tests E2E con Cypress/Playwright

7. **PWA**
   - Service Workers
   - Funcionalidad offline
   - Instalable en dispositivos

8. **Internacionalización**
   - Vue I18n
   - Múltiples idiomas
   - Formateo de fechas por locale

## Herramientas de Desarrollo

### Vue DevTools

Instala la extensión de navegador para mejor debugging:
- [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

### Hot Module Replacement (HMR)

Vite proporciona HMR automático. Los cambios se reflejan instantáneamente sin recargar la página.

## Dependencias Principales

```json
{
  "vue": "^3.5.22",
  "axios": "^1.12.2",
  "vite": "^7.1.9",
  "@vitejs/plugin-vue": "^6.0.1"
}
```

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Preview de build
npm run preview

# Limpiar cache de Vite
rm -rf node_modules/.vite
```

## Recursos

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Guide](https://vitejs.dev/)
- [Axios Documentation](https://axios-http.com/)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

## Notas

- El proyecto usa la Composition API de Vue 3 con Options API para mayor flexibilidad
- Los estilos son scoped por componente para evitar conflictos
- El diseño es mobile-first y completamente responsive
