import { testimonials } from '../data';
import { Star, Quote, Heart } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white border-t border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-center sm:text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#000000] bg-neutral-50 px-4 py-1.5 rounded-full border border-neutral-200">
            Amanah &amp; Pembuktian Nyata
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-neutral-950 tracking-[-0.03em] mt-5 leading-tight uppercase">
            Apa Yang Klien Katakan <br />
            <span className="text-neutral-500 font-light">Tentang Kejujuran Kerja Kami?</span>
          </h2>
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-neutral-200 rounded-3xl p-6 flex flex-col justify-between hover:border-neutral-950 transition-all duration-300"
            >
              <div>
                {/* Rating row of brand stars */}
                <div className="flex items-center space-x-1 mb-4 text-briefly-brand">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current stroke-current" />
                  ))}
                </div>

                {/* Body Content quotes */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans font-medium italic">
                  "{test.content}"
                </p>
              </div>

              {/* Author row */}
              <div className="flex justify-between items-center pt-6 border-t border-neutral-200 mt-6">
                <div>
                  <span className="text-xs sm:text-sm font-extrabold text-neutral-950 block tracking-tight">
                    {test.authorName}
                  </span>
                  <span className="text-[10px] sm:text-11px font-mono text-neutral-400 block mt-0.5 uppercase tracking-wider">
                    {test.role}, <strong className="text-neutral-800 font-bold">{test.companyName}</strong>
                  </span>
                </div>
                
                <div className="p-2 bg-neutral-50 border border-neutral-200 rounded-full text-neutral-400">
                  <Quote className="h-4 w-4 transform rotate-180" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call-out beneath review cards */}
        <div className="mt-14 p-6 rounded-3xl border border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3.5">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans font-medium">
              Kami selalu menjaga komitmen kerahasiaan data (NDA) dengan semua instansi mitra kami.
            </p>
          </div>
          <span className="text-[10px] items-center space-x-1.5 px-3 py-1.5 font-mono uppercase tracking-widest text-neutral-900 font-bold bg-white border border-neutral-200 rounded-full shrink-0 flex">
            <Heart className="h-3 w-3 text-briefly-brand" />
            <span>Garansi Amanah</span>
          </span>
        </div>

      </div>
    </section>
  );
}
