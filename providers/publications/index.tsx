import { motorsApi } from '../../services/api'

import { createContext, useContext, useState } from 'react'
import {
  ChildrenProp,
  PublicationProviderProp,
  PublicationTypeProviderProp
} from '../../interfaces/contextInterface'
import { Publication } from '../../interfaces/publicationsInterface'

const PublicationContext = createContext<PublicationTypeProviderProp>(
  {} as PublicationTypeProviderProp
)

export const PublicationProvider = ({ children }: ChildrenProp) => {
  // const [loading, setLoading] = useState<boolean>(true)
  // const [publications, setPublications] = useState<Publication[]>([])
  // const [hasMore, setHasMore] = useState<boolean>(false)

  const [carLoading, setCarLoading] = useState<boolean>(true)
  const [carPublications, setCarPublications] = useState<Publication[]>([])
  const [carHasMore, setCarHasMore] = useState<boolean>(false)
  
  const [motoLoading, setMotoLoading] = useState<boolean>(true)
  const [motoPublications, setMotoPublications] = useState<Publication[]>([])
  const [motoHasMore, setMotoHasMore] = useState<boolean>(false)

  // const getPublications = (pageNumber: number): void => {
  //   motorsApi.get(`/publications/?page=${pageNumber}&limit=3`).then((res) => {
  //     setPublications((prevPublications) => [
  //       ...prevPublications,
  //       ...res.data.results,
  //     ])
  //     setHasMore(res.data.nextPage)
  //     setLoading(false)
  //   })
  // }

  const getPublicationsByCar = (pageNumber: number): void => {
    motorsApi
      .get(`/publications/vehicle_type/CAR/?page=${pageNumber}&limit=5`)
      .then((res) => {
        setCarPublications((prevPublications) => [
          ...prevPublications,
          ...res.data.results,
        ])
        setCarHasMore(res.data.nextPage)
        setCarLoading(false)
      })
  }

  const getPublicationsByMotorcycle = (pageNumber: number): void => {
    motorsApi.get(`/publications/vehicle_type/MOTORCYCLE/?page=${pageNumber}&limit=5`).then((res) => {
      setMotoPublications((prevPublications) => [
        ...prevPublications,
        ...res.data.results,
      ])
      setMotoHasMore(res.data.nextPage)
      setMotoLoading(false)
    })
  }

  return (
    <PublicationContext.Provider
      // value={{ getPublications, publications, setLoading, loading, hasMore }}
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
      }}
    >
      {children}
    </PublicationContext.Provider>
  )
}

export const usePublication = () => useContext(PublicationContext)
