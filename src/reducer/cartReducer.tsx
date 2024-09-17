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

    case 'REMOVE_CART':
      return removeCartItem(state, action.payload)

    case 'DELETE_CART':
      return deleteCartItem(state, action.payload)

    case 'RESET_CART':
      return []

    default:
      return state
  }
}
