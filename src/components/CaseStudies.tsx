import { caseStudies } from '../data';
import { Smartphone, BarChart3, Database, Workflow, TrendingUp, Cpu, Calendar } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section id="studi-kasus" className="py-24 bg-white border-t border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#000000] bg-neutral-50 px-4 py-1.5 rounded-full border border-neutral-200">
            Kisah Sukses Klien Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-neutral-950 tracking-[-0.03em] mt-5 leading-tight uppercase">
            Transformasi Nyata <br className="hidden sm:inline" />
            <span className="text-neutral-500 font-light">Dengan Metrik Hasil Terukur</span>
          </h2>
          <p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Kami tidak hanya membangun program; kami bermitra erat untuk menghasilkan optimasi logistik, akselerasi keuangan, dan transparansi nirlaba yang berlipat ganda.
          </p>
        </div>

        {/* Case Studies grid */}
        <div className="space-y-8">
          {caseStudies.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-none hover:border-neutral-950 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Highlight strip on left hover */}
              <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-briefly-brand transition-all scale-y-0 group-hover:scale-y-100 duration-300" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Side: Story Details */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-4">
                  <div>
                    {/* Header meta */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-briefly-brand">
                        {project.clientName}
                      </span>
                      <span className="text-neutral-300">•</span>
                      <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest bg-neutral-50 px-2.5 py-0.5 rounded-full border border-neutral-200">
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-neutral-950 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Operational Features labels */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 text-[10px] font-mono text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-200 uppercase tracking-wider font-semibold">
                      <Calendar className="h-3.5 w-3.5 text-briefly-brand" />
                      <span>Selesai Tepat Waktu</span>
                    </span>
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 text-[10px] font-mono text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-200 uppercase tracking-wider font-semibold">
                      <Cpu className="h-3.5 w-3.5 text-briefly-brand" />
                      <span>Agile Scrum Metodologi</span>
                    </span>
                  </div>

                </div>

                {/* Right Side: Metrics display container reflecting style */}
                <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 rounded-2xl p-5 sm:p-6 grid grid-cols-1 gap-4">
                  <h4 className="text-[10px] font-mono font-bold text-neutral-900 uppercase tracking-widest mb-1">
                    Dampak Terukur Proyek
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
                    {project.impactMetrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col border-b last:border-0 border-neutral-100 lg:pb-3 last:pb-0">
                        <span className="text-xl sm:text-2xl font-extrabold font-sans text-neutral-950 tracking-tight leading-none block">
                          {metric.value}
                        </span>
                        <span className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider block mt-2 leading-none">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
