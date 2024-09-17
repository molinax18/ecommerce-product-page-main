export type ActionType =
  | { type: 'ADD_CART', payload: string }
  | { type: 'REMOVE_CART', payload: string }
  | { type: 'DELETE_CART', payload: string }
  | { type: 'RESET_CART' }