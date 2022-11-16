export class UpdateProductDTO {
  slug: string
  name: string
  description: string
  images:  { src: string, alt: string, title: string }[]
  price: number
  category: string
  updatedAt: string
}