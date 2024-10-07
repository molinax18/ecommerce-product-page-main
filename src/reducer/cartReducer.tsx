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

    case 'DELETE_CART':
      return deleteCartItem(state, action.payload)

    default:
      return state
  }
}

const addCartItem = (cart: CartProduct[], item: CartProduct) => {
  const existInCart = cart.some(el => el.name === item.name)

  if (existInCart) {
    return cart.map(el => {
      if (el.name === item.name) {
        return { ...el, amount: el.amount + item.amount };
      }

      return el
    })  
  }

  return [...cart, item]
}


const deleteCartItem = (cart: CartProduct[], name: string) => {
  return cart.filter(el => el.name !== name)
}