import { bentoFeatures } from '../data';
import { Terminal, HardDrive, ShieldAlert, Cpu, Activity, CheckSquare } from 'lucide-react';

export default function BentoFeatures() {
  return (
    <section id="keunggulan" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-16 text-center sm:text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#000000] bg-neutral-50 px-4 py-1.5 rounded-full border border-neutral-200">
            Komitmen Kepuasan
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-neutral-950 tracking-[-0.03em] mt-5 leading-tight uppercase">
            Mengapa Memilih Layanan <br className="hidden sm:inline" />
            <span className="text-neutral-500 font-light">Informatika Kami?</span>
          </h2>
          <p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-2xl font-sans font-medium">
            Kami menjunjung tinggi integritas akad bisnis dalam naungan "Barokah" yang diwujudkan melalui hasil rekayasa kode optimal, kecepatan andal, serta audit siber tingkat korporasi.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {bentoFeatures.map((feature) => {
            const isLarge = feature.size === 'large';
            return (
              <div
                key={feature.id}
                className={`border border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-[#FFFFFF] hover:border-neutral-950 transition-all duration-300 relative group min-h-[320px] ${
                  isLarge ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                {/* Visual indicator top right */}
                <span className="absolute top-6 right-6 inline-flex items-center space-x-1.5 px-3 py-1 text-[10px] font-mono tracking-wider font-bold uppercase bg-neutral-50 hover:bg-neutral-100 rounded-full border border-neutral-200 text-neutral-900 transition-colors">
                  {feature.badge}
                </span>

                {/* Micro illustration or visual representation inside card */}
                <div className="flex-1 flex items-center justify-start mb-6">
                  {feature.illustrationType === 'code' && (
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 font-mono text-[10px] text-neutral-400 max-w-sm w-full shadow-inner select-none transition-transform duration-500 group-hover:scale-[1.02]">
                      <p className="text-emerald-400 font-bold">// 100% Hak Milik Source Code Bergaransi</p>
                      <p className="mt-1"><span className="text-pink-400">const</span> barokahApp = <span className="text-[#A2C764]">new</span> SystemEngine();</p>
                      <p className="pl-4">barokahApp.<span className="text-sky-300">applyCleanArchitecture</span>();</p>
                      <p className="pl-4">barokahApp.<span className="text-sky-300">assertNoVendorLockIn</span>(<span className="text-orange-400">true</span>);</p>
                    </div>
                  )}

                  {feature.illustrationType === 'nodes' && (
                    <div className="flex items-center space-x-3 select-none">
                      <div className="h-10 w-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center font-bold font-mono text-neutral-950 text-xs">A</div>
                      <div className="h-0.5 w-6 bg-neutral-300 relative">
                        <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-briefly-brand animate-ping" />
                      </div>
                      <div className="h-10 w-10 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-white text-xs font-mono font-bold">B</div>
                      <div className="h-0.5 w-6 bg-neutral-300" />
                      <div className="h-10 w-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center font-bold font-mono text-neutral-950 text-xs text-brand">C</div>
                    </div>
                  )}

                  {feature.illustrationType === 'shield' && (
                    <div className="flex items-center space-x-2.5 p-3 rounded-2xl border border-neutral-200/80 bg-white shadow-sm">
                      <div className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                        <ShieldAlert className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono font-bold text-neutral-800 uppercase tracking-tight">Active Firewall Shield</p>
                        <p className="text-[9px] font-mono text-emerald-600 font-bold">CSRF / SQL INJECTION DETECTED &amp; BLOCKED</p>
                      </div>
                    </div>
                  )}

                  {feature.illustrationType === 'chart' && (
                    <div className="w-full max-w-sm flex items-end space-x-1.5 h-16 pt-4 border-b border-neutral-200">
                      {[35, 52, 45, 63, 58, 70, 85, 99].map((h, i) => (
                        <div key={i} className="flex-1 bg-black rounded-t transition-all duration-500 group-hover:bg-briefly-brand" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Title & Content */}
                <div className="pt-4 border-t border-neutral-200 mt-4">
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-2 leading-relaxed">
                    {feature.subtitle}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
