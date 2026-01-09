
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, INDUSTRIES } from '../constants';
import { ArrowRight, CheckCircle2, TrendingUp, Cpu, ExternalLink, Globe, Layout, ShieldCheck } from 'lucide-react';
import ROICalculator from '../components/ROICalculator';
import { useApp } from '../AppContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import { organizationSchema, localBusinessSchema } from '../config/seo.config';
import { combineSchemas, generateWebPageSchema } from '../utils/structuredData';

const Home: React.FC = () => {
  const { lang } = useApp();
  const t = translations[lang];

  const structuredData = combineSchemas(
    organizationSchema,
    localBusinessSchema,
    generateWebPageSchema({
      name: t.seo.home.title,
      description: t.seo.home.description,
      url: 'https://kiligridtech.com/'
    })
  );

  return (
    <>
      <SEO
        title={t.seo.home.title}
        description={t.seo.home.description}
        keywords={t.seo.home.keywords}
        lang={lang}
        structuredData={structuredData}
      />
      <div className="relative overflow-hidden bg-snow dark:bg-[#0A0F1D]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Subtle Color Blooms */}
          <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] bg-blue-500/10 dark:bg-glacier/10 blur-[100px] rounded-full animate-float opacity-70"></div>
          <div className="absolute bottom-[15%] left-[5%] w-[30vw] h-[30vw] bg-glacier/15 blur-[120px] rounded-full opacity-60"></div>
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] hero-grid"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 relative z-10 py-16 md:py-24">
          <div className="lg:col-span-8 space-y-6 md:space-y-10">
            <div className="inline-flex items-center gap-3 px-4 md:px-6 py-2 rounded-full bg-blue-100/50 dark:bg-glacier/10 border border-blue-200/30 text-ocean dark:text-glacier text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-glacier animate-pulse-soft"></span>
              {t.hero.tagline}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-ocean dark:text-white leading-[1.05] tracking-tighter">
              {t.hero.headline.split('Command')[0]}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ocean via-blue-800 to-glacier dark:from-blue-400 dark:via-blue-300 dark:to-glacier lg:glacier-glow">
                {/* Grid. Secure. Integrate */}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-slateBlue dark:text-blue-100/70 max-w-2xl leading-relaxed font-medium">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6">
              <Link to="/services" className="bg-ocean dark:bg-blue-600 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-extrabold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 group">
                {t.hero.ctaPrimary} <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-ocean/10 dark:border-white/10 text-ocean dark:text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-extrabold text-base md:text-lg hover:bg-white/80 dark:hover:bg-white/10 transition-all text-center">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding px-6 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-ocean dark:text-white mb-6 leading-tight">Elite <span className="text-glacier">Competencies.</span></h2>
              <div className="w-20 h-2 bg-oceanDeep dark:bg-glacier rounded-full"></div>
            </div>
            <p className="text-base md:text-lg text-slateBlue dark:text-blue-100/40 md:max-w-xs font-bold leading-relaxed">
              Precision engineering for unified organizational digital workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {SERVICES.map((s) => (
              <div key={s.id} className="bento-card group p-8 md:p-10 rounded-[32px] md:rounded-[40px]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center text-ocean dark:text-glacier mb-8 group-hover:bg-ocean group-hover:text-white dark:group-hover:bg-glacier dark:group-hover:text-ocean transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-ocean dark:text-white mb-4 leading-snug">{s.title}</h3>
                <p className="text-slateBlue/70 dark:text-blue-100/50 leading-relaxed mb-10 text-sm md:text-base font-medium">{s.description}</p>
                <div className="flex items-center justify-between pt-8 border-t border-blue-50 dark:border-white/5">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-glacier/80">{s.metrics}</span>
                  <Link to="/services" className="text-ocean dark:text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all bg-blue-50 dark:bg-white/5 p-2.5 rounded-xl">
                    <ExternalLink size={20}/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & ROI Section */}
      <section className="section-padding bg-oceanDeep dark:bg-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hero-grid"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="text-white space-y-8 md:space-y-12">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1]">The Architecture of <span className="text-glacier">Return.</span></h2>
              <p className="text-lg md:text-xl text-blue-100/70 leading-relaxed max-w-xl font-medium">
                Technology is the vehicle for profit growth. We specialize in engineering data frameworks that minimize operational friction and maximize speed.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <Layout className="text-glacier w-6 h-6" />, label: 'Unified Ops' },
                  { icon: <TrendingUp className="text-glacier w-6 h-6" />, label: 'Cost Reduction' },
                  { icon: <ShieldCheck className="text-glacier w-6 h-6" />, label: 'Safe Scaling' },
                  { icon: <Globe className="text-glacier w-6 h-6" />, label: 'Global Compliance' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-base md:text-lg font-bold bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                    {item.icon} {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:translate-x-4">
              <ROICalculator />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
