import React, { useEffect } from 'react'
import CartCard from '../components/Cards/CartCard'
import { useCart } from '../providers/cart'
import { Container } from '../styles/cart'
import EmptyCartCard from '../components/Cards/EmptyCartCard'
import { getCurrency } from '../functions/currency'

function Cart() {
  const { cart, cartTotal, calculateCartTotal } = useCart()

  useEffect(() => {
    calculateCartTotal()
  }, [cart])

  const currencyTotal = getCurrency(cartTotal)

  return (
    <Container>
      <div className='panel'>
        {cart.length === 0 ? (
          <EmptyCartCard />
        ) : (
          <>
            <div className='panel-header'>
              <h2>Your Items</h2>
              <h2>Total: {currencyTotal}</h2>
            </div>
            {cart.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
    </Container>
  )
}

export default Cart
