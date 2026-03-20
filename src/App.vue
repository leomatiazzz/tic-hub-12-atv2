<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header class="header">
    <NavBar />
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  background-color: var(--color-background-soft);
  border-radius: 10px;
  margin: 10px;
  padding: 5px 10px;
}
</style>
