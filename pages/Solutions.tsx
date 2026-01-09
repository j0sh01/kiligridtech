
import React from 'react';
import { MODULES, INDUSTRIES } from '../constants';
import { useApp } from '../AppContext';
import { translations } from '../translations';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { generateWebPageSchema, generateBreadcrumbSchema, combineSchemas } from '../utils/structuredData';

const Solutions: React.FC = () => {
  const { lang } = useApp();
  const t = translations[lang];

  const structuredData = combineSchemas(
    generateWebPageSchema({
      name: t.seo.solutions.title,
      description: t.seo.solutions.description,
      url: 'https://kiligridtech.com/#/solutions'
    }),
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://kiligridtech.com/' },
      { name: 'Solutions', url: 'https://kiligridtech.com/#/solutions' }
    ])
  );

  return (
    <>
      <SEO
        title={t.seo.solutions.title}
        description={t.seo.solutions.description}
        keywords={t.seo.solutions.keywords}
        lang={lang}
        structuredData={structuredData}
      />
      <div className="pt-32 pb-24 bg-snow dark:bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-6xl lg:text-7xl font-black text-ocean dark:text-white mb-6">{t.solutions.title}</h1>
          <p className="text-2xl text-gray-500 dark:text-blue-100/60 leading-relaxed">
            {t.solutions.subtitle}
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {MODULES.map((mod) => (
            <div key={mod.id} className="bento-card p-8 rounded-[32px] hover:border-glacier transition-all">
              <div className="text-ocean dark:text-glacier mb-6 p-4 bg-blue-50 dark:bg-white/5 rounded-2xl w-fit">
                {mod.icon}
              </div>
              <h3 className="text-2xl font-black text-ocean dark:text-white mb-4">
                {t.solutions.modules[mod.key as keyof typeof t.solutions.modules]}
              </h3>
              <p className="text-sm text-gray-500 dark:text-blue-100/40 leading-relaxed">
                {lang === 'en' ? 'Seamless integration for data accuracy and real-time operational visibility.' : 'Ujumuishaji usio na mshono kwa usahihi wa data na uonekano wa utendaji wa wakati halisi.'}
              </p>
            </div>
          ))}
        </div>

        {/* Industry Matrix */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-ocean dark:text-white mb-12">{t.solutions.frameworks}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {INDUSTRIES.map((ind) => (
              <div key={ind.id} className="flex gap-8 p-10 bento-card rounded-[40px] border border-blue-100/30">
                <div className="shrink-0 w-20 h-20 bg-ocean text-glacier flex items-center justify-center rounded-3xl">
                  {ind.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-ocean dark:text-white mb-4">{ind.name}</h3>
                  <p className="text-gray-500 dark:text-blue-100/50 mb-6 leading-relaxed">
                    {ind.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {['BOM Support', 'SLA Tracking', 'Audit-Ready'].map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 text-xs font-black text-ocean dark:text-blue-300 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glacier-gradient p-8 md:p-16 rounded-[40px] md:rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-black mb-6 italic">{t.solutions.tagline}</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              {t.solutions.desc}
            </p>
          </div>
          <button className="bg-white text-ocean px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-colors shadow-2xl flex items-center gap-3">
            {t.solutions.audit} <ArrowRight />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Solutions;
