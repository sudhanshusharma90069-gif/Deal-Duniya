export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <p className="text-white font-bold text-xl mb-2">
          Deal<span className="text-brand-accent">Dunia</span>
        </p>
        <p className="text-sm text-gray-500 mb-4">
          &copy; {new Date().getFullYear()} DealDunia. All rights reserved.
        </p>
        <p className="text-xs text-gray-600">
          This website contains affiliate links. We may earn a commission when you shop through our links.
        </p>
      </div>
    </footer>
  );
}
