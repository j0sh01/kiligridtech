
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import { useApp } from '../AppContext';
import { translations } from '../translations';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  const { lang } = useApp();
  const t = translations[lang];

  return (
    <>
      <SEO
        title={t.notFound.title}
        description={t.notFound.description}
        keywords="404, page not found, error"
        lang={lang}
      />
      <div className="min-h-screen bg-snow dark:bg-[#0A0F1D] flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl w-full text-center">
          {/* Animated 404 */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-glacier/10 dark:bg-glacier/5 blur-[100px] rounded-full animate-pulse"></div>
            </div>
            <h1 className="relative text-[180px] md:text-[280px] font-black text-ocean/10 dark:text-white/10 leading-none select-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-ocean dark:text-white">
              {t.notFound.heading}
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-blue-100/60 max-w-2xl mx-auto leading-relaxed">
              {t.notFound.message}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-ocean dark:bg-glacier text-white dark:text-ocean px-8 py-4 rounded-2xl font-black group hover:shadow-xl transition-all"
            >
              <Home size={20} />
              {t.notFound.homeButton}
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 bg-white dark:bg-white/10 text-ocean dark:text-white border-2 border-ocean/20 dark:border-white/20 px-8 py-4 rounded-2xl font-black group hover:shadow-xl transition-all"
            >
              <ArrowLeft size={20} />
              {t.notFound.backButton}
            </button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-ocean/10 dark:border-white/10 pt-12">
            <p className="text-sm font-black text-ocean/60 dark:text-white/60 uppercase tracking-widest mb-6">
              {t.notFound.quickLinks}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Link
                to="/services"
                className="p-4 bg-white dark:bg-white/5 rounded-xl border border-ocean/10 dark:border-white/10 hover:border-glacier dark:hover:border-glacier transition-all group"
              >
                <p className="font-black text-ocean dark:text-white group-hover:text-glacier transition-colors">
                  {t.nav.services}
                </p>
              </Link>
              
              <Link
                to="/solutions"
                className="p-4 bg-white dark:bg-white/5 rounded-xl border border-ocean/10 dark:border-white/10 hover:border-glacier dark:hover:border-glacier transition-all group"
              >
                <p className="font-black text-ocean dark:text-white group-hover:text-glacier transition-colors">
                  {t.nav.solutions}
                </p>
              </Link>
              
              <Link
                to="/products"
                className="p-4 bg-white dark:bg-white/5 rounded-xl border border-ocean/10 dark:border-white/10 hover:border-glacier dark:hover:border-glacier transition-all group"
              >
                <p className="font-black text-ocean dark:text-white group-hover:text-glacier transition-colors">
                  {t.nav.products}
                </p>
              </Link>
              
              <Link
                to="/about"
                className="p-4 bg-white dark:bg-white/5 rounded-xl border border-ocean/10 dark:border-white/10 hover:border-glacier dark:hover:border-glacier transition-all group"
              >
                <p className="font-black text-ocean dark:text-white group-hover:text-glacier transition-colors">
                  {t.nav.about}
                </p>
              </Link>
              
              <Link
                to="/contact"
                className="p-4 bg-white dark:bg-white/5 rounded-xl border border-ocean/10 dark:border-white/10 hover:border-glacier dark:hover:border-glacier transition-all group"
              >
                <p className="font-black text-ocean dark:text-white group-hover:text-glacier transition-colors">
                  {t.nav.contact}
                </p>
              </Link>
              
              <a
                href="mailto:info@kiligridtech.com"
                className="p-4 bg-white dark:bg-white/5 rounded-xl border border-ocean/10 dark:border-white/10 hover:border-glacier dark:hover:border-glacier transition-all group"
              >
                <div className="flex items-center justify-center gap-2">
                  <Mail size={16} className="text-glacier" />
                  <p className="font-black text-ocean dark:text-white group-hover:text-glacier transition-colors">
                    {t.notFound.emailUs}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex items-center justify-center gap-2 text-ocean/30 dark:text-white/30">
            <Search size={16} />
            <p className="text-xs font-black uppercase tracking-widest">
              {t.notFound.errorCode}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

