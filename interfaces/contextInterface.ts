import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react'
import { Publication } from './publicationsInterface'

export interface ChildrenProp {
  children: ReactNode
}

export interface PublicationProviderProp {
  getPublications: (pageNumber: number) => void
  publications: Publication[]
  setLoading: Dispatch<SetStateAction<boolean>>
  loading: boolean
  hasMore: boolean
  innerRef?: RefObject<HTMLDivElement>
  title: string
}

export interface PublicationTypeProviderProp {
  getPublicationsByCar: (pageNumber: number) => void
  carPublications: Publication[]
  setCarLoading: Dispatch<SetStateAction<boolean>>
  carLoading: boolean
  carHasMore: boolean
  getPublicationsByMotorcycle: (pageNumber: number) => void
  motoPublications: Publication[]
  setMotoLoading: Dispatch<SetStateAction<boolean>>
  motoLoading: boolean
  motoHasMore: boolean
}
