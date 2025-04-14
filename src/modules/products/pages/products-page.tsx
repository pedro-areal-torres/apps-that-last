'use client';

import { ProductList } from '@modules/products/components/product-list';
import { useProducts } from '@modules/products/hooks/use-products';

const ProductsPage = () => {
  // Setup
  const { data: products, isLoading, isError } = useProducts();

  // Guard
  if (isLoading) {
    return <p>Loading products…</p>;
  }

  if (isError || !products) {
    return <p>Failed to load products.</p>;
  }

  // Markup
  return (
    <section className='p-6'>
      <h1 className='mb-4 text-2xl font-bold'>Available Products</h1>
      <ProductList products={products} />
    </section>
  );
};

export default ProductsPage;
