
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-subtle" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-white font-bold">TB</span>
          </div>
          <span className={cn(
            "font-medium text-lg transition-colors", 
            isScrolled ? "text-gray-900" : "text-gray-800"
          )}>
            TenantBid
          </span>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
          <NavLink href="#process" isScrolled={isScrolled}>How It Works</NavLink>
          <NavLink href="#pricing" isScrolled={isScrolled}>Pricing</NavLink>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="rounded-full px-5 py-2 h-auto">
              Log In
            </Button>
            <Button className="rounded-full px-5 py-2 h-auto bg-primary hover:bg-primary/90 transition-all">
              Get Started
            </Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Menu"
            onClick={toggleMobileMenu}
            className="text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
            <MobileNavLink href="#features" onClick={toggleMobileMenu}>Features</MobileNavLink>
            <MobileNavLink href="#process" onClick={toggleMobileMenu}>How It Works</MobileNavLink>
            <MobileNavLink href="#pricing" onClick={toggleMobileMenu}>Pricing</MobileNavLink>
            
            <div className="flex flex-col w-full space-y-4 pt-4">
              <Button variant="outline" className="rounded-full py-6">
                Log In
              </Button>
              <Button className="rounded-full py-6 bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  isScrolled: boolean;
  children: React.ReactNode;
}

const NavLink = ({ href, isScrolled, children }: NavLinkProps) => (
  <a 
    href={href} 
    className={cn(
      "text-sm font-medium relative group transition-colors",
      isScrolled ? "text-gray-800" : "text-gray-700"
    )}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
  </a>
);

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = ({ href, onClick, children }: MobileNavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-xl font-medium py-2 w-full text-center text-gray-800 hover:text-primary transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
