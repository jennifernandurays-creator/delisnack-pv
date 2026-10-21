import productsFile from '../../content/products.json'

export interface ProductItem {
  id: string
  name: string
  description: string
  image: string
  price: number | null
  featured: boolean
  customizable: boolean
}

export interface ProductCategory {
  id: string
  name: string
  shortLabel: string
  description: string
  image: string
  items: Array<ProductItem>
}

const categories = productsFile.categories as Array<ProductCategory>

export function getAllItems(): Array<ProductItem & { categoryId: string; categoryName: string }> {
  return categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      categoryId: category.id,
      categoryName: category.name,
    })),
  )
}

export function getFeaturedItems() {
  return getAllItems().filter((item) => item.featured)
}

export default categories
