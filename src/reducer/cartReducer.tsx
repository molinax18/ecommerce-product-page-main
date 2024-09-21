import { ActionType } from '../actions/cartActions'
import { CartProduct } from '../types'

export const cartInitialState: CartProduct[] = []

export const cartReducer = (
  state: typeof cartInitialState,
  action: ActionType
) => {
  switch (action.type) {
    case 'ADD_CART':
      return addCartItem(state, action.payload)
      
    default:
      return state
  }
}

const addCartItem = (cart: CartProduct[], item: CartProduct) => {
  return [...cart, item]
}
