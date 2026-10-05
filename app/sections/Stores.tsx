import StoreCard from '../components/StoreCard';
import { Store } from '../lib/types';

const stores: Store[] = [
  {
    name: 'Amazon',
    description: 'Electronics, fashion, home appliances, and daily essentials at great prices.',
    link: 'https://www.amazon.in?tag=YOUR_AFFILIATE_ID',
  },
  {
    name: 'Flipkart',
    description: 'Mobiles, fashion, electronics, and groceries with fast delivery.',
    link: 'https://www.flipkart.com?affid=YOUR_AFFILIATE_ID',
  },
  {
    name: 'Blinkit',
    description: 'Quick 10-minute grocery delivery for your daily needs.',
    link: 'https://www.blinkit.com?referrer=YOUR_AFFILIATE_ID',
  },
  {
    name: 'Zepto',
    description: 'Fast grocery and essentials delivery at your doorstep in minutes.',
    link: 'https://www.zeptonow.com?referral=YOUR_AFFILIATE_ID',
  },
  {
    name: 'JioMart',
    description: 'Groceries, household items, and fashion at discounted prices.',
    link: 'https://www.jiomart.com?aff=YOUR_AFFILIATE_ID',
  },
  {
    name: 'Reliance Digital',
    description: 'Latest electronics, gadgets, and appliances from trusted brands.',
    link: 'https://www.reliancedigital.in?affiliate=YOUR_AFFILIATE_ID',
  },
];

export default function Stores() {
  return (
    <section id="stores" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Shop from Your Favorite Stores</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted platforms handpicked for the best savings.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <StoreCard key={store.name} store={store} />
          ))}
        </div>
      </div>
    </section>
  );
}
