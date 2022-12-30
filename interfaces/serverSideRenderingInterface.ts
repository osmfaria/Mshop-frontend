import { Publication } from "./publicationsInterface";

export interface UserSSRProps {
  props: { user: UserPostProp }
}

export interface SSRProps {
  props: { publication: Publication }
}

export interface UserProps {
  user: UserPostProp
  profile?: boolean
}


export interface IUserPublication {
  pageCount: number
  previousPage: string | null
  nextPage: string | null
  results: UserPublication[]
}

export interface UserPostProp {
  description: string | null
  name: string
}

interface Image {
  link: string
}

export interface UserPublication {
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
  user: UserPostProp
  Image: Image[]
}

