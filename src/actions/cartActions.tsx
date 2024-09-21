import { CartProduct } from "../types";

export type ActionType =
  | { type: 'ADD_CART', payload: CartProduct }
  | { type: 'REMOVE_CART', payload: string }
  | { type: 'DELETE_CART', payload: string }
  | { type: 'RESET_CART' }