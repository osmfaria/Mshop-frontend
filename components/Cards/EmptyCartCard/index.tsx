import { Container, Content } from './styles'
import { BsCartPlusFill } from 'react-icons/bs'
import Link from 'next/link'

export default function EmptyCartCard() {
  
  return (
    <Container>
      <Content>
        <div>
          <BsCartPlusFill />
          <h3>Your cart is empty</h3>
        </div>
        <span>
          <Link href='/'>Add products</Link>
        </span>
      </Content>
    </Container>
  )
}
