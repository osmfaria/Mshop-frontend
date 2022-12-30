import { motorsApi } from '../../services/api'

import { createContext, useContext, useState } from 'react'
import {
  ChildrenProp,
  PublicationTypeProviderProp,
} from '../../interfaces/contextInterface'
import { Publication } from '../../interfaces/publicationsInterface'
import { toast } from 'react-toastify'
import { Session } from 'next-auth'
import { IPost } from '../../interfaces/postInterface'

const PublicationContext = createContext<PublicationTypeProviderProp>(
  {} as PublicationTypeProviderProp
)

export const PublicationProvider = ({ children }: ChildrenProp) => {
  const [carLoading, setCarLoading] = useState<boolean>(true)
  const [carPublications, setCarPublications] = useState<Publication[]>([])
  const [carHasMore, setCarHasMore] = useState<boolean>(false)

  const [motoLoading, setMotoLoading] = useState<boolean>(true)
  const [motoPublications, setMotoPublications] = useState<Publication[]>([])
  const [motoHasMore, setMotoHasMore] = useState<boolean>(false)

  const [userPublicationsLoading, setUserPublicationsLoading] =
    useState<boolean>(true)
  const [userPublications, setUserPublications] = useState<Publication[]>([])
  const [userPublicationsHasMore, setUserPublicationsHasMore] =
    useState<boolean>(false)

  const getPublicationsByCar = (pageNumber: number): void => {
    if (pageNumber === 1) setCarPublications([])
    motorsApi
      .get(`/publications/vehicle_type/CAR/?page=${pageNumber}&limit=5`)
      .then((res) => {
        if (pageNumber === 1) {
          setCarPublications(res.data.results)
        } else {
          setCarPublications([...carPublications, ...res.data.results])
        }
        setCarHasMore(res.data.nextPage)
        setCarLoading(false)
      })
  }

  const getPublicationsByMotorcycle = (pageNumber: number): void => {
    motorsApi
      .get(`/publications/vehicle_type/MOTORCYCLE/?page=${pageNumber}&limit=5`)
      .then((res) => {
        if (pageNumber === 1) {
          setMotoPublications(res.data.results)
        } else {
          setMotoPublications([...motoPublications, ...res.data.results])
        }
        setMotoHasMore(res.data.nextPage)
        setMotoLoading(false)
      })
  }

  const getPublicationsByUser = (pageNumber: number, userId?: string): void => {
    motorsApi
      .get(`/publications/users/${userId!}/?page=${pageNumber}&limit=5`)
      .then((res) => {
        if (pageNumber === 1) {
          setUserPublications(res.data.results)
        } else {
          setUserPublications([...userPublications, ...res.data.results])
        }
        setUserPublicationsHasMore(res.data.nextPage)
        setUserPublicationsLoading(false)
      })
  }

  const deletePublication = async (id: string, session: Session) => {
    await motorsApi
      .delete(`/publications/${id}`, {
        headers: { Authorization: `Bearer ${session!.user!.accessToken}` },
      })
      .then((_) => {
        toast.success('Publication deleted!', {
          position: toast.POSITION.TOP_CENTER,
        })
      })
      .catch((_) =>
        toast.error('Something went wrong :(, try again later...', {
          position: toast.POSITION.TOP_CENTER,
        })
      )
  }

  const updatedPublication = async (
    id: string,
    session: Session,
    data: IPost
  ) => {
    await motorsApi
      .patch(`/publications/${id}`, data, {
        headers: { Authorization: `Bearer ${session!.user!.accessToken}` },
      })
      .then((_) => {
        toast.success('Publication updated!', {
          position: toast.POSITION.TOP_CENTER,
        })
      })
      .catch((_) => {
        toast.error('Something went wrong :(, try again later...', {
          position: toast.POSITION.TOP_CENTER,
        })
      })
  }

  return (
    <PublicationContext.Provider
      value={{
        getPublicationsByCar,
        carPublications,
        setCarLoading,
        carLoading,
        carHasMore,
        getPublicationsByMotorcycle,
        motoPublications,
        setMotoLoading,
        motoLoading,
        motoHasMore,
        getPublicationsByUser,
        userPublications,
        setUserPublicationsLoading,
        userPublicationsLoading,
        userPublicationsHasMore,
        deletePublication,
        updatedPublication,
      }}
    >
      {children}
    </PublicationContext.Provider>
  )
}

export const usePublication = () => useContext(PublicationContext)
