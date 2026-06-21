import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Mail, Building, User, FileText, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

export default function InquiryPlanner() {
  const [systemType, setSystemType] = useState<'web' | 'mobile' | 'cloud' | 'audit'>('web');
  const [screensCount, setScreensCount] = useState<number>(5);
  const [dbComplexity, setDbComplexity] = useState<'basic' | 'advanced' | 'enterprise'>('basic');
  const [hasAuth, setHasAuth] = useState<boolean>(true);
  const [isDdosShield, setIsDdosShield] = useState<boolean>(false);
  
  // Submission Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Fee calculation logic
  const calculateEstimate = () => {
    let basePrice = 25000000; // IDR 25 Million starting
    let baseDays = 25;

    if (systemType === 'mobile') {
      basePrice = 45000000;
      baseDays = 40;
    } else if (systemType === 'cloud') {
      basePrice = 30000000;
      baseDays = 30;
    } else if (systemType === 'audit') {
      basePrice = 15000000;
      baseDays = 15;
    }

    // Screens influence
    if (systemType === 'web' || systemType === 'mobile') {
      basePrice += (screensCount - 5) * 3000000;
      baseDays += (screensCount - 5) * 3;
    }

    // DB Complexity influence
    if (dbComplexity === 'advanced') {
      basePrice += 12000000;
      baseDays += 10;
    } else if (dbComplexity === 'enterprise') {
      basePrice += 35000000;
      baseDays += 20;
    }

    // Optional Features
    if (hasAuth) {
      basePrice += 5000000;
      baseDays += 4;
    }
    if (isDdosShield) {
      basePrice += 10000000;
      baseDays += 6;
    }

    return {
      price: basePrice.toLocaleString('id-ID'),
      days: baseDays
    };
  };

  const estimate = calculateEstimate();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Mohon isi nama lengkap dan alamat email Anda.');
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setNotes('');
  };

  return (
    <section id="rencana-kerja" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#000000] bg-neutral-50 px-4 py-1.5 rounded-full border border-neutral-200">
            Perencana Proyek Interaktif
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-neutral-950 tracking-[-0.03em] mt-5 leading-tight uppercase">
            Rancang Sistem Kerja &amp; <br className="hidden sm:inline" />
            <span className="text-neutral-500 font-light">Dapatkan Estimasi Skema Riil</span>
          </h2>
          <p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Gunakan kalkulator konfigurasi kami di bawah untuk menyesuaikan tingkat kerumitan sistem bisnis Anda dan ajukan kemitraan langsung.
          </p>
        </div>

        {/* Dynamic Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Interactive choices settings */}
          <div className="lg:col-span-7 bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Type selector list */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-950 block mb-3">
                  1. Pilih Jenis Solusi Digital
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'web', name: 'Web Application' },
                    { id: 'mobile', name: 'Mobile App (iOS/And)' },
                    { id: 'cloud', name: 'Cloud & Infrastructure' },
                    { id: 'audit', name: 'IT Security Audit' }
                  ].map((sys) => (
                    <button
                      key={sys.id}
                      onClick={() => setSystemType(sys.id as any)}
                      className={`text-[10px] font-bold py-3.5 px-3 rounded-2xl border-2 text-center uppercase tracking-wider transition-all duration-200 ${
                        systemType === sys.id
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-white border-neutral-200 text-neutral-750 hover:border-neutral-400'
                      }`}
                    >
                      {sys.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Screens control slider */}
              {(systemType === 'web' || systemType === 'mobile') && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-950">
                      2. Jumlah Tampilan Panel (Screen)
                    </label>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-neutral-100 text-neutral-950 rounded-lg">
                      {screensCount} Tampilan
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="5"
                    value={screensCount}
                    onChange={(e) => setScreensCount(parseInt(e.target.value))}
                    className="w-full accent-black bg-neutral-100 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-neutral-400 mt-1 uppercase tracking-wider">
                    <span>5 screen (Dashboard basic)</span>
                    <span>40 screen (Enterprise scale)</span>
                  </div>
                </div>
              )}

              {/* Database tier configuration */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-950 block mb-3">
                  3. Tingkat Kerumitan Database &amp; Sinkronisasi
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'basic', label: 'Standar', desc: 'Relational DB' },
                    { id: 'advanced', label: 'Lanjutan', desc: 'Cluster Sync' },
                    { id: 'enterprise', label: 'Skala Global', desc: 'Multi-Region DB' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setDbComplexity(tier.id as any)}
                      className={`p-3.5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all duration-200 ${
                        dbComplexity === tier.id
                          ? 'bg-black text-white border-black'
                          : 'bg-white border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider block">{tier.label}</span>
                      <span className={`text-[9px] font-mono block mt-1.5 ${
                        dbComplexity === tier.id ? 'text-neutral-300' : 'text-neutral-400'
                      }`}>{tier.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Toggles checkboxes */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-950 block mb-2.5">
                  4. Fitur Pengamanan Tambahan
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center space-x-3 cursor-pointer p-3 hover:bg-neutral-50 border border-neutral-200/50 rounded-2xl transition-all">
                    <input
                      type="checkbox"
                      checked={hasAuth}
                      onChange={(e) => setHasAuth(e.target.checked)}
                      className="rounded border-neutral-300 text-black focus:ring-0 w-4 h-4 accent-black"
                    />
                    <div>
                      <span className="text-xs font-bold text-neutral-900 block leading-tight">Keamanan Multi-Factor (MFA) &amp; Enkripsi User</span>
                      <span className="text-[9px] font-mono text-neutral-400 block mt-0.5 uppercase tracking-wider">Penetapan token rahasia standar perbankan</span>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer p-3 hover:bg-neutral-50 border border-neutral-200/50 rounded-2xl transition-all">
                    <input
                      type="checkbox"
                      checked={isDdosShield}
                      onChange={(e) => setIsDdosShield(e.target.checked)}
                      className="rounded border-neutral-300 text-black focus:ring-0 w-4 h-4 accent-black"
                    />
                    <div>
                      <span className="text-xs font-bold text-neutral-900 block leading-tight">Perisai Mitigasi DDOS (Active Shield)</span>
                      <span className="text-[9px] font-mono text-neutral-400 block mt-0.5 uppercase tracking-wider">Auto-scale infrastruktur multi-zone otomatis</span>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Price estimation box at bottom */}
            <div className="mt-8 border-t border-neutral-200 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4 bg-neutral-950 text-white rounded-2xl p-5">
                <div>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-neutral-400 font-mono">
                    Estimasi Kasar Investasi
                  </span>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-briefly-brand block mt-0.5">
                    Rp {estimate.price}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-neutral-400 font-mono block">
                    Target Penyelesaian
                  </span>
                  <span className="text-sm font-bold text-neutral-100 mt-0.5 block font-mono">
                    ~{estimate.days} HARI KERJA
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Custom submission form to Barokah Solusindo */}
          <div className="lg:col-span-5 bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4 flex flex-col h-full justify-between"
                >
                  <div className="space-y-4">
                    <div className="border-b border-neutral-150 pb-3">
                      <h4 className="text-[11px] font-mono font-bold text-briefly-brand uppercase tracking-widest">Kolaborasi Proyek</h4>
                      <h3 className="text-base font-extrabold text-neutral-950 tracking-tight mt-1 uppercase">Kunci Kerja Sekarang</h3>
                      <p className="text-[11px] text-neutral-500 leading-normal mt-1">
                        Kirimkan rincian konfigurasi ini ke tim technical analyst kami untuk dijadwalkan sesi video-call peninjauan komprehensif.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Name input */}
                      <div>
                        <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-950 block mb-1.5">
                          Nama Lengkap Anda *
                        </label>
                        <div className="relative font-sans">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-450" />
                          <input
                            type="text"
                            required
                            placeholder="Ahmad Fauzan"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full text-xs py-3.5 pl-10 pr-4 bg-neutral-50 hover:bg-neutral-100 focus:bg-white focus:outline-none border-2 border-neutral-200 focus:border-neutral-950 rounded-xl transition-all font-sans font-semibold text-neutral-900"
                          />
                        </div>
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-950 block mb-1.5">
                          Alamat Email Kantor/Pribadi *
                        </label>
                        <div className="relative font-sans">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-450" />
                          <input
                            type="email"
                            required
                            placeholder="fauzan@perusahaan.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full text-xs py-3.5 pl-10 pr-4 bg-neutral-50 hover:bg-neutral-100 focus:bg-white focus:outline-none border-2 border-neutral-200 focus:border-neutral-950 rounded-xl transition-all font-sans font-semibold text-neutral-900"
                          />
                        </div>
                      </div>

                      {/* Company input */}
                      <div>
                        <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-950 block mb-1.5">
                          Nama Instansi / Perusahaan
                        </label>
                        <div className="relative font-sans">
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-450" />
                          <input
                            type="text"
                            placeholder="PT. Sinergi Pangan Nusantara"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full text-xs py-3.5 pl-10 pr-4 bg-neutral-50 hover:bg-neutral-100 focus:bg-white focus:outline-none border-2 border-neutral-200 focus:border-neutral-950 rounded-xl transition-all font-sans font-semibold text-neutral-900"
                          />
                        </div>
                      </div>

                      {/* Notes input */}
                      <div>
                        <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-950 block mb-1.5">
                          Catatan / Kebutuhan Kustom Lainnya
                        </label>
                        <div className="relative font-sans">
                          <FileText className="absolute left-3.5 top-3.5 h-3.5 w-3.5 text-neutral-450" />
                          <textarea
                            rows={3}
                            placeholder="Tulis detail integrasi khusus di sini..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full text-xs py-3.5 pl-10 pr-4 bg-neutral-50 hover:bg-neutral-100 focus:bg-white focus:outline-none border-2 border-neutral-200 focus:border-neutral-950 rounded-xl transition-all resize-none font-sans font-semibold text-neutral-900"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-full bg-black text-white font-bold text-xs hover:bg-neutral-900 shadow-sm transition-all duration-200 group mt-4 hover:shadow-md active:scale-95 uppercase tracking-widest font-mono"
                  >
                    <span>Kirim Pengajuan Kolaborasi</span>
                    <ArrowRight className="h-4.5 w-4.5 transform group-hover:translate-x-1 transition-transform text-briefly-brand" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="submission-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full space-y-6 py-12"
                >
                  <div className="p-4 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200 shadow-inner">
                    <CheckCircle2 className="h-10 w-10 stroke-[2] animate-bounce text-briefly-brand" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-neutral-950 tracking-tight uppercase">Pengajuan Kolaborasi Terkirim!</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-2.5 max-w-sm mx-auto font-sans font-medium">
                      Terima kasih Bapak/Ibu <strong className="text-neutral-800 font-bold">{name}</strong>. Tim Technical Analyst PT Barokah Informatika Solusindo telah menerima kalkulasi sistem Anda dengan estimasi <strong>Rp {estimate.price}</strong>. Kami akan menghubungi Anda kembali via email dalam waktu 1x24 jam kerja.
                    </p>
                  </div>
                  
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-600 text-[10px] font-bold hover:bg-neutral-100 transition-all active:scale-95 uppercase tracking-wider font-mono"
                  >
                    <RotateCcw className="h-4 w-4 text-briefly-brand" />
                    <span>Ubah Rencana Baru</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
