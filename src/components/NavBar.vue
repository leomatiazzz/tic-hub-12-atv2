<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="navbar">
    <div class="brand">
      <span class="logo-text">MeuApp</span>
    </div>

    <nav class="menu">
      <RouterLink class="menu-item" to="/">Início</RouterLink>
      <RouterLink class="menu-item" to="/about">Sobre</RouterLink>
    </nav>
  </header>
</template>

<style scoped>

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.brand .logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  letter-spacing: -0.5px;
}

.menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}


.menu-item {
  position: relative;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: opacity 0.3s ease;
}

.menu-item:hover {
  opacity: 0.7; 
}

.menu-item::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--text-color);
  transition: width 0.3s ease-in-out;
}


.menu-item:hover::after {
  width: 100%;
}

.router-link-exact-active {
  font-weight: 700;
}

.router-link-exact-active::after {
  width: 100%;
}

@media (prefers-color-scheme: dark) {
  .navbar {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>