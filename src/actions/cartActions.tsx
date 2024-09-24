import { CartProduct } from "../types";

export type ActionType =
  | { type: 'ADD_CART', payload: CartProduct }
  | { type: 'DELETE_CART', payload: string }