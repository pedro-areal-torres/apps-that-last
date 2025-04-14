export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

export type CartState = {
  items: CartItem[];
};

export type AddToCartPayload = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export type UpdateQuantityPayload = {
  id: string;
  quantity: number;
};
