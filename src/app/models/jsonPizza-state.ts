export interface Root {
  pizza: Pizza[]
}

export interface Pizza {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  description: string
}
