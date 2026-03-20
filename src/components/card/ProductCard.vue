<script lang="ts">
import { Shipment } from '@/enum/shipment.enum'
import { Product } from '@/model/product.model'
import { formatCurrency } from '@/utils/formatCurrency'
import IconShoppingCart from '../icons/IconShoppingCart.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    IconShoppingCart,
  },
  emits: ['add-to-cart'],
  props: {
    product: {
      type: Product,
    },
  },
  data() {
    return {
      title: this.product?.title ?? '',
      price: formatCurrency(this.product?.discountedPrice ?? 0),
      hasDiscount: (this.product?.discountPercentage ?? 0) > 0,
      discountPercentage: (this.product?.discountPercentage ?? 0) + '% OFF',
      originalPrice: formatCurrency(this.product?.price ?? 0),
      hasFreeShipping: this.product?.shipment === Shipment.FREE,
    }
  },
})
</script>

<template>
  <article class="product">
    <button class="add-to-cart" @click="$emit('add-to-cart')">
      <IconShoppingCart class="button-icon" />
    </button>
    <div class="header">
      <figure class="image-container">
        <img :src="product?.image" :alt="title" class="image" />
      </figure>
    </div>
    <div class="content">
      <h1 class="title">{{ title }}</h1>
      <p class="original-price" v-if="hasDiscount">{{ originalPrice }}</p>
      <h2 class="price">
        <span class="discount" v-if="hasDiscount">{{ discountPercentage }}</span
        >{{ price }}
      </h2>
      <p class="free-shipment" v-if="hasFreeShipping">Frete Grátis</p>
    </div>
  </article>
</template>

<style scoped>
.product {
  background-color: #2d3748;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.product:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

.header {
  position: relative;
}

.image-container {
  align-items: center;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  height: 280px;
  overflow: hidden;
  position: relative;
}

.content {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.image {
  max-height: 280px;
  max-width: 220px;
  object-fit: contain;
}

.title {
  font-size: 1rem;
  font-weight: bold;
  color: #e2e8f0;
  margin: 0 0 8px 0;
  line-height: 1.4;
  flex: 1;
}

.price {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
}

.original-price {
  text-align: left;
  font-size: 0.95rem;
  color: #a0aec0;
  text-decoration: line-through;
  margin: 4px 0;
}

.discount {
  background-color: var(--color-green-200);
  border-radius: 4px;
  color: var(--color-green-800);
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 8px;
}

.free-shipment {
  text-align: left;
  color: var(--color-green-600);
  font-size: 0.85rem;
  font-weight: bold;
  margin: 8px 0 0 0;
}

.add-to-cart {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 42px;
  height: 42px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-sky-400);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.add-to-cart:hover {
  background-color: var(--color-sky-600);
  transform: scale(1.1);
}

.add-to-cart:active {
  transform: scale(0.95);
}

.add-to-cart .button-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

:deep(.add-to-cart svg) {
  display: block;
}

:deep(.add-to-cart path),
:deep(.add-to-cart circle) {
  stroke: white;
  stroke-width: 2;
}
</style>
