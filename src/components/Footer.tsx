import { Code2, Heart, Mail, MapPin, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo Brand Segment */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="h-7 w-7 bg-briefly-brand text-white font-mono font-extrabold flex items-center justify-center rounded-lg leading-none text-sm select-none border border-neutral-950">
                B
              </span>
              <span className="font-sans font-extrabold text-white tracking-[-0.038em] uppercase text-sm leading-none flex flex-col pt-0.5">
                BAROKAH
                <span className="text-[10px] text-briefly-brand tracking-[0.22em] font-mono font-extrabold -mt-0.5 ml-0.5">INF.</span>
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Penyedia solusi rekayasa teknologi informasi dan konsultasi perangkat lunak berstandar internasional yang menerapkan dedikasi, kejujuran, dan keadilan dalam naungan barokah akad bersama.
            </p>

            {/* Registration detail tag */}
            <div className="border border-neutral-800 bg-neutral-900/60 rounded-xl p-3 inline-block">
              <span className="text-[10px] font-mono text-neutral-400 block tracking-tight uppercase">
                Legalitas Badan Hukum Indonesia
              </span>
              <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">
                NIB: 1209230045231 | AHU-0014232.AH.01.01
              </span>
            </div>
          </div>

          {/* Location details split */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-bold mb-3">
              Kantor Utama &amp; Kontak
            </h4>
            
            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-briefly-brand shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Menara Imperium Lt. 18, Kav. 1, Jl. H. R. Rasuna Said, Guntur, Setiabudi, Jakarta Selatan, DKI Jakarta 12980
                </span>
              </li>

              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-briefly-brand shrink-0" />
                <a href="mailto:info@barokah-info.id" className="hover:text-briefly-brand transition-colors font-mono">
                  info@barokah-info.id
                </a>
              </li>

              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-briefly-brand shrink-0" />
                <a href="tel:+62215200145" className="hover:text-briefly-brand transition-colors font-mono">
                  +62 (21) 5200-145 (Jam Kerja)
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Quick action split */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-bold mb-3">
              Kanal Sosial
            </h4>
            <div className="flex space-x-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl text-neutral-400 hover:text-white transition-all hover:scale-105"
              >
                <Github className="h-4.5 w-4.5" />
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl text-neutral-400 hover:text-white transition-all hover:scale-105"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>

              <a 
                href="https://wa.me/62812345678" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl text-neutral-400 hover:text-white transition-all hover:scale-105"
              >
                <MessageSquare className="h-4.5 w-4.5 text-emerald-500" />
              </a>
            </div>

            <p className="text-[10px] text-neutral-500 leading-normal font-sans font-medium">
              Butuh penyesuaian khusus atau proposal penawaran formal? Silakan hubungi kami via email resmi perusahaan.
            </p>
          </div>

        </div>

        {/* Legal Disclaimer Sub row */}
        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-500 font-mono gap-4">
          <p>© {currentYear} PT. Barokah Informatika Solusindo. Hak Cipta Dilindungi.</p>
          <p className="flex items-center space-x-1">
            <span>Dibuat dengan</span>
            <Heart className="h-3 w-3 text-briefly-brand fill-current animate-pulse" />
            <span>untuk Kesuksesan Bisnis Indonesia</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
