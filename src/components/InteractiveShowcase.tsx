import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, BarChart3, Database, Code, CheckCircle, RefreshCw, Cpu, Activity, Server } from 'lucide-react';

type TabType = 'architecture' | 'dashboard' | 'security';

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>('architecture');
  const [isCompiling, setIsCompiling] = useState(false);
  const [buildTime, setBuildTime] = useState('0.14s');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    'Initializing Barokah Core Compiler v4.2...',
    'Loading enterprise system dependencies... OK',
    'Resolving PostgreSQL transactional isolation level... OK'
  ]);

  const triggerOptimization = () => {
    setIsCompiling(true);
    setConsoleLogs(prev => [...prev, 'Starting hot-reload bundle compiler...']);
    setTimeout(() => {
      setIsCompiling(false);
      setBuildTime((Math.random() * 0.05 + 0.08).toFixed(2) + 's');
      setConsoleLogs(prev => [
        ...prev,
        'Successfully optimized bundle assets!',
        `Bundle size: 142.4 KB (-64% optimized)`,
        `Optimization completed in ${buildTime}`
      ]);
    }, 1200);
  };

  useEffect(() => {
    if (activeTab === 'architecture') {
      const timer = setTimeout(() => {
        setConsoleLogs(prev => [
          ...prev,
          'Active system monitor listening on port 3000...'
        ]);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  return (
    <div id="tentang-kami" className="w-full max-w-5xl mx-auto mt-16 px-4">
      
      {/* Selector Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 bg-neutral-200/50 hover:bg-neutral-200/70 border border-neutral-300/30 rounded-full transition-all">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center space-x-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full tracking-tight transition-all duration-300 ${
              activeTab === 'architecture'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            <Code className="h-4 w-4" />
            <span>Arsitektur Sistem</span>
          </button>
          
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center space-x-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full tracking-tight transition-all duration-300 ${
              activeTab === 'dashboard'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            <BarChart3 className="h-4 w-4" />
            <span>Dasbor Real-Time</span>
          </button>
          
          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center space-x-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full tracking-tight transition-all duration-300 ${
              activeTab === 'security'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            <Shield className="h-4 w-4" />
            <span>Verifikasi Keamanan</span>
          </button>
        </div>
      </div>

      {/* Main Browser Mockup Container */}
      <div className="bg-white border border-neutral-200 shadow-[0_24px_68px_-20px_rgba(46,44,41,0.15)] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_24px_80px_-15px_rgba(46,44,41,0.2)]">
        
        {/* Browser Top Bar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-200/60 bg-[#FAF9F5]">
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-100 border border-red-300" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-100 border border-yellow-300" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-100 border border-green-300" />
          </div>
          
          <div className="flex items-center space-x-1.5 px-4 py-1 bg-white border border-neutral-200 rounded-lg max-w-sm w-full md:w-64">
            <Server className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
            <span className="text-[11px] font-mono font-medium text-neutral-500 truncate select-none">
              v4.barokah-info.id/monitor
            </span>
          </div>

          <div className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2.5 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold font-mono tracking-wider uppercase">Live</span>
          </div>
        </div>

        {/* Browser Core Stage Workspace */}
        <div className="p-6 md:p-8 min-h-[440px] bg-[#FDFDFB]">
          <AnimatePresence mode="wait">
            
            {/* === TAB 1: ARCHITECTURE === */}
            {activeTab === 'architecture' && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                {/* Left Panel: Code Compiler */}
                <div className="lg:col-span-7 flex flex-col space-y-4">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center space-x-2">
                      <Terminal className="h-4.5 w-4.5 text-neutral-600" />
                      <span className="text-sm font-bold tracking-tight text-neutral-800">
                        Penyusun Kode Otomatis (Optimizer Engine)
                      </span>
                    </div>
                    <button
                      onClick={triggerOptimization}
                      disabled={isCompiling}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs text-neutral-700 bg-[#E5DFD3]/40 border border-neutral-300 hover:bg-[#E5DFD3]/85 rounded-full transition-all disabled:opacity-50"
                    >
                      <RefreshCw className={`h-3.5 w-3.5 ${isCompiling ? 'animate-spin' : ''}`} />
                      <span>{isCompiling ? 'Mengoptimasi...' : 'Kompilasi Ulang'}</span>
                    </button>
                  </div>

                  <div className="bg-[#1A1918] text-neutral-100 rounded-2xl p-4 font-mono text-[11px] leading-relaxed shadow-inner border border-neutral-800/80 min-h-[220px] flex flex-col justify-between">
                    <div className="space-y-1.5 select-none opacity-90">
                      <p className="text-[#8c8273]">// Desain Arsitektur PT. Barokah Informatika Solusindo</p>
                      <p>
                        <span className="text-amber-400">import</span> {'{ client, database }'} <span className="text-amber-400">from</span> <span className="text-[#A2C764]">"@barokah/solusi-core"</span>;
                      </p>
                      <p>
                        <span className="text-amber-400">export async function</span> <span className="text-orange-400">grupSistemAmanah</span>() {'{'}
                      </p>
                      <p className="pl-4">
                        <span className="text-amber-400">const</span> opt = <span className="text-purple-400">await</span> client.<span className="text-sky-300">koneksi</span>({'{'}
                      </p>
                      <p className="pl-8 text-[#A0A0A0]">transaksiIsolasi: <span className="text-[#64B5F6]">"SERIALIZABLE"</span>,</p>
                      <p className="pl-8 text-[#A0A0A0]">redundansiSkala: <span className="text-[#22C55E]">"Multi-Zone"</span>,</p>
                      <p className="pl-8 text-[#A0A0A0]">keamananBerlapis: <span className="text-rose-400">true</span></p>
                      <p className="pl-4">{'});'}</p>
                      <p className="pl-4 text-[#8CFFB1]">return opt.optimasi({'{'} kompresiWeb: "gzip/brotli", latensiLevel: "low" {'}'});</p>
                      <p>{'}'}</p>
                    </div>

                    <div className="pt-3 border-t border-neutral-800/60 mt-3 text-neutral-400">
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider text-[#8c8273] mb-1.5">
                        <span>Konsol Kompiler</span>
                        <span>Selesai: {buildTime}</span>
                      </div>
                      <div className="space-y-1 h-14 overflow-y-auto custom-scrollbar leading-normal">
                        {consoleLogs.map((log, index) => (
                          <p key={index} className="text-neutral-300 font-mono">
                            <span className="text-amber-500 mr-1.5">$</span> {log}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Architecture stats layout */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5">
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-mono mb-3">
                      Optimalisasi Arsitektur
                    </h4>
                    <div className="space-y-4">
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-neutral-500 font-medium leading-none">Kecepatan Render</p>
                          <p className="text-sm font-bold text-neutral-800 mt-1">Lightweight Dom load</p>
                        </div>
                        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-emerald-100 text-emerald-800 rounded-lg">
                          0.4s (A+)
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-neutral-500 font-medium leading-none">Indeks Keamanan</p>
                          <p className="text-sm font-bold text-neutral-800 mt-1">Audit OWASP Standard</p>
                        </div>
                        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-amber-100 text-[#855B1B] rounded-lg">
                          99.2% Aman
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-neutral-500 font-medium leading-none">Ketahanan Database</p>
                          <p className="text-sm font-bold text-neutral-800 mt-1">Sistem Failover Otomatis</p>
                        </div>
                        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-blue-100 text-blue-800 rounded-lg">
                          99.99% Uptime
                        </span>
                      </div>

                    </div>
                  </div>

                  <div className="bg-neutral-900 text-white rounded-2xl p-5 border border-neutral-800 flex items-center justify-between">
                    <div>
                      <p className="font-sans text-xs font-semibold text-neutral-400">Prinsip Kami</p>
                      <h4 className="text-base font-bold text-neutral-100 mt-0.5 tracking-tight">
                        Amanah, Cepat &amp; Kokoh
                      </h4>
                      <p className="text-[11px] text-[#A59F95] mt-1.5 leading-relaxed">
                        Kami menjamin kode sumber dibagikan penuh tanpa restriksi kepemilikan.
                      </p>
                    </div>
                    <Database className="h-10 w-10 text-neutral-700 stroke-[1.5]" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* === TAB 2: LIVE DASHBOARD === */}
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
              >
                {/* Metric 1 */}
                <div className="bg-neutral-50/50 border border-neutral-200/80 rounded-2xl p-5 flex flex-col justify-between min-h-[160px]">
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 bg-neutral-100 border border-neutral-200 rounded-xl">
                      <Activity className="h-5 w-5 text-neutral-700" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                      OPTIMAL (+14%)
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-medium block">Latensi Respon API</span>
                    <span className="text-2xl font-bold font-mono text-neutral-800 block mt-1 tracking-tight">
                      12.8ms
                    </span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-neutral-50/50 border border-neutral-200/80 rounded-2xl p-5 flex flex-col justify-between min-h-[160px]">
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 bg-neutral-100 border border-neutral-200 rounded-xl">
                      <Cpu className="h-5 w-5 text-neutral-700" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#A07026] bg-[#FAF3E5] border border-[#E5DFD3] px-2 py-0.5 rounded-full">
                      EFISIEN (-40%)
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-medium block">Beban Memori Virtual</span>
                    <span className="text-2xl font-bold font-mono text-neutral-800 block mt-1 tracking-tight">
                      1.42 GB <span className="text-xs text-neutral-400 font-sans font-medium">dari 4GB</span>
                    </span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-neutral-50/50 border border-neutral-200/80 rounded-2xl p-5 flex flex-col justify-between min-h-[160px]">
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 bg-neutral-100 border border-neutral-200 rounded-xl">
                      <Server className="h-5 w-5 text-neutral-700" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                      AKTIF
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-medium block">Pengguna Bersamaan (Concurrent)</span>
                    <span className="text-2xl font-bold font-mono text-neutral-800 block mt-1 tracking-tight">
                      12,482 <span className="text-xs text-neutral-400 font-sans font-medium">/ menit</span>
                    </span>
                  </div>
                </div>

                {/* Simulated Chart visualization below metrics */}
                <div className="md:col-span-3 bg-neutral-900 rounded-2xl p-5 border border-neutral-800 mt-2">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono font-semibold text-neutral-300">Aliran Lalu Lintas Data Layanan (24 Jam Terakhir)</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">Database: PostgreSQL Cluster v16</span>
                  </div>
                  <div className="h-28 flex items-end justify-between px-2 pt-4">
                    {[30, 45, 60, 55, 70, 65, 80, 75, 95, 85, 90, 80, 85, 99, 90, 82, 88, 70, 75, 80, 85, 92, 98, 96].map((val, idx) => (
                      <div key={idx} className="w-[3%] flex flex-col items-center group relative cursor-pointer">
                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full mb-1.5 hidden group-hover:block bg-neutral-800 text-white text-[9px] font-mono py-0.5 px-1.5 rounded border border-neutral-700 z-10 whitespace-nowrap">
                          {val}% Load
                        </div>
                        <div 
                          className="w-full bg-emerald-500/80 rounded-t group-hover:bg-emerald-400 transition-all" 
                          style={{ height: `${val * 0.9}px` }}
                        />
                        <div className="w-full h-0.5 bg-neutral-800 mt-1" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-[9px] text-[#A59F95] font-mono mt-2 pt-1 border-t border-neutral-800/55 select-none">
                    <span>06.00 WIB</span>
                    <span>12.00 WIB</span>
                    <span>18.00 WIB</span>
                    <span>00.00 WIB</span>
                    <span>Sekarang</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* === TAB 3: SECURITY VERIFICATION === */}
            {activeTab === 'security' && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-6"
              >
                <div className="text-center max-w-xl mx-auto mb-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#A07026] bg-[#FAF3E5] px-3 py-1 rounded-full border border-[#E5DFD3]">
                    Protokol Keamanan PT Barokah
                  </span>
                  <h3 className="text-lg font-bold text-neutral-800 mt-2.5">
                    Sertifikasi Kode &amp; Perlindungan Serangan Siber
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                    Setiap modul diuji terus-menerus terhadap pola serangan OWASP Top 10 dan dilengkapi dengan pertahanan aktif (Active Shield).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Security item 1 */}
                  <div className="border border-neutral-200 bg-white shadow-sm hover:border-neutral-300 rounded-xl p-4 flex items-start space-x-3 transition-colors">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold font-mono text-neutral-800 tracking-tight">TLS 1.3 &amp; Enkripsi Simetris AES-256</h4>
                      <p className="text-xs text-neutral-500 mt-1 leading-normal">
                        Semua data transit dan data istirahat di database dienkripsi menggunakan sandi asimetris yang mustahil ditembus paksa.
                      </p>
                    </div>
                  </div>

                  {/* Security item 2 */}
                  <div className="border border-neutral-200 bg-white shadow-sm hover:border-neutral-300 rounded-xl p-4 flex items-start space-x-3 transition-colors">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold font-mono text-neutral-800 tracking-tight">Sistem Audit Logging Terperinci</h4>
                      <p className="text-xs text-neutral-500 mt-1 leading-normal">
                        Merekam setiap aktivitas query write/update, pembuatan token admin, dan otentikasi login mencurigakan demi transparansi.
                      </p>
                    </div>
                  </div>

                  {/* Security item 3 */}
                  <div className="border border-neutral-200 bg-white shadow-sm hover:border-neutral-300 rounded-xl p-4 flex items-start space-x-3 transition-colors">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold font-mono text-neutral-800 tracking-tight">Multi-Factor Authentication (MFA) Ready</h4>
                      <p className="text-xs text-neutral-500 mt-1 leading-normal">
                        Integrasi sistem bypass kredensial dengan autentikator Google, email OTP, atau kunci perangkat fisik standar FIDO2.
                      </p>
                    </div>
                  </div>

                  {/* Security item 4 */}
                  <div className="border border-neutral-200 bg-white shadow-sm hover:border-neutral-300 rounded-xl p-4 flex items-start space-x-3 transition-colors">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold font-mono text-neutral-800 tracking-tight">Mitigasi Serangan DDOS Otomatis</h4>
                      <p className="text-xs text-neutral-500 mt-1 leading-normal">
                        Pengalihan kluster server cerdas dengan filter ratelimit adaptif saat mendeteksi adanya lonjakan trafik tidak normal.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A1918] p-3 rounded-xl border border-neutral-800 text-center text-[11px] font-mono text-neutral-400">
                  <span className="text-emerald-500 mr-2">● SECURE SHELL</span>
                  Status audit keamanan: <span className="text-white">TERVERIFIKASI SEMPURNA</span> oleh PT. Barokah DevSecOps Tim.
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
