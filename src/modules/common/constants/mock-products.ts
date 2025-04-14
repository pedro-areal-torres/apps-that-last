import { Product } from '@modules/products/types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Milk',
    price: 1.99,
    stock: 10,
    expirationDate: new Date(Date.now() + 2 * 86400000).toISOString(),
    imageUrl: '/images/milk.jpg',
  },
  {
    id: '2',
    name: 'Bread',
    price: 0.99,
    stock: 0,
    expirationDate: new Date(Date.now() + 5 * 86400000).toISOString(),
    imageUrl: '/images/bread.jpg',
  },
];
