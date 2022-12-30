import { ReactElement, ReactNode } from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '10%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, 0%)',
    padding: 'none',
  },
}

export interface FormModalProps {
  children: ReactNode
  isOpen: boolean
  onRequestClose: () => void
}

const ModalContainer = ({
  children,
  isOpen,
  onRequestClose,
}: FormModalProps): ReactElement => {
  Modal.setAppElement('#__next')

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      {children}
    </Modal>
  )
}

export default ModalContainer
