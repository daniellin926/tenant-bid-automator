
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import VideoPlayer from './VideoPlayer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
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
          <Link to="/" className="flex items-center space-x-1">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className={cn(
              "font-medium text-lg transition-colors", 
              isScrolled ? "text-gray-900" : "text-gray-800"
            )}>
              m<span className="text-primary font-bold">AI</span>ntenants
            </span>
          </Link>
        </div>
        
        {/* Desktop navigation with dropdowns */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "text-sm font-medium group transition-colors",
                  isScrolled ? "text-gray-800" : "text-gray-700"
                )}>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    <li className="col-span-2">
                      <NavigationMenuLink asChild>
                        <Link to="/features" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">All Features</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore our complete maintenance management platform
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="col-span-2">
                      <hr className="my-2" />
                    </li>
                    <li>
                      <div className="block select-none space-y-1 rounded-md p-3">
                        <div className="text-sm font-medium leading-none">Request System</div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Submit and track maintenance requests
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="block select-none space-y-1 rounded-md p-3">
                        <div className="text-sm font-medium leading-none">Bidding</div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Automated contractor bidding
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="block select-none space-y-1 rounded-md p-3">
                        <div className="text-sm font-medium leading-none">Scheduling</div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Intelligent maintenance scheduling
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="block select-none space-y-1 rounded-md p-3">
                        <div className="text-sm font-medium leading-none">Communication</div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Automatic updates and notifications
                        </p>
                      </div>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "text-sm font-medium group transition-colors",
                  isScrolled ? "text-gray-800" : "text-gray-700"
                )}>How It Works</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/process/tenants" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">For Tenants</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            How to submit and track maintenance requests
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/process/landlords" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">For Landlords</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            How to manage properties and maintenance
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/process/contractors" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">For Contractors</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            How to receive and bid on jobs
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "text-sm font-medium group transition-colors",
                  isScrolled ? "text-gray-800" : "text-gray-700"
                )}>Pricing</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/pricing/landlords" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Landlord Plans</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Pricing plans for property owners
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/pricing/contractors" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Contractor Plans</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Pricing for maintenance providers
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/pricing/enterprise" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Enterprise</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Custom solutions for large portfolios
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/pricing/comparison" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Compare Plans</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Side-by-side feature comparison
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="rounded-full px-5 py-2 h-auto" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="rounded-full px-5 py-2 h-auto bg-primary hover:bg-primary/90 transition-all" asChild>
              <Link to="/signup">Get Started</Link>
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
            <MobileNavLink href="/features" onClick={toggleMobileMenu}>Features</MobileNavLink>
            <MobileNavLink href="/process/tenants" onClick={toggleMobileMenu}>How It Works</MobileNavLink>
            <MobileNavLink href="/pricing/landlords" onClick={toggleMobileMenu}>Pricing</MobileNavLink>
            
            <div className="flex flex-col w-full space-y-4 pt-4">
              <Button variant="outline" className="rounded-full py-6" asChild>
                <Link to="/login" onClick={toggleMobileMenu}>Log In</Link>
              </Button>
              <Button className="rounded-full py-6 bg-primary hover:bg-primary/90" asChild>
                <Link to="/signup" onClick={toggleMobileMenu}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Video Dialog */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden">
            <button 
              className="absolute top-4 right-4 z-10 rounded-full h-10 w-10 flex items-center justify-center bg-black/50 text-white hover:bg-black/70"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <VideoPlayer playing={isVideoOpen} onEnded={() => setIsVideoOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  isScrolled?: boolean;
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
  <Link 
    to={href} 
    onClick={onClick}
    className="text-xl font-medium py-2 w-full text-center text-gray-800 hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;
