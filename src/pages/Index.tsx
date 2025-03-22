
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import DemoDialog from '@/components/DemoDialog';

const Index = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  
  useEffect(() => {
    // Animation for elements with the entrance-animation class
    const animateElements = () => {
      const elements = document.querySelectorAll('.entrance-animation:not(.animated)');
      
      elements.forEach((element) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.1 }
        );
        
        observer.observe(element);
      });
    };
    
    animateElements();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  const openDemoVideo = () => {
    setIsDemoOpen(true);
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection onWatchDemo={openDemoVideo} />
        <FeaturesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
      <DemoDialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
};

export default Index;
