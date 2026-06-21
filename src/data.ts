import { NavItem, StarStatistic, ServiceDetail, BentoFeature, ProjectCaseStudy, Testimonial, FaqItem } from './types';

export const navItems: NavItem[] = [
  { id: '1', label: 'Tentang Kami', elementId: 'tentang-kami' },
  { id: '2', label: 'Layanan Utama', elementId: 'layanan' },
  { id: '3', label: 'Keunggulan', elementId: 'keunggulan' },
  { id: '4', label: 'Studi Kasus', elementId: 'studi-kasus' },
  { id: '5', label: 'Rencana Kerja', elementId: 'rencana-kerja' },
  { id: '6', label: 'FAQ', elementId: 'faq' }
];

export const statistics: StarStatistic[] = [
  {
    id: 'stat-1',
    value: '99%',
    label: 'Tingkat Keberhasilan Proyek',
    description: 'Semua platform diluncurkan tepat waktu dengan performa tinggi.'
  },
  {
    id: 'stat-2',
    value: '150+',
    label: 'Sistem Terintegrasi',
    description: 'Migrasi cloud, API custom, dan otomatisasi workflow bisnis.'
  },
  {
    id: 'stat-3',
    value: '50+',
    label: 'Klien Korporasi & UMKM',
    description: 'Membantu transformasi digital berbagai skala usaha di Indonesia.'
  },
  {
    id: 'stat-4',
    value: '4.9/5',
    label: 'Kepuasan Layanan',
    description: 'Berdasarkan ulasan transparansi, dedikasi, dan purna jual.'
  }
];

