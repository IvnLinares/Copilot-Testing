<template>
  <div class="task-manager">
    <section class="task-form card">
      <h2>{{ editingTask ? 'Editar Tarea' : 'Nueva Tarea' }}</h2>
      <form @submit.prevent="editingTask ? updateTask() : createTask()">
        <input
          v-model="form.title"
          type="text"
          placeholder="Título de la tarea"
          required
        />
        <textarea
          v-model="form.description"
          placeholder="Descripción (opcional)"
          rows="3"
        ></textarea>
        <div class="form-actions">
          <button type="submit" class="btn-primary">
            {{ editingTask ? '💾 Actualizar' : '✨ Crear Tarea' }}
          </button>
          <button
            v-if="editingTask"
            type="button"
            @click="cancelEdit"
            class="btn-secondary"
          >
            ❌ Cancelar
          </button>
        </div>
      </form>
    </section>

    <section class="task-list">
      <h2>📋 Lista de Tareas</h2>
      <div v-if="loading" class="loading">Cargando tareas...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else-if="tasks.length === 0" class="empty">
        No hay tareas. ¡Crea tu primera tarea arriba!
      </div>
      <div v-else class="tasks">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="task-item card"
          :class="{ completed: task.completed }"
        >
          <div class="task-content">
            <h3>{{ task.title }}</h3>
            <p v-if="task.description">{{ task.description }}</p>
            <small>Creada: {{ formatDate(task.created_at) }}</small>
          </div>
          <div class="task-actions">
            <button
              @click="toggleComplete(task)"
              class="btn-icon"
              :title="task.completed ? 'Marcar como pendiente' : 'Marcar como completada'"
            >
              {{ task.completed ? '↩️' : '✅' }}
            </button>
            <button
              @click="startEdit(task)"
              class="btn-icon"
              title="Editar tarea"
            >
              ✏️
            </button>
            <button
              @click="deleteTask(task.id)"
              class="btn-icon btn-danger"
              title="Eliminar tarea"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'TaskManager',
  data() {
    return {
      tasks: [],
      form: {
        title: '',
        description: ''
      },
      editingTask: null,
      loading: false,
      error: null
    }
  },
  mounted() {
    this.loadTasks()
  },
  methods: {
    async loadTasks() {
      this.loading = true
      this.error = null
      try {
        const response = await api.getTasks()
        this.tasks = response.data.tasks
      } catch (error) {
        this.error = 'Error al cargar las tareas: ' + error.message
        console.error('Error loading tasks:', error)
      } finally {
        this.loading = false
      }
    },
    
    async createTask() {
      if (!this.form.title.trim()) return
      
      try {
        await api.createTask({
          title: this.form.title,
          description: this.form.description
        })
        this.form.title = ''
        this.form.description = ''
        await this.loadTasks()
      } catch (error) {
        this.error = 'Error al crear la tarea: ' + error.message
        console.error('Error creating task:', error)
      }
    },
    
    async updateTask() {
      if (!this.editingTask || !this.form.title.trim()) return
      
      try {
        await api.updateTask(this.editingTask.id, {
          title: this.form.title,
          description: this.form.description
        })
        this.cancelEdit()
        await this.loadTasks()
      } catch (error) {
        this.error = 'Error al actualizar la tarea: ' + error.message
        console.error('Error updating task:', error)
      }
    },
    
    async toggleComplete(task) {
      try {
        await api.updateTask(task.id, {
          completed: task.completed ? 0 : 1
        })
        await this.loadTasks()
      } catch (error) {
        this.error = 'Error al actualizar el estado: ' + error.message
        console.error('Error toggling task:', error)
      }
    },
    
    async deleteTask(id) {
      if (!confirm('¿Estás seguro de que quieres eliminar esta tarea?')) return
      
      try {
        await api.deleteTask(id)
        await this.loadTasks()
      } catch (error) {
        this.error = 'Error al eliminar la tarea: ' + error.message
        console.error('Error deleting task:', error)
      }
    },
    
    startEdit(task) {
      this.editingTask = task
      this.form.title = task.title
      this.form.description = task.description || ''
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    
    cancelEdit() {
      this.editingTask = null
      this.form.title = ''
      this.form.description = ''
    },
    
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }
}
</script>

<style scoped>
.task-manager {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #646cff;
}

.task-form {
  margin-bottom: 2rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary {
  background-color: #646cff;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #535bf2;
}

.btn-secondary {
  background-color: #555;
  color: white;
  border: none;
}

.btn-secondary:hover {
  background-color: #666;
}

.task-list {
  margin-top: 2rem;
}

.loading,
.error,
.empty {
  text-align: center;
  padding: 2rem;
  color: #888;
}

.error {
  color: #ff6b6b;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.task-item.completed {
  opacity: 0.6;
}

.task-item.completed h3 {
  text-decoration: line-through;
}

.task-content {
  flex: 1;
}

.task-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.task-content p {
  color: #aaa;
  margin-bottom: 0.5rem;
}

.task-content small {
  color: #666;
  font-size: 0.85rem;
}

.task-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  background-color: #333;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-icon:hover {
  transform: scale(1.1);
}

.btn-danger:hover {
  background-color: #ff6b6b;
}

@media (prefers-color-scheme: light) {
  .task-content h3 {
    color: #213547;
  }
  
  .btn-icon {
    background-color: #e0e0e0;
  }
}

@media (max-width: 768px) {
  .task-item {
    flex-direction: column;
  }
  
  .task-actions {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>
