'use client';

import { CartItem } from '@modules/cart/components/cart-item';
import { CartSummary } from '@modules/cart/components/cart-summary';
import { useCart } from '@modules/cart/hooks/use-cart';

const CartPage = () => {
  const { state } = useCart();
  const hasItems = state.items.length > 0;

  return (
    <section className='mx-auto max-w-3xl p-6'>
      <h1 className='mb-4 text-2xl font-bold'>Your Cart</h1>
      {hasItems ? (
        <>
          {state.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <CartSummary />
        </>
      ) : (
        <p className='text-gray-500'>Your cart is empty.</p>
      )}
    </section>
  );
};

export default CartPage;
