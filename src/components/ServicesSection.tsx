import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2, ShieldCheck, Cpu, Smartphone, Database, Globe, Layers, Eye } from 'lucide-react';
import { servicesData } from '../data';
import { ServiceDetail } from '../types';

export default function ServicesSection() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('srv-web');

  const activeService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  return (
    <section id="layanan" className="py-24 bg-white border-t border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#000000] bg-neutral-50 px-4 py-1.5 rounded-full border border-neutral-200">
            Layanan Unggulan Perusahaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-neutral-950 tracking-[-0.03em] mt-5 leading-tight uppercase">
            Menembus Batas Digital dengan <br className="hidden sm:inline" />
            <span className="text-neutral-500 font-light">Kemampuan Rekayasa Handal</span>
          </h2>
          <p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Setiap lini solusi dikerjakan oleh tim ahli dengan standar pengerjaan kode terbaik, pengujian intensif, dan transparansi anggaran tanpa batas tersembunyi.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical tab list */}
          <div className="lg:col-span-5 space-y-3">
            {servicesData.map((service) => {
              const isActive = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? 'bg-neutral-50 border-neutral-950 shadow-none'
                      : 'bg-transparent border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-1 ${
                        isActive ? 'text-briefly-brand' : 'text-neutral-500'
                      }`}>
                        {service.badge}
                      </span>
                      <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium mt-1.5 leading-snug truncate max-w-md">
                        {service.shortDesc}
                      </p>
                    </div>
                    <ChevronRight className={`h-5 w-5 shrink-0 mt-1 transition-all duration-300 ${
                      isActive ? 'text-neutral-950 translate-x-1' : 'text-neutral-400 group-hover:text-neutral-600'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dedicated showcase detail screen */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200/90 shadow-[0_12px_44px_-10px_rgba(46,44,41,0.06)] overflow-hidden min-h-[500px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 flex flex-col h-full justify-between"
              >
                <div>
                  {/* Badge & Benefit label row */}
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-wider text-neutral-800 bg-neutral-100 uppercase border border-neutral-200 rounded-full">
                      {activeService.badge}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-briefly-brand uppercase tracking-wider flex items-center space-x-1">
                      <Layers className="h-3.5 w-3.5 mr-1" />
                      <span>{activeService.benefitWord}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-neutral-900 tracking-tight leading-tight">
                    {activeService.title}
                  </h3>
                  
                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans font-medium">
                    {activeService.longDesc}
                  </p>

                  <div className="mt-6 border-t border-b border-neutral-100 py-6">
                    <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-3">
                      Fitur Dan Cakupan Teknis
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {activeService.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2.5 text-xs text-neutral-700 leading-snug">
                          <CheckCircle2 className="h-4.5 w-4.5 text-briefly-brand shrink-0 mt-0.5" />
                          <span className="font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technical Stack layout and Graphics segment */}
                <div className="mt-6 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-100 bg-neutral-50 -mx-6 -mb-6 p-6">
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-neutral-900 uppercase tracking-wider mb-2">
                      Teknologi Pendukung Utama
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeService.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 text-[11px] font-mono font-semibold text-neutral-600 bg-white border border-neutral-200 rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative graphics to visualize the service category */}
                  <div className="shrink-0 flex items-center justify-center p-3.5 bg-neutral-900 rounded-2xl border border-neutral-800 min-w-[140px] text-white">
                    {activeService.graphicType === 'webapp' && (
                      <div className="flex flex-col items-center space-y-1.5 text-center">
                        <Globe className="h-5 w-5 text-briefly-brand animate-pulse" />
                        <span className="text-[10px] font-mono font-bold">PostgreSQL Sync</span>
                        <span className="text-[9px] font-mono text-emerald-400 font-bold">API v1.4 OK</span>
                      </div>
                    )}
                    {activeService.graphicType === 'mobileapp' && (
                      <div className="flex flex-col items-center space-y-1.5 text-center">
                        <Smartphone className="h-5 w-5 text-sky-400 animate-bounce" />
                        <span className="text-[10px] font-mono font-bold">Flutter Render</span>
                        <span className="text-[9px] font-mono text-emerald-400 font-bold">FPS 60.0 STABLE</span>
                      </div>
                    )}
                    {activeService.graphicType === 'cloudsystem' && (
                      <div className="flex flex-col items-center space-y-1.5 text-center">
                        <Database className="h-5 w-5 text-emerald-400" />
                        <span className="text-[10px] font-mono font-bold">Autoscale Active</span>
                        <span className="text-[9px] font-mono text-sky-400 font-bold">CPU LOAD 8.4%</span>
                      </div>
                    )}
                    {activeService.graphicType === 'consultancy' && (
                      <div className="flex flex-col items-center space-y-1.5 text-center">
                        <ShieldCheck className="h-5 w-5 text-briefly-brand" />
                        <span className="text-[10px] font-mono font-bold">Audit Complete</span>
                        <span className="text-[9px] font-mono text-emerald-400 font-bold">99.8% SECURITAS</span>
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
