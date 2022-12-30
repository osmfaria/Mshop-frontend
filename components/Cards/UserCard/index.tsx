import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { UserProps } from '../../../interfaces/serverSideRenderingInterface'
import Button from '../../Button'
import UserIcon from '../../UserIcon'
import { Container } from './styles'

export default function UserCard({user, profile=false}: UserProps): ReactElement {
    const router = useRouter()

    const handleClick = () => {
      router.push('/publications/post')
    }
  
  return (
    <Container>
      <UserIcon name={user.name} size='bg' />
      <div className='box-user'>
        <h2 className='box-user_name'>{user.name}</h2>
        <span className='box-user_mark'>Seller</span>
      </div>
      <p className='text'>{user.description}</p>
      {profile && (<Button size='bg' design='outlineBrand1' onClick={handleClick}>Start selling</Button>)}
    </Container>
  )
}
