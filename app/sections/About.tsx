export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Shop Through DealDunia?</h2>
        <p className="text-lg text-gray-400 leading-relaxed mb-10">
          We bring the best offers from India&apos;s top online stores into one clean, AI-assisted experience. Click any deal to unlock discounts, cashback, and exclusive affiliate rewards.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Best Stores', desc: 'Only trusted Indian marketplaces.' },
            { title: 'Live Deals', desc: 'Updated offers in real time.' },
            { title: 'AI Curation', desc: 'Smart summaries for quick decisions.' },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
