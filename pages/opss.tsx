import React from 'react'
import { Container } from '../styles/opss'
import { RiEmotionSadLine } from 'react-icons/ri'

function opss() {
  return (
    <Container>
      <RiEmotionSadLine size={30}/>
      <div></div>
      <h2>Publication not found or inactive</h2>
    </Container>
  )
}

export default opss
