
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { useApp } from '../AppContext';
import { translations } from '../translations';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, theme, toggleTheme } = useApp();
  const t = translations[lang];
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.solutions, path: '/solutions' },
    { name: t.nav.products, path: '/products' },
    { name: t.nav.about, path: '/about' },
  ];

  // Logic adjusted to ensure text is always visible. 
  // We keep white text ONLY in dark mode at the top for aesthetic, 
  // but in light mode it remains Ocean Blue for visibility.
  const showWhiteText = !isScrolled && theme === 'dark';

  return (
    <nav className={`fixed w-full z-[70] transition-all duration-500 px-3 sm:px-4 md:px-8 ${
      isScrolled 
        ? 'py-2 md:py-3' 
        : 'py-5 md:py-8'
    }`}>
      <div className={`max-w-7xl mx-auto px-4 md:px-6 py-2.5 rounded-2xl md:rounded-3xl transition-all duration-500 ${
        isScrolled 
          ? 'glass-nav-scrolled shadow-xl' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="shrink-0">
            <Logo light={showWhiteText} />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <div className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-[13px] xl:text-sm font-bold tracking-tight transition-all relative group flex items-center gap-1 py-1 ${
                    showWhiteText ? 'text-white' : 'text-ocean dark:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-glacier transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 xl:gap-5 border-l border-blue-200/20 pl-6 xl:pl-8">
              <button 
                onClick={toggleTheme}
                title="Toggle Theme"
                className={`p-2.5 rounded-xl transition-all hover:scale-110 active:scale-95 ${
                  showWhiteText ? 'text-white hover:bg-white/10' : 'text-ocean dark:text-glacier hover:bg-blue-100 dark:hover:bg-white/5'
                }`}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              
              <button 
                onClick={() => setLang(lang === 'en' ? 'sw' : 'en')}
                className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl transition-all border ${
                  showWhiteText 
                    ? 'text-white border-white/20 hover:bg-white/10' 
                    : 'text-ocean dark:text-blue-100 border-ocean/20 dark:border-white/10 hover:bg-blue-50/50'
                }`}
              >
                <Globe size={12} className="text-glacier" />
                {lang}
              </button>

              <Link 
                to="/contact" 
                className="bg-ocean dark:bg-blue-600 text-white px-5 xl:px-7 py-2.5 xl:py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-ocean/10 hover:shadow-glacier/20 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
              >
                {t.nav.contact}
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-4">
             <button 
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-transform active:scale-90 ${showWhiteText ? 'text-white' : 'text-ocean dark:text-glacier'}`}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            <button 
              className={`p-2 rounded-lg transition-all active:scale-90 ${
                showWhiteText ? 'text-white hover:bg-white/10' : 'text-ocean dark:text-white hover:bg-blue-50/50 dark:hover:bg-white/5'
              }`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-[-1] transition-all duration-500 bg-snow dark:bg-[#0A0F1D] ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <div className="h-full flex flex-col pt-24 pb-12 px-8 gap-6 sm:gap-8 overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link 
              key={link.path} 
              to={link.path} 
              style={{ transitionDelay: `${i * 50}ms` }}
              className={`text-3xl sm:text-4xl font-black text-ocean dark:text-white flex items-center justify-between group py-2 border-b border-ocean/5 dark:border-white/5 ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
              } transition-all duration-300`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
              <ChevronRight className="text-glacier opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all" size={28} />
            </Link>
          ))}
          <div className="mt-auto space-y-4 pt-12">
            <button 
              onClick={() => { setLang(lang === 'en' ? 'sw' : 'en'); setMobileMenuOpen(false); }}
              className="w-full py-4 rounded-2xl bg-blue-100/50 dark:bg-white/5 font-black text-ocean dark:text-white flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
            >
              <Globe size={18} className="text-glacier" />
              {lang === 'en' ? 'BADILI KWENDA KISWAHILI' : 'SWITCH TO ENGLISH'}
            </button>
            <Link 
              to="/contact" 
              className="block w-full bg-ocean text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl active:scale-[0.98] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
