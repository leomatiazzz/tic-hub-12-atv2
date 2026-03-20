import type { Product } from '@/model/product.model'

export class CartItem {
  constructor(
    public product: Product,
    public quantity: number,
  ) {}

  get price(): number {
    return this.product.price * this.quantity
  }

  get discountedPrice(): number {
    return this.product.discountedPrice * this.quantity
  }

  get discountValue(): number {
    return this.product.discountValue * this.quantity
  }

  get economy(): number {
    return this.price - this.discountedPrice
  }
}
