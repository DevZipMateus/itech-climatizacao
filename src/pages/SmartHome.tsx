
import { lazy, Suspense } from 'react';
import SmartHeader from '@/components/layout/SmartHeader';
import SmartFooter from '@/components/layout/SmartFooter';
import HomeHero from '@/components/sections/HomeHero';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import LazySection from '@/components/ui/LazySection';

// Lazy load das seções não críticas com melhor otimização
const ProblemSolution = lazy(() => import('@/components/sections/ProblemSolution'));
const HomeServices = lazy(() => import('@/components/sections/HomeServices'));
const HowItWorks = lazy(() => import('@/components/sections/HowItWorks'));
const WhyChooseUs = lazy(() => import('@/components/sections/WhyChooseUs'));
const Gallery = lazy(() => import('@/components/sections/Gallery'));
const FinalContact = lazy(() => import('@/components/sections/FinalContact'));

const LoadingFallback = () => (
  <div className="h-20 flex items-center justify-center">
    <div className="animate-pulse text-slate-400">Carregando...</div>
  </div>
);

const SmartHome = () => {
  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <SmartHeader />
      
      {/* Main Content */}
      <main className="relative">
        <div id="home">
          <HomeHero />
        </div>
        
        <LazySection fallback={<LoadingFallback />} threshold={0.2}>
          <ProblemSolution />
        </LazySection>
        
        <div id="services">
          <LazySection fallback={<LoadingFallback />} threshold={0.2}>
            <HomeServices />
          </LazySection>
        </div>
        
        <div id="how-it-works">
          <LazySection fallback={<LoadingFallback />} threshold={0.2}>
            <HowItWorks />
          </LazySection>
        </div>
        
        <LazySection fallback={<LoadingFallback />} threshold={0.2}>
          <WhyChooseUs />
        </LazySection>
        
        <div id="gallery">
          <LazySection fallback={<LoadingFallback />} threshold={0.2}>
            <Gallery />
          </LazySection>
        </div>
        
        <div id="contact">
          <LazySection fallback={<LoadingFallback />} threshold={0.2}>
            <FinalContact />
          </LazySection>
        </div>
      </main>
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
      
      {/* Footer */}
      <SmartFooter />
    </div>
  );
};

export default SmartHome;
