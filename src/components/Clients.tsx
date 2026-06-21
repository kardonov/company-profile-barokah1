import { Sparkles, Building2, Terminal, ShieldAlert, Cpu, HeartHandshake, CloudLightning } from 'lucide-react';

export default function Clients() {
  const brandList = [
    { name: 'PT. Pangan Nusantara', icon: Building2 },
    { name: 'Sinergi Finansial', icon: Terminal },
    { name: 'Amal Mulia Foundation', icon: HeartHandshake },
    { name: 'Global Logistics Ind.', icon: CloudLightning },
    { name: 'Amanah Syariah Jaya', icon: CPU },
    { name: 'Barokah Retail Group', icon: Sparkles },
  ];

  // Double the list for infinite scroll simulation
  const scrollingBrands = [...brandList, ...brandList, ...brandList];

  return (
    <section className="py-12 border-t border-b border-neutral-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center font-mono text-[10px] uppercase tracking-widest text-neutral-900 font-bold">
          Amanah dipercaya oleh berbagai sektor industri di Indonesia
        </p>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        {/* Soft edge blur overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-briefly-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-briefly-bg to-transparent z-10 pointer-events-none" />

        {/* Scrolling Ticker track */}
        <div className="flex space-x-12 whitespace-nowrap animate-infinite-scroll py-2">
          {scrollingBrands.map((brand, idx) => {
            const IconComponent = brand.icon;
            return (
              <div
                key={`${brand.name}-${idx}`}
                className="flex items-center space-x-3 text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              >
                <div className="p-1.5 bg-white/60 border border-neutral-200/50 rounded-lg">
                  <IconComponent className="h-4 w-4 text-neutral-600" />
                </div>
                <span className="font-sans font-semibold text-sm tracking-tight text-neutral-600">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Temporary custom component for CPU icon since Lucide imports require capitalized or specific items
function CPU({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  );
}
