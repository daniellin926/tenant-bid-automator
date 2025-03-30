
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNavItem, MobileNavSubItem } from './MobileNavItems';

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Menu"
            className="text-gray-700"
          >
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="pt-10 w-full max-w-full sm:max-w-sm">
          <div className="flex flex-col items-start justify-start h-full space-y-6 p-0">
            <div className="w-full">
              <Link 
                to="/features" 
                className="block w-full text-lg font-medium text-gray-800 hover:text-primary transition-colors py-3 px-1 border-b pb-3"
              >
                Features
              </Link>
            </div>
            
            <div className="w-full">
              <MobileNavItem href="#" label="How It Works">
                <div className="space-y-3 mt-2 pl-4">
                  <MobileNavSubItem href="/process/tenants" label="For Tenants" />
                  <MobileNavSubItem href="/process/landlords" label="For Landlords" />
                </div>
              </MobileNavItem>
            </div>
            
            <div className="w-full">
              <MobileNavItem href="/pricing/landlords" label="Pricing" />
            </div>
            
            <div className="w-full mt-auto pt-6 border-t space-y-4">
              <Button variant="outline" className="w-full rounded-full py-6" asChild>
                <Link to="/login">Log In</Link>
              </Button>
              <Button className="w-full rounded-full py-6 bg-primary hover:bg-primary/90" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
