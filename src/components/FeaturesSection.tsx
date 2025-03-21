
import { useEffect, useRef } from 'react';
import { ClipboardCheck, Sparkles, Clock, Users, BarChart4, Settings, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="features" className="py-20 px-6 lg:px-0 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-0 top-1/4 w-full h-96 bg-gradient-to-r from-blue-50 to-transparent opacity-70 -skew-y-3 z-0"></div>
      
      <div 
        ref={sectionRef} 
        className="max-w-7xl mx-auto relative z-10 entrance-animation"
      >
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simplify Your Maintenance Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our platform streamlines every step from tenant requests to job completion, 
            saving you time and reducing costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, delay);
      }
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "p-6 bg-white rounded-2xl shadow-subtle border border-gray-100",
        "hover:shadow-elevation transition-shadow duration-300",
        "entrance-animation"
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: <ClipboardCheck size={24} />,
    title: "Smart Request Intake",
    description: "Tenants submit detailed requests with photos through a user-friendly portal or mobile app."
  },
  {
    icon: <Sparkles size={24} />,
    title: "Automated Bid Collection",
    description: "System automatically reaches out to qualified contractors to collect competitive bids."
  },
  {
    icon: <Clock size={24} />,
    title: "Intelligent Scheduling",
    description: "AI-powered scheduling finds optimal times that work for both tenants and contractors."
  },
  {
    icon: <Users size={24} />,
    title: "Vendor Management",
    description: "Track contractor performance, manage credentials, and build a reliable network."
  },
  {
    icon: <BarChart4 size={24} />,
    title: "Comprehensive Analytics",
    description: "Gain insights into maintenance costs, response times, and property performance."
  },
  {
    icon: <Shield size={24} />,
    title: "Compliance Tracking",
    description: "Ensure all maintenance meets regulatory requirements with automated documentation."
  },
];

export default FeaturesSection;
