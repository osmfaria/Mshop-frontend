import { Container } from './styles'
import { UserIconProp } from '../../interfaces/publicationsInterface'
import { ReactElement, useEffect, useState } from 'react'

const UserIcon = ({ name, size='sm' }: UserIconProp): ReactElement => {
  const [randomColor, setRandomColor] = useState('1')

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 12) + 1
    setRandomColor(`random${randomNumber}`)
  }, [])

  const getInitials = (): string => {
    const initials = name!
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)

    return initials.toUpperCase()
  }

  const initials = getInitials()

  return (
    <Container color={randomColor} size={size}>
      <span>{initials}</span>
    </Container>
  )
}

export default UserIcon
