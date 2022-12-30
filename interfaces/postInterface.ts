export interface IPost {
  type: string
  title: string
  year: string
  milieage: string | number
  price: string
  description: string
  vehicle_type: string
  images: Image[]
}

export interface Image {
  link: string
  id?: string
}
