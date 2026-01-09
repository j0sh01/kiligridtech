
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../AppContext';
import { translations } from '../translations';

const Services: React.FC = () => {
  const { lang } = useApp();
  const t = translations[lang];

  return (
    <div className="pt-32 pb-24 bg-snow dark:bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h1 className="text-6xl font-black text-ocean dark:text-white mb-8 leading-tight">
            {t.services.title.split('Capability')[0]} 
            <span className="text-glacier">{lang === 'en' ? 'Capability.' : 'Kihandisi.'}</span>
          </h1>
          <p className="text-2xl text-gray-500 dark:text-blue-100/60 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="space-y-40">
          {SERVICES.map((s, i) => (
            <div key={s.id} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-8">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-ocean dark:text-glacier">
                  {s.icon}
                </div>
                <h2 className="text-5xl font-black text-ocean dark:text-white leading-tight">{s.title}</h2>
                <p className="text-xl text-gray-500 dark:text-blue-100/50 leading-relaxed">
                  {s.description}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {t.services.items.map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm font-black text-ocean dark:text-blue-200 uppercase tracking-widest">
                      <CheckCircle2 size={18} className="text-glacier" /> {item}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-ocean text-white px-8 py-4 rounded-2xl font-black group hover:shadow-xl transition-all">
                  {t.services.cta} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="lg:w-1/2 w-full aspect-video bg-blue-50 dark:bg-white/5 rounded-[60px] border border-blue-100/20 flex items-center justify-center relative group overflow-hidden shadow-2xl">
                 {/* Image Placeholder */}
                 { s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover rounded-[60px] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-4 text-blue-300 dark:text-white/20">
                    <ImageIcon size={64} />
                    <span className="font-black uppercase tracking-widest text-xs">
                      Asset Placeholder: {s.title}
                    </span>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
