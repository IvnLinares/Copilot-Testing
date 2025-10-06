<template>
  <div id="app">
    <header>
      <h1>🚀 Copilot Testing Sandbox</h1>
      <p>Un espacio para explorar y practicar todas las funcionalidades de GitHub Copilot</p>
    </header>

    <main>
      <TaskManager />
    </main>

    <footer>
      <p>Proyecto desarrollado para el testing de Copilot Agent Mode</p>
    </footer>
  </div>
</template>

<script>
import TaskManager from './components/TaskManager.vue'

export default {
  name: 'App',
  components: {
    TaskManager
  }
}
</script>

<style scoped>
header {
  text-align: center;
  margin-bottom: 2rem;
}

header h1 {
  color: #646cff;
  margin-bottom: 0.5rem;
}

header p {
  color: #888;
  font-size: 1.1rem;
}

main {
  margin: 2rem 0;
}

footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid #333;
  color: #666;
}

@media (prefers-color-scheme: light) {
  footer {
    border-top-color: #ddd;
  }
}
</style>
