import type { Currency } from '@modules/common/types';

export const formatPrice = (amount: number, currency: Currency = 'EUR') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};
