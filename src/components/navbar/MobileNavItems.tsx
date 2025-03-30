
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileNavItemProps {
  href: string;
  label: string;
  children?: React.ReactNode;
}

export const MobileNavItem = ({ href, label, children }: MobileNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-full border-b pb-3">
      <div className="flex items-center justify-between py-3 px-1">
        <Link 
          to={href} 
          className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
          onClick={children ? (e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          } : undefined}
        >
          {label}
        </Link>
        {children && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="h-8 w-8"
          >
            <ChevronDown className={cn(
              "h-4 w-4 transition-transform",
              isOpen ? "rotate-180" : ""
            )} />
          </Button>
        )}
      </div>
      {isOpen && children}
    </div>
  );
};

interface MobileNavSubItemProps {
  href: string;
  label: string;
}

export const MobileNavSubItem = ({ href, label }: MobileNavSubItemProps) => (
  <Link 
    to={href} 
    className="block text-base text-gray-600 hover:text-primary transition-colors py-2"
  >
    {label}
  </Link>
);
