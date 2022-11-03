const Vehicle_Type: {
  CAR: 'CAR'
  MOTORCYCLE: 'MOTORCYCLE'
} = {
  CAR: 'CAR',
  MOTORCYCLE: 'MOTORCYCLE',
}

type Vehicle_Type = typeof Vehicle_Type[keyof typeof Vehicle_Type]

export type Publication = {
  id: string
  type: string
  title: string
  year: string
  milieage: number
  price: number
  description: string
  vehicle_type: Vehicle_Type
  is_active: boolean
  createdAt: Date
  updatedAt: Date
  userId: string
}

export declare type IPublication = {
  pageCount: number
  previousPage: string | null
  nextPage: string | null
  results: Publication[]
}

export declare type IGetPulications = {
  publications: IPublication
}
