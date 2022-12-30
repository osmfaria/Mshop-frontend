import { ReactElement } from 'react'
import { IButtonProps } from '../../interfaces/buttonInterface'
import { StyledButton } from './styles'

const Button = ({
  design,
  size,
  children,
  onClick,
  ...rest
}: IButtonProps): ReactElement => {
  return (
    <StyledButton design={design} size={size} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
