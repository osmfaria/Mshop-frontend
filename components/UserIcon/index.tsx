import { Container } from './styles'
import { UserProp } from '../../interfaces/publicationsInterface'
import { ReactElement } from 'react'

const UserIcon = ({ name }: UserProp): ReactElement => {
  const randomNumber = Math.floor(Math.random() * 12) + 1
  const randomColor = `random${randomNumber}`

  const getInitials = (): string => {
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)

    return initials.toUpperCase()
  }
  const initials = getInitials()

  return <Container color={randomColor}>{initials}</Container>
}

export default UserIcon
