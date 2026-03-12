import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
  noindex?: boolean;
}

const SimpleSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://www.studiosbydave.com/og-image.jpg",
  ogType = "website",
  structuredData,
  noindex = false
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = title.includes("Studios by Dave") ? title : `${title} | Studios by Dave`;
    const url = canonical || `https://www.studiosbydave.com${window.location.pathname}`;

    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

    // Robots
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    }

    // Open Graph
    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', description);
    updateMetaTag('og:type', ogType);
    updateMetaTag('og:url', url);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:site_name', 'Studios by Dave');
    updateMetaTag('og:locale', 'en_US');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', '@studiosbydave');

    // Additional SEO Meta Tags
    updateMetaTag('author', 'Studios by Dave');
    updateMetaTag('publisher', 'Studios by Dave');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('format-detection', 'telephone=yes');

    // Geo Tags
    updateMetaTag('geo.region', 'US-NC');
    updateMetaTag('geo.placename', 'Shelby');
    updateMetaTag('geo.position', '35.2901;-81.5357');
    updateMetaTag('ICBM', '35.2901, -81.5357');

    // Structured Data
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Optional: cleanup if needed when component unmounts
    };
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData, noindex]);

  return null; // This component doesn't render anything
};

export default SimpleSEO;
