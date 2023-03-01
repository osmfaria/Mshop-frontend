import { Container } from './styles'
import { UserIconProp } from '../../interfaces/publicationsInterface'
import { ReactElement, useState } from 'react'

const colorMap = new Map<string, string>()

function getInitials(name: string): string {
  return name!
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

const UserIcon = ({ name, size = 'sm' }: UserIconProp): ReactElement => {
  const [color, setColor] = useState(() => {
    if (colorMap.has(name!)) {
      return colorMap.get(name!)
    } else {
      const randomColor = `random${Math.floor(Math.random() * 12) + 1}`
      colorMap.set(name!, randomColor)
      return randomColor
    }
  })

  const initials = getInitials(name!)

  return (
    <Container color={color!} size={size}>
      <span>{initials}</span>
    </Container>
  )
}

export default UserIcon
