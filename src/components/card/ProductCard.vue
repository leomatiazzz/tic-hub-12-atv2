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
  background-color: var(--color-background-soft);
  border-radius: 10px;
  box-shadow: 1px solid var(--color-background-soft);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.image-container {
  align-items: center;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  height: 250px;
  overflow: hidden;
}

.content {
  padding: 10px;
}

.image {
  max-height: 250px;
  max-width: 200px;
}

.title {
  font-size: large;
  font-weight: bold;
}

.price {
  align-items: center;
  text-align: right;
  font-size: 1.3rem;
}

.original-price {
  text-align: right;
  font-size: 1rem;
  opacity: 0.5;
  text-decoration: line-through;
}

.discount {
  background-color: var(--color-green-200);
  border-radius: 2px;
  color: var(--color-green-800);
  font-size: small;
  font-weight: bold;
  margin-right: 20px;
  padding: 3px;
}

.free-shipment {
  text-align: right;
  color: var(--color-green-600);
  font-size: small;
  font-weight: bold;
}

.add-to-cart {
  display: none;
}

.product:hover .add-to-cart {
  all: unset;

  position: absolute;

  align-items: center;
  background-color: var(--color-sky-400);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  margin: 10px;
  padding: 10px 10px;
}

.add-to-cart:hover {
  background-color: var(--color-sky-600);
}

.add-to-cart .button-icon {
  width: 30px;
}

:deep(.add-to-cart path),
:deep(.add-to-cart circle) {
  stroke: var(--color-text);
}
</style>
