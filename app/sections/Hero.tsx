export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 hero-glow overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          AI-powered deal recommendations
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Best Offers from <br className="hidden sm:block" />
          <span className="gradient-text">India&apos;s Top Stores</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
          Save big on every purchase. We curate top deals from Amazon, Flipkart, Blinkit, Zepto, JioMart, and Reliance Digital.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#deals"
            className="px-8 py-4 rounded-xl bg-brand-accent text-brand-900 font-bold text-lg hover:bg-brand-accent-hover transition-all hover:scale-105"
          >
            Explore Live Deals
          </a>
          <a
            href="#stores"
            className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
          >
            Browse Stores
          </a>
        </div>
      </div>
    </section>
  );
}
