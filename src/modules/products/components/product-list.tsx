import { ProductCard } from '@modules/products/components/product-card';
import { Product } from '@modules/products/types';

type Props = {
  products: Product[];
};

export const ProductList = ({ products }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};
