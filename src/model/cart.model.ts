import { CartItem } from '@/model/cart-item.model'
import type { Product } from '@/model/product.model'

export class Cart {
  constructor(public list: CartItem[] = []) {}

  get totalInCart(): number {
    return this.list.reduce((acc, item) => acc + item.quantity, 0)
  }

  get totalAmount(): number {
    return this.list.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  get totalAmountWithDiscount(): number {
    return this.list.reduce((acc, item) => acc + item.discountedPrice, 0)
  }

  get economy(): number {
    return this.totalAmount - this.totalAmountWithDiscount
  }

  add(product: Product, quantity: number): this {
    const itemIndex = this.list.findIndex((item) => item.product.id === product.id)

    if (itemIndex === -1) {
      this.list.push(new CartItem(product, quantity))
      return this
    }

    this.list[itemIndex]!.quantity += quantity
    return this
  }

  remove(product: Product, quantity: number): this {
    const itemIndex = this.list.findIndex((item) => item.product.id === product.id)

    if (itemIndex === -1) {
      return this
    }

    this.list[itemIndex]!.quantity -= quantity

    if (this.list[itemIndex]!.quantity <= 0) {
      this.list.splice(itemIndex, 1)
    }

    return this
  }

  clear(): this {
    this.list = []
    return this
  }

  delete(product: Product): this {
    this.list = this.list.filter((item) => item.product.id !== product.id)
    return this
  }
}
