'use client';

import { Button } from '@modules/common/components/button';
import { formatPrice } from '@modules/common/utils/format-price';

import { useCart } from '../hooks/use-cart';
import { CartItem as Item } from '../types';

type Props = {
  item: Item;
};

export const CartItem = ({ item }: Props) => {
  const { dispatch } = useCart();

  const increase = () =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } });

  const decrease = () =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } });

  const remove = () => dispatch({ type: 'REMOVE_ITEM', payload: item.id });

  return (
    <div className='flex justify-between border-b py-4'>
      <div>
        <h3 className='font-medium'>{item.name}</h3>
        <p className='text-sm text-gray-500'>{formatPrice(item.price)}</p>
        <p className='text-xs text-gray-400'>In stock: {item.stock}</p>
      </div>
      <div className='flex items-center gap-2'>
        <Button onClick={decrease} disabled={item.quantity <= 1}>
          -
        </Button>
        <span>{item.quantity}</span>
        <Button onClick={increase} disabled={item.quantity >= item.stock}>
          +
        </Button>
        <Button className='ml-4 text-red-500' onClick={remove}>
          Remove
        </Button>
      </div>
    </div>
  );
};
