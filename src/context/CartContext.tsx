import { cartInitialState, cartReducer } from '../reducer/cartReducer'
import { createContext, Dispatch, useContext, useReducer } from 'react'
import { CartProduct } from '../types'
import { ActionType } from '../actions/cartActions'

export type CartContext = {
  state: CartProduct[]
  dispatch: Dispatch<ActionType>
}

type Props = {
  children: React.ReactNode
}

const CartContext = createContext({})

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
