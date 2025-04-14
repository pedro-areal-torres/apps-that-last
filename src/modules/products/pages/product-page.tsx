import Image from 'next/image';
import React from 'react';

import { formatPrice } from '@modules/common/utils/format-price';

import { Product } from '../types';

interface Props {
  product: Product;
}

export const ProductPage = ({ product }: Props) => {
  const { name, price, stock, imageUrl, expirationDate } = product;

  return (
    <section className='mx-auto max-w-xl p-6'>
      <h1 className='mb-4 text-2xl font-bold'>{name}</h1>
      <div className='relative w-full'>
      <Image
        src={imageUrl}
        alt={name}
        width={600}
        height={400}
        className="object-cover rounded"
      />
      </div>
      <p className='mb-2 text-sm text-gray-500'>{formatPrice(price)}</p>
      <p className={`mb-4 ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
        {stock > 0 ? `In stock: ${stock}` : 'Out of stock'}
      </p>
      <p className='text-sm text-gray-400'>
        Expiration Date: {new Date(expirationDate).toLocaleDateString()}
      </p>
    </section>
  );
};
