
import React from 'react';
import { useApp } from '../AppContext';
import { translations } from '../translations';
import { Target, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { generateWebPageSchema, generateBreadcrumbSchema, combineSchemas } from '../utils/structuredData';
import { organizationSchema } from '../config/seo.config';

const About: React.FC = () => {
  const { lang } = useApp();
  const t = translations[lang];

  const structuredData = combineSchemas(
    organizationSchema,
    generateWebPageSchema({
      name: t.seo.about.title,
      description: t.seo.about.description,
      url: 'https://kiligridtech.com/#/about'
    }),
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://kiligridtech.com/' },
      { name: 'About', url: 'https://kiligridtech.com/#/about' }
    ])
  );

  return (
    <>
      <SEO
        title={t.seo.about.title}
        description={t.seo.about.description}
        keywords={t.seo.about.keywords}
        lang={lang}
        structuredData={structuredData}
      />
      <div className="pt-32 pb-24 bg-snow dark:bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-6xl lg:text-8xl font-black text-ocean dark:text-white mb-8">
            KiliGrid <span className="text-glacier">{lang === 'en' ? 'Story.' : 'Historia.'}</span>
          </h1>
          <div className="w-32 h-2 bg-ocean dark:bg-glacier mx-auto rounded-full"></div>
        </div>

        {/* Identity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="space-y-12">
            <div className="bento-card p-12 rounded-[40px]">
              <h3 className="text-4xl font-black text-ocean dark:text-glacier mb-6 italic">Kili</h3>
              <p className="text-xl text-gray-500 dark:text-blue-100/60 leading-relaxed">
                {t.about.kili}
              </p>
            </div>
            <div className="bento-card p-12 rounded-[40px]">
              <h3 className="text-4xl font-black text-ocean dark:text-glacier mb-6 italic">Grid</h3>
              <p className="text-xl text-gray-600 dark:text-blue-100/60 leading-relaxed">
                {t.about.grid}
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-ocean/10 blur-[100px] rounded-full group-hover:bg-glacier/20 transition-all duration-700"></div>
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl grayscale transition-all duration-1000 group-hover:grayscale-0">
               <img src="/KiliGrid.png" alt="Tech Excellence" />
            </div>
          </div>
        </div>

        {/* Vision / Mission / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-10 bg-ocean text-white rounded-[40px] shadow-2xl">
            <Target className="text-glacier w-12 h-12 mb-8" />
            <h3 className="text-3xl font-black mb-6">{t.about.visionTitle}</h3>
            <p className="text-blue-100/70 leading-relaxed">{t.about.visionBody}</p>
          </div>
          <div className="p-10 bg-blue-50 dark:bg-white/5 rounded-[40px] border border-blue-100 dark:border-white/10">
            <Lightbulb className="text-ocean dark:text-glacier w-12 h-12 mb-8" />
            <h3 className="text-3xl font-black text-ocean dark:text-white mb-6">{t.about.missionTitle}</h3>
            <p className="text-gray-500 dark:text-blue-100/50 leading-relaxed">{t.about.missionBody}</p>
          </div>
          <div className="p-10 bento-card rounded-[40px]">
            <TrendingUp className="text-ocean dark:text-glacier w-12 h-12 mb-8" />
            <h3 className="text-3xl font-black text-ocean dark:text-white mb-6">{t.about.valuesTitle}</h3>
            <ul className="space-y-4">
              {Object.values(t.about.values).map((v, i) => (
                <li key={i} className="flex gap-3 text-sm font-bold text-ocean dark:text-blue-200">
                  <CheckCircle2 size={18} className="text-glacier shrink-0" /> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