export const servicesData: ServiceDetail[] = [
  {
    id: 'srv-web',
    title: 'Custom Web & Enterprise Application',
    badge: 'Skala & Performa',
    shortDesc: 'Platform web responsif berarsitektur modern untuk operasional bisnis skala besar tanpa macet.',
    longDesc: 'Kami merancang dan membangun aplikasi web kustom yang dirancang khusus untuk memecahkan hambatan operasional perusahaan Anda. Menggunakan ekosistem React/Next.js modern, backend tangguh, dan database berkinerja tinggi.',
    features: [
      'Single Page Application (SPA) & Progressive Web App (PWA)',
      'Sistem Dashboard Manajemen, CRM, ERP, & POS Custom',
      'Integrasi Payment Gateway Indonesia & API Pihak Ketiga',
      'Optimalisasi SEO, Keamanan OWASP Top 10, & Kecepatan Tinggi'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    benefitWord: 'Akselerasi digital',
    graphicType: 'webapp'
  },
  {
    id: 'srv-mobile',
    title: 'High-Fidelity Mobile App Development',
    badge: 'Play Store & App Store',
    shortDesc: 'Aplikasi Android dan iOS native/cross-platform dengan pengalaman sentuhan halus dan mulus.',
    longDesc: 'Hadirkan bisnis Anda langsung ke genggaman pelanggan dengan aplikasi seluler yang menawan. Kami mengoptimalkan performa, menghemat baterai, dan merancang user interface yang memikat hati pengguna sejak detik pertama.',
    features: [
      'Aplikasi Cross-Platform menggunakan React Native / Flutter',
      'Sistem Push Notification Real-time & Sinkronisasi Offline-first',
      'Integrasi Sensor GPS, Kamera, Biometric Auth, & Bluetooth',
      'Manajemen Kinerja Memori & Penerbitan Mandiri ke App Store'
    ],
    techStack: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase'],
    benefitWord: 'Keterikatan pelanggan',
    graphicType: 'mobileapp'
  },
  {
    id: 'srv-cloud',
    title: 'Cloud Infrastructure & DevOps Engineer',
    badge: 'Maju & Aman',
    shortDesc: 'Automatisasi server, arsitektur microservices, dan penyiapan cloud hemat biaya (cost-efficient).',
    longDesc: 'Ucapkan selamat tinggal pada server down dan biaya tagihan cloud yang membengkak. Kami merancang arsitektur cloud multi-zone berdaya tahan tinggi dengan sistem pemantauan otomatis demi kelancaran operasional 24/7.',
    features: [
      'Migrasi Cloud ke AWS, Google Cloud, Azure, atau On-Premise',
      'Containerization dengan Docker & Orkestrasi Kubernetes (K8s)',
      'CI/CD Pipeline Otomatis (GitHub Actions, GitLab CI)',
      'Optimalisasi Biaya Bulanan Cloud & Auto-scaling Dinamis'
    ],
    techStack: ['Google Cloud', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
    benefitWord: 'Skalabilitas mutlak',
    graphicType: 'cloudsystem'
  },
  {
    id: 'srv-consult',
    title: 'Strategic IT Consulting & Digital Audit',
    badge: 'Amanah & Solutif',
    shortDesc: 'Konsultasi arsitektur sistem, audit keamanan siber, dan penyusunan roadmap teknologi modern.',
    longDesc: 'Gunakan teknologi secara efisien demi strategi pertumbuhan jangka panjang. Kami membantu mengevaluasi keamanan sistem Anda saat ini, menyusun roadmap transformasi digital, serta mengawal rekrutmen tim teknologi internal.',
    features: [
      'Audit Kerentanan Keamanan Kode & Penetrasi Keamanan (Pen-test)',
      'Penyusunan Cetak Biru (IT Blueprint) & Pemilihan Pendekatan Teknologi',
      'Desain Skema Database Terdistribusi & Optimasi Query Raksasa',
      'Pelatihan Teknis Internal Tim Pengembang Perusahaan Anda'
    ],
    techStack: ['System Architecture', 'CISO Guide', 'Database Tuning', 'IT Audit'],
    benefitWord: 'Keamanan tanpa kompromi',
    graphicType: 'consultancy'
  }
];

export const bentoFeatures: BentoFeature[] = [
  {
    id: 'bento-1',
    title: 'Sistem Teruji Sangat Bersih (Clean-Code)',
    subtitle: 'Kami menulis kode dengan penamaan logis, pemisahan modul yang rapi, dan dokumentasi penuh. Memudahkan pemeliharaan sistem Anda dalam 5-10 tahun ke depan.',
    badge: 'Arsitektur Bersih',
    size: 'large',
    illustrationType: 'code'
  },
  {
    id: 'bento-2',
    title: 'Transparansi Penuh & Integritas Barokah',
    subtitle: 'Tidak ada biaya tersembunyi. Penggunaan anggaran dilaporkan secara rinci dan jujur sesuai progres riil proyek.',
    badge: 'Prinsip Amanah',
    size: 'small',
    illustrationType: 'nodes'
  },
  {
    id: 'bento-3',
    title: 'Pertahanan Keamanan Siber Berlapis',
    subtitle: 'Proteksi data sensitif dari serangan SQL Injection, XSS, dan CSRF menggunakan enkripsi end-to-end berstandar internasional.',
    badge: 'Perlindungan Maksimal',
    size: 'small',
    illustrationType: 'shield'
  },
  {
    id: 'bento-4',
    title: 'Optimasi Kecepatan & Performa Tanpa Macet',
    subtitle: 'Sistem dirancang ringan, responsif, dan siap melayani jutaan request pengguna secara bersamaan tanpa penurunan performa sedikit pun.',
    badge: '99.9% Sistem Aktif',
    size: 'large',
    illustrationType: 'chart'
  }
];

export const caseStudies: ProjectCaseStudy[] = [
  {
    id: 'cs-1',
    clientName: 'PT. Barokah Pangan Nusantara',
    industry: 'F&B Supply Chain',
    title: 'Digitalisasi Distribusi Rantai Pasok Pangan Nasional',
    description: 'Menggantikan sistem pencatatan manual berbasis kertas dengan ekosistem Dashboard Web & Aplikasi Seluler Real-time untuk 200+ kurir dan gudang logistik.',
    impactMetrics: [
      { value: '70%', label: 'Reduksi Kehilangan Stok' },
      { value: '3.5 Jam', label: 'Efisiensi Waktu Pengiriman' },
      { value: 'Rasio 1:1', label: 'Keakuratan Gudang' }
    ],
    accentColor: 'from-[#CF9E53] to-[#A07026]',
    mockupPreset: 'dashboard'
  },
  {
    id: 'cs-2',
    clientName: 'Yayasan Amal Mulia Abadi',
    industry: 'Charity & Philanthropy',
    title: 'Sistem Donasi Terintegrasi dengan Pelacakan Kas Terbuka',
    description: 'Membangun aplikasi donasi digital berkeamanan tinggi dengan modul audit otomatis dan transparansi aliran dana publik hingga ke titik akhir penerima manfaat.',
    impactMetrics: [
      { value: 'RP 20M+', label: 'Dana Terhimpun Aman' },
      { value: '420.000', label: 'Donatur Aktif Terlayani' },
      { value: '100%', label: 'Transparansi Audit' }
    ],
    accentColor: 'from-[#22C55E] to-[#15803D]',
    mockupPreset: 'mobile'
  },
  {
    id: 'cs-3',
    clientName: 'Sinergi Finansial Madani',
    industry: 'Financial Technology',
    title: 'Core Banking API & Sistem Pemantauan Kredit Berkah',
    description: 'Mengembangkan arsitektur API mikroservis berdaya tampung tinggi yang tersertifikasi PCI-DSS untuk mendukung transaksi pembiayaan modal syariah.',
    impactMetrics: [
      { value: '< 25ms', label: 'Waktu Respons API' },
      { value: '2.4 Juta', label: 'Transaksi Bulanan Lancar' },
      { value: 'Nol', label: 'Kebocoran Data Keuangan' }
    ],
    accentColor: 'from-[#3B82F6] to-[#1D4ED8]',
    mockupPreset: 'api'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    content: 'Kerja sama dengan PT. Barokah Informatika Solusindo memberikan kelegaan luar biasa. Mereka sangat jujur dalam pengerjaan kode, tidak pernah melebih-lebihkan kompleksitas demi biaya tambahan. Sistem ERP kami selesai tepat waktu dan berjalan tanpa gangguan.',
    authorName: 'Haji Ahmad Fauzan',
    role: 'Direktur Utama',
    companyName: 'PT Barokah Pangan Nusantara',
    rating: 5
  },
  {
    id: 't-2',
    content: 'Tim developer PT. Barokah bukan sekadar menulis program, mereka memberikan saran taktis tentang arsitektur cloud. Hasilnya, penghematan server bulanan kami turun hingga 45% namun kecepatan aplikasi justru meningkat pesat.',
    authorName: 'Kartika Sari, M.T.',
    role: 'Chief of Technology',
    companyName: 'Sinergi Finansial Madani',
    rating: 5
  },
  {
    id: 't-3',
    content: 'Aplikasi donasi kami berkali-kali diaudit oleh lembaga eksternal dan mereka memuji kerapihan serta standar keamanan kode yang dibangun oleh PT Barokah. Ini adalah wujud integrasi kejujuran dan kompetensi profesional.',
    authorName: 'Ustadz Ridwan Hakim',
    role: 'Ketua Pembina',
    companyName: 'Yayasan Amal Mulia Abadi',
    rating: 5
  }
];

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Berapakah estimasi biaya pembuatan aplikasi atau website kustom?',
    answer: 'Biaya bersifat fleksibel bergantung pada tingkat kompleksitas fitur, skala arsitektur database, dan jangka waktu pengembangan. Kami selalu memberikan rincian harga yang detail (Bill of Materials) di awal proyek secara transparan tanpa biaya siluman.'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana cara PT. Barokah Informatika Solusindo menjaga keamanan kode?',
    answer: 'Kami menerapkan praktik devsecops terbaik yang mencakup peninjauan kode bertahap (multi-stage code review), audit kerentanan menggunakan static analysis, serta penerapan sistem keamanan standar industri seperti Enkripsi Kunci Asimetris (HTTPS/TLS) dan isolasi server mikro.'
  },
  {
    id: 'faq-3',
    question: 'Apakah kami mendapatkan garansi kesalahan (bug) setelah sistem diluncurkan?',
    answer: 'Tentu. Setiap proyek dilindungi oleh garansi bebas murni atau pemeliharaan purna jual selama 3 hingga 12 bulan (tergantung kontrak) untuk memastikan semua roda operasional digital berjalan sempurna tanpa hambatan.'
  },
  {
    id: 'faq-4',
    question: 'Apakah semua properti intelektual dan kode sumber (source code) menjadi milik klien?',
    answer: 'Ya, 100%. Setelah pelunasan proyek selesai dilakukan, seluruh hak kekayaan intelektual, repositori kode pengembang (source-code), kredensial deployment, dan rancangan sistem diserahkan sepenuhnya secara tertulis kepada pihak pembeli.'
  },
  {
    id: 'faq-5',
    question: 'Bagaimana keterlibatan klien dalam proses pengerjaan (development lifecycle)?',
    answer: 'Kami menggunakan metodologi Agile yang sangat transparan. Setiap 1 atau 2 minggu sekali, kami mengadakan sesi demo singkat (Sprint Review) sehingga Anda bisa memantau, mendemokan versi hidup, dan melakukan koreksi jika ada fungsionalitas yang kurang pas.'
  }
];
