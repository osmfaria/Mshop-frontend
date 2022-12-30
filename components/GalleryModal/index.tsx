import Image from 'next/image'
import { ReactElement } from 'react'
import Modal from 'react-modal'
import { useModalController } from '../../providers/modalController'
import { Container } from './styles'
import { MdClose } from 'react-icons/md'

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
  },
}

const ModalGallery = ({ imageLink }: { imageLink: string }): ReactElement => {
  const {isGalleryOpen, handleGalleryModal} = useModalController()

  const loader = () => imageLink
  Modal.setAppElement('#__next')

  return (
    <Modal
      isOpen={isGalleryOpen}
      onRequestClose={handleGalleryModal}
      style={customStyles}
    >
      <Container>
        <div className='box-title'>
          <h6>Gallery pictures</h6>
          <button onClick={handleGalleryModal} className='close-btn'>
            <MdClose size={25} />
          </button>
        </div>
        <div className='box-image'>
          <Image
            loader={loader}
            src='galler-image'
            alt='gallery image'
            fill
            className='image'
            priority
          />
        </div>
      </Container>
    </Modal>
  )
}

export default ModalGallery
