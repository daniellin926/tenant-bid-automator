
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  return (
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
              <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
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
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link 
                to="/pricing/landlords" 
                className={cn(
                  "text-sm font-medium group transition-colors inline-flex items-center h-10 px-4 py-2",
                  isScrolled ? "text-gray-800" : "text-gray-700"
                )}
              >
                Pricing
              </Link>
            </NavigationMenuLink>
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
  );
};

export default DesktopNav;
