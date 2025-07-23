
import { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile'; 
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import FloatingButton from '@/components/ui/FloatingButton';
import { motion } from 'framer-motion';

const Index = () => {
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
            const offset = isMobile ? 60 : 80; // Smaller offset for mobile
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <Header />
      <main className="space-y-0"> {/* Removed spacing between sections */}
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <FloatingButton />
      <Footer />
    </motion.div>
  );
};

export default Index;
