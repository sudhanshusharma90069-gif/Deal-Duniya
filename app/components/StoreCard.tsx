import { Store } from '../lib/types';

export default function StoreCard({ store }: { store: Store }) {
  const colors: Record<string, string> = {
    Amazon: 'bg-[#ff9900]',
    Flipkart: 'bg-[#2874f0]',
    Blinkit: 'bg-[#f7c600] text-brand-900',
    Zepto: 'bg-[#6c3cf7]',
    JioMart: 'bg-[#0078ad]',
    'Reliance Digital': 'bg-[#e71d1d]',
  };

  const firstLetter = store.name[0];

  return (
    <a
      href={store.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 card-hover overflow-hidden"
    >
      <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg mb-4 ${
            colors[store.name] || 'bg-brand-600'
          }`}
        >
          {firstLetter}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{store.name}</h3>
        <p className="text-sm text-gray-400 mb-5 leading-relaxed">{store.description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent group-hover:translate-x-1 transition-transform">
          Shop Now
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}
