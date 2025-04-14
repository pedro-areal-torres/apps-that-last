import { notFound } from 'next/navigation';

import { ProductPage } from '@modules/products/pages/product-page';
import { getProductById } from '@modules/products/services/products.service';

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  // Setup
  const product = await getProductById(params.id);

  // Guard
  if (!product) {
    return notFound();
  }

  // Markup
  return <ProductPage product={product} />;
}
