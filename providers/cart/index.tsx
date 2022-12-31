import { useContext, useEffect } from 'react'
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import {
  CartProviderProp,
  ChildrenProp,
} from '../../interfaces/contextInterface'
import { Publication } from '../../interfaces/publicationsInterface'

const CartContext = createContext<CartProviderProp>({} as CartProviderProp)

export const CartProvider = ({ children }: ChildrenProp) => {
  const [cart, setCart] = useState<Publication[]>([])
  const [cartTotal, setCartTotal] = useState<number>(0)

  useEffect(() => {
    // const initialState = []
      // JSON.parse(localStorage.getItem('@MotorShop:cart') || '') || 

    setCart([])
  }, [])

  const addToCart = (product: Publication) => {
    const productInCart = cart.find(({ id }) => id === product.id)

    if (!!productInCart) {
      toast.warning('This item is already in your cart.', {
        position: toast.POSITION.TOP_CENTER,
      })
    } else {
      const updatedProductList = [...cart, product]

      // localStorage.setItem(
      //   '@MotorShop:cart',
      //   JSON.stringify(updatedProductList)
      // )

      setCart(updatedProductList)
      toast.success('Item has been added to your cart', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  const removeFromCart = (id: string) => {
    const updatedProductList = cart.filter((product) => product.id !== id)

    localStorage.setItem('@MotorShop:cart', JSON.stringify(updatedProductList))

    setCart(updatedProductList)
  }

  const calculateCartTotal = () => {
    if (cart.length > 0) {
      const total = cart.reduce((total: number, { price }) => total + price, 0)
      setCartTotal(total)
    } else {
      setCartTotal(0)
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, cartTotal, addToCart, removeFromCart, calculateCartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
