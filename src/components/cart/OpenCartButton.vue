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
  color: var(--color-slate-100);
  cursor: pointer;
  font-size: large;
  display: flex;
  gap: 10px;
  padding: 5px 20px;
}

.button:hover {
  background-color: var(--color-sky-600);
}

.icon {
  width: 20px;
}

:deep(.icon path),
:deep(.icon circle) {
  stroke: var(--color-slate-100);
}

.quantity-in-cart {
  text-align: center;
  background-color: var(--color-slate-100);
  border-radius: 100%;
  color: var(--color-sky-400);
  font-size: small;
  padding: 1px 7px;
}
</style>
