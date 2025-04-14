import Image from 'next/image';
import Link from 'next/link';

import { useCart } from '@modules/cart/hooks/use-cart';
import { Button } from '@modules/common/components/button';
import { ROUTES } from '@modules/common/constants/routes';
import { formatPrice } from '@modules/common/utils/format-price';
import { Product } from '@modules/products/types';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { dispatch } = useCart();
  const {id, name, price, stock, imageUrl} = product;

  const isOutOfStock = stock === 0;

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { id, name, price, stock } });
  };

  return (
    <div className='rounded border p-4 shadow-sm'>
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={200}
        className='mb-2 h-40 w-full object-cover'
      />
      <h3 className='font-semibold'>{name}</h3>
      <p className='text-sm text-gray-500'>{formatPrice(price)}</p>
      <p className={`mt-1 text-sm ${isOutOfStock ? 'text-red-600' : 'text-green-600'}`}>
        {isOutOfStock ? 'Out of stock' : 'In stock'}
      </p>

      <Button
        className='mt-3 w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50'
        disabled={isOutOfStock}
        onClick={addToCart}
      >
        Add to Cart
      </Button>
      <Link href={ROUTES.PRODUCT_DETAILS(id)}>View details</Link>
    </div>
  );
};
