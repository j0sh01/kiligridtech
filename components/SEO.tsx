import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  lang?: 'en' | 'sw';
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/KiliGrid.png',
  ogType = 'website',
  canonical,
  lang = 'en',
  structuredData
}) => {
  const location = useLocation();
  const baseUrl = 'https://kiligridtech.com'; // Update with actual domain
  const fullUrl = canonical || `${baseUrl}${location.pathname}`;
  const fullTitle = `${title} | KiliGrid Technology`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    updateMetaTag('author', 'KiliGrid Technology');
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, true);
    updateMetaTag('og:locale', lang === 'en' ? 'en_US' : 'sw_TZ', true);
    updateMetaTag('og:site_name', 'KiliGrid Technology', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Language alternate links
    let alternateLinkEn = document.querySelector('link[hreflang="en"]') as HTMLLinkElement;
    let alternateLinkSw = document.querySelector('link[hreflang="sw"]') as HTMLLinkElement;
    
    if (!alternateLinkEn) {
      alternateLinkEn = document.createElement('link');
      alternateLinkEn.setAttribute('rel', 'alternate');
      alternateLinkEn.setAttribute('hreflang', 'en');
      document.head.appendChild(alternateLinkEn);
    }
    
    if (!alternateLinkSw) {
      alternateLinkSw = document.createElement('link');
      alternateLinkSw.setAttribute('rel', 'alternate');
      alternateLinkSw.setAttribute('hreflang', 'sw');
      document.head.appendChild(alternateLinkSw);
    }
    
    alternateLinkEn.setAttribute('href', fullUrl);
    alternateLinkSw.setAttribute('href', fullUrl);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]#page-schema');
      
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.setAttribute('id', 'page-schema');
        document.head.appendChild(scriptTag);
      }
      
      scriptTag.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, ogType, fullUrl, lang, structuredData, fullTitle]);

  return null;
};

export default SEO;

