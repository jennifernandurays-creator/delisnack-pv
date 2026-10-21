import toppingsFile from '../../content/toppings.json'

export interface Topping {
  id: string
  name: string
  image: string
  available: boolean
}

export default toppingsFile.toppings as Array<Topping>
