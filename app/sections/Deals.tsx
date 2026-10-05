'use client';

import { useEffect, useState } from 'react';
import DealCard from '../components/DealCard';
import { Deal } from '../lib/types';

export default function Deals() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/deals.json');
        const data = await res.json();
        setDeals(data.deals);
      } catch (err) {
        setDeals([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section id="deals" className="py-20 lg:py-28 bg-brand-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI-Recommended Live Deals</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fresh offers fetched and highlighted for you.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-400 py-12">Loading latest deals...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal, index) => (
              <DealCard key={index} deal={deal} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
