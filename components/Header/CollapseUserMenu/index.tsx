import React, { ReactElement } from 'react'
import UserIcon from '../../UserIcon'
import { Container } from './styles'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { CollapseProp } from '../../../interfaces/menuInterface'

function CollapseMenu({name, open=false}: CollapseProp): ReactElement {
  return (
    <Container>
      <UserIcon name={name} />
      <span>{name}</span>
      {open ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
    </Container>
  )
}

export default CollapseMenu