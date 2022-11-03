import { StyledButton } from './styles'

const Button = ({ type, size, children, ...rest }) => {
  return <StyledButton type={type} size={size} {...rest}>{children}</StyledButton>
}

export default Button
