<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <h1>🎮 TICommerce</h1>
    </div>
    <div class="menu">
      <RouterLink class="menu-item" to="/">Inicial</RouterLink>
      <RouterLink class="menu-item" to="/about">Sobre</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
}

.logo {
  display: flex;
  align-items: center;
}

.logo h1 {
  margin: 0;
  font-size: 1.8rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  letter-spacing: 1px;
}

.menu {
  display: flex;
  gap: 10rem;
  flex: 1;
  justify-content: center;
}

.menu-item {
  color: #cbd5e1;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
}

.menu-item:hover {
  background-color: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    gap: 1rem;
  }

  .logo h1 {
    font-size: 1.4rem;
  }

  .menu {
    gap: 1rem;
  }
}
</style>
