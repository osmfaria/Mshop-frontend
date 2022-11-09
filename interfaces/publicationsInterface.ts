export declare type Image = {
  id: string
  link: string
}

export interface UserProp {
  name: string
}

export declare type Publication = {
  id: string
  type: string
  title: string
  year: string
  milieage: number
  price: number
  description: string
  vehicle_type: string
  is_active: boolean
  createdAt: string
  updatedAt: string
  userId: string
  Image: Image[]
  user: UserProp
}

export declare type IPublication = {
  pageCount: number
  previousPage: string | null
  nextPage: string | null
  results: Publication[]
}

export declare type PublicationProp = {
  publications: IPublication
}

export declare type CardProp = {
  publication: Publication
  innerRef?: (node: HTMLDivElement | null) => void
}