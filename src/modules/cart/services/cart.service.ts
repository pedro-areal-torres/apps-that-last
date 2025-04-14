// modules/cart/services/cart.service.ts
import { CartItem, AddToCartPayload, UpdateQuantityPayload } from '@modules/cart/types';

const addToCart = (items: CartItem[], product: AddToCartPayload): CartItem[] => {
  const existing = items.find((item) => item.id === product.id);

  if (existing) {
    return items.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: Math.min(item.quantity + 1, item.stock),
          }
        : item,
    );
  }

  return [...items, { ...product, quantity: 1 }];
};

const removeFromCart = (items: CartItem[], productId: string): CartItem[] => {
  return items.filter((item) => item.id !== productId);
};

const updateCartQuantity = (
  items: CartItem[],
  { id, quantity }: UpdateQuantityPayload,
): CartItem[] => {
  return items.map((item) =>
    item.id === id ? { ...item, quantity: Math.min(quantity, item.stock) } : item,
  );
};

const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export { addToCart, removeFromCart, updateCartQuantity, calculateCartTotal };
