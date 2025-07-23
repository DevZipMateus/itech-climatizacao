
import React, { useEffect, memo } from 'react';
import { useIsMobile } from '@/hooks/use-mobile'; 
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import FloatingButton from '@/components/ui/FloatingButton';
import { OptimizedMotion } from '@/components/ui/OptimizedMotion';

const IndexContent = memo(() => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Optimized smooth scroll function
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            const offset = isMobile ? 60 : 80;
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
    };
  }, [isMobile]);

  return (
    <OptimizedMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <Header />
      <main className="space-y-0">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <FloatingButton />
      <Footer />
    </OptimizedMotion>
  );
});

IndexContent.displayName = 'IndexContent';

const Index = () => {
  return <IndexContent />;
};

export default Index;
