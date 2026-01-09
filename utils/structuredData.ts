export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider || 'KiliGrid Technology'
    },
    areaServed: {
      '@type': 'Place',
      name: service.areaServed || 'Tanzania'
    },
    serviceType: 'IT Services'
  };
};

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || 'https://kiligridtech.com/KiliGrid.png',
    brand: {
      '@type': 'Brand',
      name: product.brand || 'KiliGrid Technology'
    }
  };
};

export const generateWebPageSchema = (page: {
  name: string;
  description: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url,
    publisher: {
      '@type': 'Organization',
      name: 'KiliGrid Technology',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kiligridtech.com/KiliGrid.png'
      }
    }
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image || 'https://kiligridtech.com/KiliGrid.png',
    datePublished: article.datePublished || new Date().toISOString(),
    dateModified: article.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: article.author || 'KiliGrid Technology'
    },
    publisher: {
      '@type': 'Organization',
      name: 'KiliGrid Technology',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kiligridtech.com/KiliGrid.png'
      }
    }
  };
};

export const generateOfferCatalogSchema = (services: string[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'KiliGrid Technology Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service
      }
    }))
  };
};

export const combineSchemas = (...schemas: object[]) => {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas
  };
};

