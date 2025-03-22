import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
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
    <section id="pricing" className="py-20 px-6 lg:px-0 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-50 z-0"></div>
      
      <div 
        ref={sectionRef} 
        className="max-w-7xl mx-auto relative z-10 entrance-animation"
      >
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-elevation">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side: Content */}
            <div className="p-8 md:p-12 xl:p-16 flex flex-col justify-center">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-6">
                Get Started Today
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Transform Your Maintenance Process
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg">
                Join hundreds of property managers who have simplified their operations and reduced maintenance costs by up to 30%.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <div>
                <Button className="rounded-full py-6 px-8 text-base bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg group">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            {/* Right side: Image/Illustration */}
            <div className="relative bg-gradient-to-br from-blue-50 to-gray-50">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-blue-100 to-transparent opacity-80 transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-blue-100 to-transparent opacity-60 transform -translate-x-1/3 translate-y-1/3"></div>
              </div>
              
              <div className="relative h-full flex items-center justify-center p-8">
                {/* Pricing card */}
                <div className="bg-white rounded-2xl shadow-glass p-8 max-w-sm w-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Pro Plan</h3>
                      <p className="text-gray-500 text-sm">Perfect for property managers</p>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">$99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">per property, billed annually</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {planFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full rounded-full py-5">
                    Get Started
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

const planFeatures = [
  "Unlimited maintenance requests",
  "Automated bid collection",
  "Contractor management",
  "Tenant communication portal",
  "Scheduling automation",
  "Analytics dashboard",
  "Email & phone support"
];

export default CTASection;
