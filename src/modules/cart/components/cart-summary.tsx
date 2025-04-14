'use client';

import { formatPrice } from '@modules/common/utils/format-price';

import { useCart } from '../hooks/use-cart';

export const CartSummary = () => {
  const { total, state } = useCart();

  if (state.items.length === 0) {
    <div>Cart is empty</div>;
  }

  return (
    <div className='mt-4 border-t pt-4'>
      <div className='flex justify-between text-lg font-semibold'>
        <span>Total:</span>
        <span>{formatPrice(total)}</span>
      </div>
      <button className='mt-4 w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700'>
        Proceed to Checkout
      </button>
    </div>
  );
};
