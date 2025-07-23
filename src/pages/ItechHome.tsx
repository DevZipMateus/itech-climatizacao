
import { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ItechHeader from '@/components/layout/ItechHeader';
import ItechFooter from '@/components/layout/ItechFooter';
import ItechHero from '@/components/sections/ItechHero';
import ItechAbout from '@/components/sections/ItechAbout';
import ItechServices from '@/components/sections/ItechServices';
import ItechTestimonials from '@/components/sections/ItechTestimonials';
import ItechLocation from '@/components/sections/ItechLocation';
import ItechContact from '@/components/sections/ItechContact';
import ItechWhatsAppFloat from '@/components/ui/ItechWhatsAppFloat';
import { motion } from 'framer-motion';

const ItechHome = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Smooth scroll function for anchor links
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            const offset = isMobile ? 80 : 100;
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - offset,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick);
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
    };
  }, [isMobile]);

  // SEO Meta Tags
  useEffect(() => {
    document.title = 'ITECH CLIMATIZAÇÃO - Padrão e Qualidade em Climatização | Campo Maior - PI';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ITECH CLIMATIZAÇÃO - Especialistas em instalação, manutenção e higienização de ar condicionado em Campo Maior - PI. Padrão e qualidade garantidos. Orçamento gratuito!');
    }

    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: 'ITECH CLIMATIZAÇÃO - Padrão e Qualidade em Climatização' },
      { property: 'og:description', content: 'Especialistas em instalação, manutenção e higienização de ar condicionado. Atendimento de qualidade em Campo Maior - PI.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/lovable-uploads/89c16695-607f-4db1-9560-bb556d3aabe1.png' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'ITECH CLIMATIZAÇÃO' },
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Twitter Card Tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'ITECH CLIMATIZAÇÃO - Padrão e Qualidade em Climatização' },
      { name: 'twitter:description', content: 'Especialistas em instalação, manutenção e higienização de ar condicionado. Atendimento de qualidade em Campo Maior - PI.' },
      { name: 'twitter:image', content: '/lovable-uploads/89c16695-607f-4db1-9560-bb556d3aabe1.png' },
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <ItechHeader />
      <main>
        <ItechHero />
        <ItechAbout />
        <ItechServices />
        <ItechTestimonials />
        <ItechLocation />
        <ItechContact />
      </main>
      <ItechWhatsAppFloat />
      <ItechFooter />
    </motion.div>
  );
};

export default ItechHome;
