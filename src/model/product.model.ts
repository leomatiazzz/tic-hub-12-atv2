import type { Shipment } from '@/enum/shipment.enum'
import { Category } from '@/model/category.model'

export class Product {
  constructor(
    public id: number | string,
    public title: string,
    public price: number,
    public category: Category,
    public shipment: Shipment,
    public image?: string,
    public description?: string,
    public discountPercentage?: number,
    public rating?: {
      rate: number
      count: number
    },
  ) {}

  get discountValue(): number {
    return (this.price * (this.discountPercentage ?? 0)) / 100
  }

  get discountedPrice(): number {
    return this.price * (1 - (this.discountPercentage ?? 0) / 100)
  }
}
