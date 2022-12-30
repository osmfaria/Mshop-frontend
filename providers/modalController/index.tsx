import { createContext, useContext, useState } from 'react'
import {
  ChildrenProp,
  ModalControllerProviderPop,
} from '../../interfaces/contextInterface'

const ModalControllerContext = createContext<ModalControllerProviderPop>(
  {} as ModalControllerProviderPop
)

export const ModalControllerProvider = ({ children }: ChildrenProp) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false)
  const [isCreationOpen, setIsCreationOpen] = useState<boolean>(false)
  const [isEditionOpen, setIsEditionOpen] = useState<boolean>(false)

  const handleCreationModal = () => setIsCreationOpen(!isCreationOpen)
  const handleEditionModal = () => setIsEditionOpen(!isEditionOpen)
  const handleGalleryModal = () => setIsGalleryOpen(!isGalleryOpen)
  const handleHamburgerModal = () => setIsHamburgerOpen(!isHamburgerOpen)

  return (
    <ModalControllerContext.Provider
      value={{
        isGalleryOpen,
        isHamburgerOpen,
        isCreationOpen,
        isEditionOpen,
        handleHamburgerModal,
        handleGalleryModal,
        handleCreationModal,
        handleEditionModal,
        setIsHamburgerOpen,
      }}
    >
      {children}
    </ModalControllerContext.Provider>
  )
}

export const useModalController = () => useContext(ModalControllerContext)
