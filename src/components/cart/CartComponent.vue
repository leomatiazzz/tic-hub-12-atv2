<script lang="ts">
import { Cart } from '@/model/cart.model'
import { defineComponent } from 'vue'
import IconShopping from '@/components/icons/IconShopping.vue'
import OpenCartButton from './OpenCartButton.vue'
import CartItemComponent from './CartItemComponent.vue'
import type { CartItem } from '@/model/cart-item.model'
import type { Product } from '@/model/product.model'
import { formatCurrency } from '@/utils/formatCurrency'

export default defineComponent({
  components: {
    CartItemComponent,
    IconShopping,
    OpenCartButton,
  },
  props: {
    cart: Cart,
  },
  data() {
    return {
      showCart: false,
    }
  },
  methods: {
    openCart() {
      this.showCart = true
    },
    closeCart() {
      this.showCart = false
    },
    addItem(product: Product, quantity: number = 1) {
      this.cart?.add(product, quantity)
    },
    removeItem(product: Product, quantity: number = 1) {
      this.cart?.remove(product, quantity)
    },
    deleteItem(product: Product) {
      this.cart?.delete(product)
    },
    clearCart() {
      this.cart?.clear()
    },
  },
  computed: {
    totalItems(): number {
      return this.cart?.totalInCart ?? 0
    },
    totalPrice(): string {
      return formatCurrency(this.cart?.totalAmount ?? 0)
    },
    finalPrice(): string {
      return formatCurrency(this.cart?.totalAmountWithDiscount ?? 0)
    },
    economy(): string {
      return formatCurrency(this.cart?.economy ?? 0)
    },
    productList(): CartItem[] {
      return this.cart?.list ?? []
    },
  },
})
</script>

<template>
  <div class="button-container">
    <OpenCartButton @click="openCart" :totalInCart="totalItems" />
  </div>
  <div class="cart-modal" v-if="showCart">
    <div class="click-to-close" @click="closeCart"></div>
    <aside class="cart-container">
      <h1 class="title">
        <IconShopping class="icon-cart" />
        Carrinho de compras
      </h1>
      <section class="cart-total" v-if="(cart?.list.length ?? 0) > 0">
        <div class="info">
          <span class="label">Quantidade:</span>
          <span class="value">{{ totalItems }} Itens</span>
        </div>
        <div class="info">
          <span class="label">Preço original: </span>
          <span class="value stroke">{{ totalPrice }}</span>
        </div>
        <div class="info">
          <span class="label">Economia: </span>
          <span class="value economy">{{ economy }}</span>
        </div>
        <div class="info">
          <span class="label">Preço final: </span>
          <span class="value final-price">{{ finalPrice }}</span>
        </div>
      </section>
      <section class="product-list">
        <div class="empty-cart" v-if="cart?.list.length == 0">
          <p> Seu carrinho está vazio</p>
        </div>
        <CartItemComponent
          v-for="item in productList"
          :key="item.product.id"
          :cartItem="item"
          @add-item="addItem(item.product)"
          @remove-item="removeItem(item.product)"
          @delete-item="deleteItem(item.product)"
        />
      </section>
    </aside>
  </div>
</template>

<style scoped>
.stroke {
  text-decoration: line-through;
}

.economy {
  color: var(--color-green-600);
}

.final-price {
  color: var(--color-sky-600);
}

.button-container {
  align-items: center;
  display: flex;
  justify-content: end;
  padding: 10px;
}

.cart-modal {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;

  background: none;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: fixed;
  overflow: hidden;
}

.click-to-close {
  width: 100%;
  height: 100%;
  min-height: 120vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-background-modal);
}

.cart-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  background-color: var(--color-background-soft);
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.title {
  align-items: center;
  display: flex;
  gap: 16px;
  font-size: large;
  margin-bottom: 40px;
}

.icon-cart {
  width: 18px;
}

:deep(.icon-cart path),
:deep(.icon-cart circle) {
  stroke: var(--color-text);
}

.cart-total {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 20px;
}

.cart-total .info {
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: start;
}

.cart-total .info .label {
  font-size: small;
}

.cart-total .info .value {
  font-size: large;
  font-weight: bold;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: fit-content;
}

.empty-cart {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>