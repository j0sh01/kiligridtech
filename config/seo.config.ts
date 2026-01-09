export interface PageSEO {
  en: {
    title: string;
    description: string;
    keywords: string;
  };
  sw: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const seoConfig: Record<string, PageSEO> = {
  home: {
    en: {
      title: 'Advanced IT Solutions & ERP Systems',
      description: 'KiliGrid Technology provides enterprise ERP solutions, network infrastructure, AI integration, and IT consultancy services in Dar es Salaam, Tanzania. Trusted partner for scalable business technology.',
      keywords: 'ERP Tanzania, IT solutions Dar es Salaam, network infrastructure Tanzania, AI integration East Africa, ERP Tanzania, ERPNext Tanzania, business technology solutions, IT consultancy Tanzania, enterprise software Tanzania, digital transformation Africa'
    },
    sw: {
      title: 'Suluhisho za IT na Mifumo ya ERP',
      description: 'KiliGrid Technologies inatoa suluhisho za ERP za biashara, miundombinu ya mtandao, uunganishaji wa AI, na huduma za ushauri wa IT huko Dar es Salaam, Tanzania. Mshirika wa kuaminika kwa teknolojia ya biashara inayoweza kukua.',
      keywords: 'ERP Tanzania, suluhisho za IT Dar es Salaam, miundombinu ya mtandao Tanzania, uunganishaji wa AI Afrika Mashariki, ERP Tanzania, ERPNext Tanzania, suluhisho za teknolojia ya biashara, ushauri wa IT Tanzania, programu za biashara Tanzania'
    }
  },
  services: {
    en: {
      title: 'IT Services & Infrastructure Solutions',
      description: 'Professional IT consultancy, network infrastructure design, security systems (CCTV, access control), and cloud solutions. Expert deployment and continuous support for businesses in Tanzania and East Africa.',
      keywords: 'IT consultancy Tanzania, network infrastructure services, CCTV installation Dar es Salaam, access control systems, security infrastructure Tanzania, cloud solutions East Africa, IT support Tanzania, network design, cybersecurity Tanzania, managed IT services'
    },
    sw: {
      title: 'Huduma za IT na Suluhisho za Miundombinu',
      description: 'Ushauri wa kitaalamu wa IT, muundo wa miundombinu ya mtandao, mifumo ya usalama (CCTV, udhibiti wa ufikiaji), na suluhisho za wingu. Uwekaji wa kitaalamu na msaada unaoendelea kwa biashara Tanzania na Afrika Mashariki.',
      keywords: 'ushauri wa IT Tanzania, huduma za miundombinu ya mtandao, usakinishaji wa CCTV Dar es Salaam, mifumo ya udhibiti wa ufikiaji, miundombinu ya usalama Tanzania, suluhisho za wingu Afrika Mashariki, msaada wa IT Tanzania'
    }
  },
  solutions: {
    en: {
      title: 'Enterprise ERP Solutions & Business Software',
      description: 'Comprehensive ERP modules: Accounting, Inventory, CRM, Manufacturing (MRP), HR, Project Management, eCommerce, and POS systems. Odoo, SAP, and Microsoft Dynamics implementation in Tanzania.',
      keywords: 'ERP modules Tanzania, Odoo implementation, SAP Tanzania, Microsoft Dynamics, accounting software Tanzania, inventory management system, CRM Tanzania, manufacturing ERP, HR management software, POS system Tanzania, eCommerce platform, project management software'
    },
    sw: {
      title: 'Suluhisho za ERP za Biashara na Programu za Biashara',
      description: 'Moduli kamili za ERP: Uhasibu, Hesabu, CRM, Uzalishaji (MRP), HR, Usimamizi wa Miradi, eCommerce, na mifumo ya POS. Utekelezaji wa Odoo, SAP, na Microsoft Dynamics Tanzania.',
      keywords: 'moduli za ERP Tanzania, utekelezaji wa Odoo, SAP Tanzania, Microsoft Dynamics, programu ya uhasibu Tanzania, mfumo wa usimamizi wa hesabu, CRM Tanzania, ERP ya uzalishaji, programu ya usimamizi wa HR, mfumo wa POS Tanzania'
    }
  },
  products: {
    en: {
      title: 'ICT Hardware & Enterprise Equipment',
      description: 'Professional ICT hardware, servers, networking equipment, and computing infrastructure for modern enterprises. Authorized partner with global warranty and maintenance support in Tanzania.',
      keywords: 'ICT hardware Tanzania, enterprise servers, networking equipment Dar es Salaam, computer hardware Tanzania, IT equipment supplier, server infrastructure, network switches, enterprise computing, hardware warranty Tanzania, IT hardware partner'
    },
    sw: {
      title: 'Vifaa vya ICT na Vifaa vya Biashara',
      description: 'Vifaa vya kitaalamu vya ICT, seva, vifaa vya mtandao, na miundombinu ya kompyuta kwa makampuni ya kisasa. Mshirika aliyeidhinishwa na dhamana ya kimataifa na msaada wa matengenezo Tanzania.',
      keywords: 'vifaa vya ICT Tanzania, seva za biashara, vifaa vya mtandao Dar es Salaam, vifaa vya kompyuta Tanzania, msambazaji wa vifaa vya IT, miundombinu ya seva, switches za mtandao, dhamana ya vifaa Tanzania'
    }
  },
  about: {
    en: {
      title: 'About Us - Leading IT Solutions Provider',
      description: 'KiliGrid Technology is Tanzania\'s trusted IT partner, inspired by Mount Kilimanjaro\'s strength and reliability. We deliver expert IT consultancy, system integration, and security infrastructure across East Africa.',
      keywords: 'KiliGrid Technology, IT company Tanzania, technology partner Dar es Salaam, IT consultancy firm, system integration Tanzania, enterprise IT solutions, technology company East Africa, IT services provider, business technology partner'
    },
    sw: {
      title: 'Kuhusu Sisi - Mtoa Huduma Mkuu wa Suluhisho za IT',
      description: 'KiliGrid Technology ni mshirika wa IT wa kuaminika Tanzania, iliyochochewa na nguvu na uaminifu wa Mlima Kilimanjaro. Tunatoa ushauri wa kitaalamu wa IT, uunganishaji wa mifumo, na miundombinu ya usalama Afrika Mashariki.',
      keywords: 'KiliGrid Technology, kampuni ya IT Tanzania, mshirika wa teknolojia Dar es Salaam, kampuni ya ushauri wa IT, uunganishaji wa mifumo Tanzania, suluhisho za IT za biashara, kampuni ya teknolojia Afrika Mashariki'
    }
  },
  contact: {
    en: {
      title: 'Contact Us - Free IT Consultation',
      description: 'Get in touch with KiliGrid Technology for professional IT consultancy, ERP implementation, and infrastructure solutions. Free consultation available for businesses in Tanzania and globally.',
      keywords: 'contact IT company Tanzania, free IT consultation, ERP consultation Tanzania, IT support contact, technology consultation Dar es Salaam, business IT inquiry, enterprise solutions contact, IT project consultation'
    },
    sw: {
      title: 'Wasiliana Nasi - Ushauri wa Bure wa IT',
      description: 'Wasiliana na KiliGrid Technology kwa ushauri wa kitaalamu wa IT, utekelezaji wa ERP, na suluhisho za miundombinu. Ushauri wa bure unapatikana kwa biashara Tanzania na kimataifa.',
      keywords: 'wasiliana kampuni ya IT Tanzania, ushauri wa bure wa IT, ushauri wa ERP Tanzania, wasiliana msaada wa IT, ushauri wa teknolojia Dar es Salaam, ombi la IT la biashara'
    }
  }
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KiliGrid Technology',
  url: 'https://kiligridtech.com',
  logo: 'https://kiligridtech.com/KiliGrid.png',
  description: 'Leading IT solutions provider in Tanzania specializing in ERP systems, network infrastructure, AI integration, and enterprise technology solutions.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dar es Salaam',
    addressCountry: 'TZ'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    availableLanguage: ['English', 'Swahili']
  },
  sameAs: [
    'https://www.linkedin.com/company/kiligrid-technology'
  ]
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://kiligridtech.com',
  name: 'KiliGrid Technology',
  image: 'https://kiligridtech.com/KiliGrid.png',
  description: 'Professional IT consultancy and infrastructure solutions in Dar es Salaam, Tanzania',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dar es Salaam',
    addressRegion: 'Dar es Salaam',
    addressCountry: 'Tanzania'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.7924,
    longitude: 39.2083
  },
  url: 'https://kiligridtech.com',
  telephone: '+255 744 862 577',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00'
  }
};

