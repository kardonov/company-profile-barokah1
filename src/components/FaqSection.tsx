import { useState } from 'react';
import { faqItems } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#000000] bg-neutral-50 px-4 py-1.5 rounded-full border border-neutral-200 font-sans">
            Pusat Informasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-neutral-950 tracking-[-0.03em] mt-5 leading-tight uppercase">
            Jawaban Pertanyaan <br />
            <span className="text-neutral-500 font-light">Yang Sering Diajukan</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xl mx-auto font-sans font-medium">
            Segala rincian tentang kontrak kerja, garansi bug, hak transfer kekayaan intelektual, dan kelancaran alur kerja kami jabarkan lengkap di bawah ini.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border rounded-2xl overflow-hidden transition-all duration-300 border-neutral-200 hover:border-neutral-950"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[#FAF9F5]/40 focus:outline-none"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="h-5 w-5 text-briefly-brand shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight leading-tight">
                      {item.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="h-4.5 w-4.5 text-neutral-900 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4.5 w-4.5 text-neutral-400 shrink-0" />
                  )}
                </button>

                {/* Smooth visual height change simulated using class conditional */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? 'max-h-[300px] border-t border-neutral-150' : 'max-h-0'
                }`}>
                  <p className="p-5 text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-sans font-medium">
                     {item.answer}
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
