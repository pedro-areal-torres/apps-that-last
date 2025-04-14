import { useQuery } from '@tanstack/react-query';

import { MOCK_PRODUCTS } from '@modules/common/constants/mock-products';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => MOCK_PRODUCTS,
  });
};
