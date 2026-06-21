import { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowRight } from 'lucide-react';
import { navItems } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (elementId: string) => {
    setIsOpen(false);
    const element = document.getElementById(elementId);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2.5 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 rounded-full bg-briefly-brand flex items-center justify-center text-white font-extrabold text-sm transition-all duration-300 group-hover:scale-110 shadow-sm">
              B
            </div>
            <div className="flex items-baseline tracking-[-0.05em]">
              <span className="font-sans font-extrabold text-xl text-neutral-950">
                BAROKAH
              </span>
              <span className="font-sans font-light text-xl text-neutral-500">
                INF.
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.elementId)}
                className="px-3 py-1.5 text-xs font-semibold text-neutral-950 hover:text-briefly-brand transition-colors duration-200 uppercase tracking-widest"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Call to Action Desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('rencana-kerja')}
              className="inline-flex items-center space-x-1 px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-bold hover:bg-neutral-900 transition-all duration-200 shadow-sm active:scale-95 group uppercase tracking-wider"
            >
              <span>Mulai Kolaborasi</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-neutral-600 hover:text-neutral-900 focus:outline-none hover:bg-neutral-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute top-full left-0 right-0 border-b border-briefly-border bg-white px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.elementId)}
              className="block w-full text-left px-5 py-3 text-xs font-bold text-neutral-900 hover:text-briefly-brand transition-all uppercase tracking-widest"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => scrollToSection('rencana-kerja')}
              className="flex justify-center items-center space-x-2 w-full px-5 py-3 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>Hubungi Kami</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
