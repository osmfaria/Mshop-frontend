import { ReactElement } from 'react'
import { ISlideButtonProps } from '../../interfaces/buttonInterface'
import { StyledButton } from './styles'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const SlideButton = ({ format='back', onClick }: ISlideButtonProps): ReactElement => {
  return (
    <StyledButton onClick={onClick} format={format}>
      {format === 'forward' ? (
        <IoIosArrowForward size={40} />
      ) : (
        <IoIosArrowBack size={40} />
      )}
    </StyledButton>
  )
}

export default SlideButton
