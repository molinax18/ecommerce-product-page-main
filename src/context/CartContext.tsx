import { cartInitialState, cartReducer } from '../reducer/cartReducer'
import { createContext, useContext, useReducer } from 'react'
import { CartProduct } from '../types'

type Cart = {
  state: CartProduct[]
  children: React.ReactNode
}

const CartContext = createContext({})

export const CartContextProvider: React.FC<Cart> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext)
