<script lang="ts">
import ProductCard from '@/components/card/ProductCard.vue'
import { productsMock } from '@/mock/products.mock'
import { Cart } from '@/model/cart.model'
import CartComponent from '@/components/cart/CartComponent.vue'
import type { Product } from '@/model/product.model'

export default {
  name: 'ProductPage',
  components: {
    CartComponent,
    ProductCard,
  },
  data() {
    return {
      products: productsMock,
      cart: new Cart(),
    }
  },
  methods: {
    addToCart(product: Product, quantity: number = 1) {
      console.log(product)
      this.cart.add(product, quantity)
      console.log(this.cart)
    },
  },
}
</script>

<template>
  <main class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>TICommerce</h1>
        <p>Sua loja premium de tecnologia e games!</p>
      </div>
    </section>

    <!-- Cart Component -->
    <div class="cart-wrapper">
      <CartComponent :cart="cart" />
    </div>

    <!-- Products Section -->
    <section class="products-section">
      <div class="section-header">
        <h2>Produtos em destaque</h2>
        <p>{{ products.length }} produtos disponíveis</p>
      </div>

      <div class="product-list">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart(product)"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  background-attachment: fixed;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 24px 24px;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 4rem;
  margin: 0 0 16px 0;
  font-weight: 700;
  letter-spacing: 3px;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  font-family: 'Poppins', 'Segoe UI', sans-serif;
}

.hero-content p {
  font-size: 1.3rem;
  margin: 0;
  opacity: 0.95;
  font-weight: 300;
}

.cart-wrapper {
  max-width: 1400px;
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
}

.products-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
}

.section-header {
  margin-bottom: 40px;
  text-align: center;
}

.section-header h2 {
  font-size: 2.5rem;
  margin: 0 0 12px 0;
  color: #e2e8f0;
  font-weight: 700;
}

.section-header p {
  font-size: 1.1rem;
  color: #a0aec0;
  margin: 0;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .hero-content h1 {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 20px;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }

  .product-list {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .products-section {
    padding: 24px 12px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 40px 16px;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .product-list {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .products-section {
    padding: 20px 8px;
  }
}
</style>
