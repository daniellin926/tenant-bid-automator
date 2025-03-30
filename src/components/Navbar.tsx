
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

// Import refactored components
import NavBrand from './navbar/NavBrand';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import VideoOverlay from './navbar/VideoOverlay';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-subtle" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavBrand isScrolled={isScrolled} />
        <DesktopNav isScrolled={isScrolled} />
        <MobileNav />
      </div>
      
      <VideoOverlay 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
