<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/HeaderBar.vue'
</script>

<template>
  <header class="header">
    <NavBar />
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
