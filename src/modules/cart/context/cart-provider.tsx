'use client';

import React, { createContext, useReducer } from 'react';

import {
  addToCart,
  calculateCartTotal,
  removeFromCart,
  updateCartQuantity,
} from '../services/cart.service';
import { AddToCartPayload, CartState, UpdateQuantityPayload } from '../types';

type CartAction =
  | { type: 'ADD_ITEM'; payload: AddToCartPayload }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: UpdateQuantityPayload };

const CartContext = createContext<{
  state: CartState;
  total: number;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const initialState: CartState = {
  items: [],
};

const reducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: addToCart(state.items, action.payload) };
    case 'REMOVE_ITEM':
      return { ...state, items: removeFromCart(state.items, action.payload) };
    case 'UPDATE_QUANTITY':
      return { ...state, items: updateCartQuantity(state.items, action.payload) };
    default:
      return state;
  }
};

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const total = calculateCartTotal(state.items);

  return <CartContext.Provider value={{ state, total, dispatch }}>{children}</CartContext.Provider>;
};

export { CartContext };
