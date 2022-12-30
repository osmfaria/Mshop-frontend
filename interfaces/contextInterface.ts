import { Session } from 'next-auth'
import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react'
import { Publication } from './publicationsInterface'

import {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query'
import { IPost } from './postInterface'

export interface ChildrenProp {
  children: ReactNode
}

export interface UserProviderPop {
  isLoggedIn: string | undefined
  setIsLoggedIn: Dispatch<SetStateAction<string>>
}

export interface PublicationProviderProp {
  getPublications: (pageNumber: number, userId?: string) => void
  publications: Publication[]
  setLoading: Dispatch<SetStateAction<boolean>>
  loading: boolean
  hasMore: boolean
  innerRef?: RefObject<HTMLDivElement>
  title: string
  userId?: any
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
  getPublicationsByUser: (pageNumber: number, userId?: string) => void
  userPublications: Publication[]
  setUserPublicationsLoading: Dispatch<SetStateAction<boolean>>
  userPublicationsLoading: boolean
  userPublicationsHasMore: boolean
  deletePublication: (id: string, session: Session) => void
  updatedPublication: (id: string, session: Session, data: IPost) => void
}

export interface ModalControllerProviderPop {
  isGalleryOpen: boolean
  isHamburgerOpen: boolean
  isCreationOpen: boolean
  isEditionOpen: boolean
  handleGalleryModal: () => void
  handleHamburgerModal: () => void
  handleCreationModal: () => void
  handleEditionModal: () => void
  setIsHamburgerOpen: Dispatch<SetStateAction<boolean>>
}

export interface CommentsTypeProviderProp {
  deleteComment: (
    id: string,
    token: string,
    refetch: <TPageData>(
      options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<InfiniteData<any>, unknown>>
  ) => void
  editComment: (
    id: string,
    token: string,
    data: {description: string},
    refetch: <TPageData>(
      options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<InfiniteData<any>, unknown>>
  ) => void
}

export interface CartProviderProp {
  cart: Publication[]
  cartTotal: number
  addToCart: (product: Publication) => void
  removeFromCart: (id: string) => void
  calculateCartTotal: () => void
}
