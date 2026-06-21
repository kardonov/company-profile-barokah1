import { ArrowRight, Star, Terminal, Zap, Compass } from 'lucide-react';
import InteractiveShowcase from './InteractiveShowcase';

export default function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById('rencana-kerja');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('layanan');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-white">
      
      {/* Delicate thin grid separator line for minimalist artistic look */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#EAEAEA]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Modern Top Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 shadow-none mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-briefly-brand" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#000000] block">
            Partner Digitalisasi Terbaik Klien Anda
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-briefly-brand" />
        </div>

        {/* Captivating Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold text-neutral-950 tracking-[-0.04em] leading-[100%] max-w-4xl mx-auto uppercase">
          Membangun Sistem Digital Yang <br className="hidden sm:inline" />
          <span className="text-neutral-500 font-light">
            Amanah, Bersih,
          </span>{' '}
          &amp; Berdaya Taraf Tinggi
        </h1>

        {/* Informative Subtitle */}
        <p className="mt-8 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto font-sans font-medium">
          PT. Barokah Informatika Solusindo menyediakan infrastruktur IT transparan dan pengembangan perangkat lunak kustom berdaya taraf tinggi demi mempercepat transformasi bisnis Anda.
        </p>

        {/* Primary Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={scrollToPricing}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 group shadow-sm hover:bg-neutral-900"
          >
            <span>Konsultasi Proyek Gratis</span>
            <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform text-briefly-brand" />
          </button>
          
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-white text-neutral-950 font-bold text-xs uppercase tracking-widest border border-neutral-900 transition-all duration-200 active:scale-95 hover:bg-neutral-50 shadow-sm"
          >
            <Compass className="h-4 w-4" />
            <span>Pelajari Layanan Kami</span>
          </button>
        </div>

        {/* Supporting Ratings Trust Text */}
        <div className="mt-10 flex justify-center items-center space-x-6 text-neutral-400 font-mono text-[9px] uppercase tracking-widest select-none">
          <div className="flex items-center space-x-1 text-[#FF3B30]">
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
          </div>
          <span className="text-neutral-950 font-bold">Kejujuran Teruji (Amanah)</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline text-neutral-950 font-bold">100% SOURCODE MILIK ANDA</span>
        </div>

        {/* Interactive Workspace Mockup Panel */}
        <InteractiveShowcase />

      </div>
    </section>
  );
}
