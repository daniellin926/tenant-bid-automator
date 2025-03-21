
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'float' | 'pulse' | 'scale' | 'none';
}

const AnimatedIcon = ({ 
  icon, 
  className, 
  delay = 0,
  animation = 'float' 
}: AnimatedIconProps) => {
  const iconRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = iconRef.current;
    if (!element) return;
    
    const timer = setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimation = () => {
    switch (animation) {
      case 'float':
        return 'animate-float';
      case 'pulse':
        return 'animate-pulse-subtle';
      case 'scale':
        return 'hover:scale-110 transition-transform duration-300';
      default:
        return '';
    }
  };

  return (
    <div 
      ref={iconRef}
      style={{ 
        opacity: 0, 
        transform: 'translateY(20px)', 
        transition: 'opacity 0.5s ease, transform 0.5s ease' 
      }}
      className={cn(
        "flex items-center justify-center bg-white rounded-2xl shadow-subtle p-5",
        getAnimation(),
        className
      )}
    >
      {icon}
    </div>
  );
};

export default AnimatedIcon;
