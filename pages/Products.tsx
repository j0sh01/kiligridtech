
import React from 'react';
import { useApp } from '../AppContext';
import { translations } from '../translations';
import { Server, Shield, Camera, Wifi, HardDrive } from 'lucide-react';

const Products: React.FC = () => {
  const { lang } = useApp();
  const t = translations[lang];

  const categories = [
    { 
      title: lang === 'en' ? "Network Infrastructure" : "Miundombinu ya Mtandao", 
      icon: <Wifi />, 
      items: ["Cisco Enterprise Switches", "Ubiquiti Wireless Mesh", "Fiber Optic Cabling"] 
    },
    { 
      title: lang === 'en' ? "Security Kits" : "Vifaa vya Usalama", 
      icon: <Camera />, 
      items: ["Hikvision IP Cameras", "ZKTeco Biometric Scanners", "Nemtek Electric Fencing"] 
    },
    { 
      title: lang === 'en' ? "Computing Power" : "Nguvu ya Kompyuta", 
      icon: <Server />, 
      items: ["Dell PowerEdge Servers", "HP Enterprise Workstations", "Rack Management"] 
    },
    { 
      title: lang === 'en' ? "Storage & Backup" : "Uhifadhi na Nakala", 
      icon: <HardDrive />, 
      items: ["Synology NAS Units", "APC Smart-UPS", "Data Recovery Tools"] 
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-snow dark:bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-6xl font-black text-ocean dark:text-white mb-6">
            ICT <span className="text-glacier">{lang === 'en' ? 'Hardware.' : 'Vifaa.'}</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-blue-100/60">{t.products.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group p-10 bento-card rounded-[40px] hover:border-glacier transition-all">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-ocean dark:bg-blue-900/30 text-white dark:text-glacier flex items-center justify-center rounded-2xl">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-black text-ocean dark:text-white">{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between p-4 bg-blue-50/50 dark:bg-white/5 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors border border-blue-100/20">
                    <span className="font-bold text-ocean dark:text-blue-100">{item}</span>
                    <button className="text-xs font-black text-glacier uppercase tracking-widest">{lang === 'en' ? 'In Stock' : 'Vipo'}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-nav p-10 rounded-[40px] border border-glacier/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-ocean dark:bg-blue-600 text-white rounded-full flex items-center justify-center">
               <Shield />
             </div>
             <div>
               <h4 className="text-2xl font-black text-ocean dark:text-white">{t.products.warranty}</h4>
               <p className="text-gray-500 dark:text-blue-100/40">{t.products.warrantyDesc}</p>
             </div>
          </div>
          <button className="bg-ocean dark:bg-blue-600 text-white px-8 py-4 rounded-xl font-black shrink-0 hover:scale-105 transition-transform shadow-xl">
            {t.products.download}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
