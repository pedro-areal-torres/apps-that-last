import type { Metadata } from 'next';

import { QueryProvider } from '@lib/query-client';
import { CartProvider } from '@modules/cart/context/cart-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Apps that last',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <QueryProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
