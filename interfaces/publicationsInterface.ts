export declare type Image = {
  id: string
  link: string
}

export interface UserIconProp {
  name: string | null | undefined
  size?: string
}

export interface UserProp {
  name: string
  description?: string
}

export declare type Comment = {
  id: string
  description: string
  createdAt: Date
  updatedAt: Date
  userId: string
  publicationId: string
  user: {name: string}
}

export declare type IComment = {
  pageCount: number
  previousPage: string | null
  nextPage: string | null
  results: Comment[]
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
  user: UserProp
  Comment: Comment[]
  Image: Image[]
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