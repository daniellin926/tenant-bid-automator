
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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
    <section id="pricing" className="py-16 md:py-20 px-4 md:px-6 lg:px-0 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-50 z-0"></div>
      
      <div 
        ref={sectionRef} 
        className="max-w-7xl mx-auto relative z-10 entrance-animation"
      >
        <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-elevation">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side: Content */}
            <div className="p-6 sm:p-8 md:p-12 xl:p-16 flex flex-col justify-center">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4 md:mb-6">
                Get Started Today
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6">
                Transform Your Maintenance Process
              </h2>
              
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                Join hundreds of property managers who have simplified their operations and reduced maintenance costs by up to 30%.
              </p>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={isMobile ? 16 : 20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
              
              <div>
                <Button className="rounded-full py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-8 text-sm md:text-base bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg group w-full sm:w-auto" asChild>
                  <Link to="/signup">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right side: Free Plan Card */}
            <div className="relative bg-gradient-to-br from-blue-50 to-gray-50">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-gradient-radial from-blue-100 to-transparent opacity-80 transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-gradient-radial from-blue-100 to-transparent opacity-60 transform -translate-x-1/3 translate-y-1/3"></div>
              </div>
              
              <div className="relative h-full flex items-center justify-center p-6 sm:p-8">
                {/* Free plan card */}
                <div className="bg-white rounded-xl md:rounded-2xl shadow-glass p-6 md:p-8 w-full max-w-xs md:max-w-sm">
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1">Starter Plan</h3>
                      <p className="text-gray-500 text-xs md:text-sm">Perfect for small landlords</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                      Free
                    </div>
                  </div>
                  
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl md:text-4xl font-bold">Free</span>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">up to 5 units</p>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {starterFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2 md:space-x-3">
                        <CheckCircle size={isMobile ? 14 : 16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full rounded-full py-3 md:py-5 text-sm md:text-base" asChild>
                    <Link to="/signup">
                      Start with Starter
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  "Save up to 15 hours per week on maintenance coordination",
  "Reduce maintenance costs by 20-30% with competitive bidding",
  "Increase tenant satisfaction with faster resolution times",
  "Comprehensive analytics and reporting on all maintenance activities"
];

const starterFeatures = [
  "Up to 5 units",
  "Unlimited maintenance requests",
  "Automated contractor bidding",
  "Basic reporting",
  "Email support"
];

export default CTASection;
