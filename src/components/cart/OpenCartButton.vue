<script lang="ts">
import { defineComponent } from 'vue'
import IconShopping from '@/components/icons/IconShopping.vue'

export default defineComponent({
  components: {
    IconShopping,
  },
  data() {
    return {}
  },
  emits: ['click'],
  props: {
    title: {
      type: String,
      required: false,
      default: 'Meu Carrinho',
    },
    totalInCart: {
      type: Number,
      required: false,
      default: 0,
    },
  },
})
</script>

<template>
  <button class="button" @click="$emit('click')">
    <IconShopping class="icon" />
    {{ title }}
    <span class="quantity-in-cart" v-if="totalInCart > 0">{{ totalInCart }}</span>
  </button>
</template>

<style scoped>
.button {
  all: unset;
  align-items: center;
  background-color: var(--color-sky-400);
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: large;
  font-weight: 600;
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  border: none;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: var(--color-sky-600);
  transform: translateY(-2px);
}

.button:active {
  transform: translateY(0);
}

.icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

:deep(.icon svg) {
  width: 100%;
  height: 100%;
  display: block;
}

:deep(.icon path) {
  stroke: white;
  stroke-width: 4;
}

:deep(.icon circle) {
  stroke: white;
  stroke-width: 4;
}

.quantity-in-cart {
  text-align: center;
  background-color: white;
  border-radius: 100%;
  color: var(--color-sky-400);
  font-size: small;
  font-weight: bold;
  padding: 2px 6px;
  min-width: 20px;
}
</style>
