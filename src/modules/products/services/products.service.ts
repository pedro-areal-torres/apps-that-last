import { MOCK_PRODUCTS } from '@modules/common/constants/mock-products';

import { Product } from '../types';

export const getProductById = async (id: string): Promise<Product | null> => {
  return new Promise((res) => {
    setTimeout(() => {
      const product = MOCK_PRODUCTS.find((p) => p.id === id);
      res(product ?? null);
    }, 300);
  });
};
