import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DealDunia - Best Offers from Amazon, Flipkart & More',
  description: 'Discover top deals, discounts and cashback offers from Amazon, Flipkart, Blinkit, Zepto, JioMart and Reliance Digital.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
