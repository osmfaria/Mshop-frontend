import { Container } from './styles'
import { UserProp } from '../../interfaces/publicationsInterface'
import { ReactElement } from 'react'

const UserIcon = ({ name }: UserProp): ReactElement => {
  const getInitials = (): string => {
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)

    return initials.toUpperCase()
  }
  const initials = getInitials()

  return <Container>{initials}</Container>
}

export default UserIcon
