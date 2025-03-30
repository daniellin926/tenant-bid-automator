
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavBrandProps {
  isScrolled: boolean;
}

const NavBrand = ({ isScrolled }: NavBrandProps) => {
  return (
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
  );
};

export default NavBrand;
