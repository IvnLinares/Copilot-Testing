import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  // Tasks API
  getTasks() {
    return apiClient.get('/api/tasks')
  },
  
  getTask(id) {
    return apiClient.get(`/api/tasks/${id}`)
  },
  
  createTask(task) {
    return apiClient.post('/api/tasks', task)
  },
  
  updateTask(id, task) {
    return apiClient.put(`/api/tasks/${id}`, task)
  },
  
  deleteTask(id) {
    return apiClient.delete(`/api/tasks/${id}`)
  }
}
