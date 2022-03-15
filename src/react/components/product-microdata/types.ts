import { Product } from 'src/core/types/product/ProductTypes'

export interface ProductListMicroDataProps {
  data: Product[]
}

export interface ProductItemMicroDataProps {
  data: Product
}

export interface SomeProductsMicroDataProps {
  data: SomeProductsProps
}

export interface SomeProductsProps {
  name?: string
  description?: string
}
