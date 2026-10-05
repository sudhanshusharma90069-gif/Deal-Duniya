import { Deal } from '../lib/types';

export default function DealCard({ deal }: { deal: Deal }) {
  const colors: Record<string, string> = {
    Amazon: 'border-l-[#ff9900]',
    Flipkart: 'border-l-[#2874f0]',
    Blinkit: 'border-l-[#f7c600]',
    Zepto: 'border-l-[#6c3cf7]',
    JioMart: 'border-l-[#0078ad]',
    'Reliance Digital': 'border-l-[#e71d1d]',
  };

  return (
    <div
      className={`relative p-6 rounded-2xl bg-brand-800/50 border border-white/10 border-l-4 ${colors[deal.store] || 'border-l-brand-accent'} card-hover`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-300">{deal.store}</span>
        <span className="px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold">
          {deal.discount}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 leading-snug">{deal.title}</h3>
      <p className="text-sm text-gray-400 mb-5 leading-relaxed">{deal.ai_summary}</p>
      <a
        href={deal.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-lg bg-white text-brand-900 font-semibold hover:bg-brand-accent-hover transition-colors"
      >
        Grab Deal
      </a>
    </div>
  );
}
