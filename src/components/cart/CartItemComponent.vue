<script lang="ts">
import { defineComponent } from 'vue'
import { CartItem } from '@/model/cart-item.model'
import { formatCurrency } from '@/utils/formatCurrency'

import IconDelete from '../icons/IconDelete.vue'

export default defineComponent({
  components: {
    IconDelete,
  },
  props: {
    cartItem: {
      type: CartItem,
    },
  },
  computed: {
    quantity(): number {
      return this.cartItem?.quantity ?? 1
    },
    price(): string {
      return formatCurrency(this.cartItem?.discountedPrice ?? 0)
    },
  },
  data() {
    return {
      title: this.cartItem?.product?.title ?? '',
      image: this.cartItem?.product?.image ?? '',
    }
  },
  emits: ['remove-item', 'add-item', 'delete-item'],
})
</script>
<template>
  <article class="cart-item">
    <div class="header">
      <figure class="image-container">
        <img :src="image" :alt="title" class="image" />
      </figure>
      <h2 class="title">
        {{ title }}
      </h2>
    </div>
    <div class="quantity">
      <div class="controller">
        <button class="button" @click="$emit('remove-item')">-</button>
        {{ quantity }}
        <button class="button" @click="$emit('add-item')">+</button>
      </div>
    </div>
    <div class="price">
      {{ price }}
    </div>
    <div class="delete">
      <button class="button" @click="$emit('delete-item')">
        <IconDelete class="icon-delete" />
      </button>
    </div>
  </article>
</template>

<style scoped>
.cart-item {
  background-color: var(--color-background);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 0px;
  overflow: hidden;
}

.header {
  display: flex;
  flex-basis: 450px;
  flex-direction: row;
  gap: 20px;
  overflow: hidden;
}

.image-container {
  align-items: center;
  background-color: var(--color-white);
  display: flex;
  flex-basis: 100px;
  height: 100px;
  justify-content: center;
  width: 100px;
}

.title {
  flex-basis: 250px;
  font-weight: bold;
  align-self: center;
  font-size: 1rem;
}

.image {
  max-height: 100px;
  max-width: 100px;
}

.quantity {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  gap: 10px;
  justify-content: center;
}

.quantity .label {
  font-size: small;
  margin-bottom: 5px;
}

.quantity .controller {
  align-items: center;
  display: flex;
  gap: 10px;
}

.quantity .controller .button {
  all: unset;

  background-color: var(--color-background-soft);
  border-radius: 5px;
  cursor: pointer;
  padding: 2px 10px;
}

.quantity .controller .button:hover {
  background-color: var(--color-sky-600);
}

.price {
  align-items: center;
  display: flex;
  flex-basis: 150px;
  font-weight: bold;
  justify-content: end;
  padding: 10px;
}

.delete {
  align-items: center;
  display: flex;
  flex-basis: 100px;
  justify-content: end;
  margin-right: 20px;
}

.delete .button {
  all: unset;

  cursor: pointer;
}

:deep(.icon-delete path),
:deep(.icon-delete circle) {
  stroke: var(--color-text);
}

.delete .button:hover :deep(.icon-delete path),
.delete .button:hover :deep(.icon-delete circle) {
  stroke: var(--color-rose-700);
}
</style>
