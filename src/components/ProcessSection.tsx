import { useEffect, useRef, useState } from 'react';
import { FileText, Inbox, Users, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);

        // Start the step animation sequence
        animateSteps();
      }
    }, {
      threshold: 0.1
    });
    observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  const animateSteps = () => {
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep = (currentStep + 1) % steps.length;
      setActiveStep(currentStep);
      if (currentStep === steps.length - 1) {
        clearInterval(interval);

        // Reset after 3 seconds and restart
        setTimeout(() => {
          setActiveStep(0);
          animateSteps();
        }, 3000);
      }
    }, 3000);
    return () => clearInterval(interval);
  };
  return <section id="process" className="py-20 px-6 lg:px-0 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-gradient-radial from-blue-50 to-transparent opacity-50 z-0"></div>
      
      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10 entrance-animation">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
            Seamless Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How mAIntenants Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our automated system handles the entire maintenance workflow, eliminating manual coordination.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Process steps */}
          <div className="space-y-8">
            {steps.map((step, index) => <ProcessStep key={index} number={index + 1} title={step.title} description={step.description} icon={step.icon} isActive={index === activeStep} onClick={() => setActiveStep(index)} />)}
          </div>
          
          {/* Process illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-elevation relative border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
              
              <div className="relative z-10">
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Maintenance Process</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md">
                    {activeStep + 1}/{steps.length}
                  </span>
                </div>
                
                <div className="aspect-video bg-gray-100 rounded-xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {steps[activeStep].illustration}
                  </div>
                </div>
                
                <div className="flex space-x-2 mb-4">
                  {steps.map((_, i) => <div key={i} className={cn("h-1 rounded-full transition-all duration-300", i === activeStep ? "bg-primary w-10" : "bg-gray-200 w-5")} onClick={() => setActiveStep(i)}></div>)}
                </div>
                
                <h4 className="text-xl font-semibold mb-2">{steps[activeStep].title}</h4>
                <p className="text-gray-600">{steps[activeStep].description}</p>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-50 rounded-full opacity-70"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-purple-50 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>;
};
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}
const ProcessStep = ({
  number,
  title,
  description,
  icon,
  isActive = false,
  onClick
}: ProcessStepProps) => {
  return <div className={cn("group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300", isActive ? "bg-white shadow-subtle" : "hover:bg-white/50 cursor-pointer")} onClick={onClick}>
      <div className={cn("flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-white transition-all duration-300", isActive ? "bg-primary" : "bg-gray-300 group-hover:bg-gray-400")}>
        {number}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-2">
          <div className={cn("w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-300", isActive ? "text-primary" : "text-gray-400 group-hover:text-gray-500")}>
            {icon}
          </div>
          
          <h3 className={cn("font-semibold transition-colors duration-300", isActive ? "text-primary" : "text-gray-700")}>
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600">{description}</p>
      </div>
    </div>;
};
const steps = [{
  title: "Tenant Submits Request",
  description: "Tenant details the issue and uploads photos through a simple interface.",
  icon: <FileText size={20} />,
  illustration: <div className="w-full h-full bg-blue-50 flex flex-col items-center justify-center p-5">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
          <FileText size={24} className="text-blue-600" />
        </div>
        <div className="w-3/4 h-4 bg-white rounded-full mb-2"></div>
        <div className="w-1/2 h-4 bg-white rounded-full"></div>
      </div>
}, {
  title: "System Classifies & Routes",
  description: "AI categorizes the request and determines the right contractors for the job.",
  icon: <Inbox size={20} />,
  illustration: <div className="w-full h-full bg-purple-50 flex flex-col items-center justify-center p-5">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
          <Inbox size={24} className="text-purple-600" />
        </div>
        <div className="flex space-x-2 mb-4">
          <div className="w-4 h-4 bg-purple-200 rounded-full"></div>
          <ArrowRight size={16} className="text-purple-300" />
          <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
          <ArrowRight size={16} className="text-purple-400" />
          <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
        </div>
        <div className="w-3/4 h-4 bg-white rounded-full"></div>
      </div>
}, {
  title: "Contractors Submit Bids",
  description: "Qualified contractors receive the request and send competitive bids.",
  icon: <Users size={20} />,
  illustration: <div className="w-full h-full bg-green-50 flex flex-col items-center justify-center p-5">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
          <Users size={24} className="text-green-600" />
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-8 h-8 bg-white rounded-full shadow-sm"></div>
          <div className="w-8 h-8 bg-white rounded-full shadow-sm"></div>
          <div className="w-8 h-8 bg-white rounded-full shadow-sm"></div>
        </div>
        <div className="w-3/4 h-4 bg-white rounded-full"></div>
      </div>
}, {
  title: "Automatic Scheduling",
  description: "System schedules the job based on tenant and contractor availability.",
  icon: <Calendar size={20} />,
  illustration: <div className="w-full h-full bg-amber-50 flex flex-col items-center justify-center p-5">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
          <Calendar size={24} className="text-amber-600" />
        </div>
        <div className="grid grid-cols-4 gap-1 mb-4">
          {Array(8).fill(0).map((_, i) => <div key={i} className={`w-8 h-8 rounded-md flex items-center justify-center ${[2, 5].includes(i) ? 'bg-amber-200' : 'bg-white'}`}>
              {i + 1}
            </div>)}
        </div>
        <div className="w-1/2 h-4 bg-white rounded-full"></div>
      </div>
}, {
  title: "Work Completion & Verification",
  description: "Tenants verify the work and provide feedback through the platform.",
  icon: <CheckCircle size={20} />,
  illustration: <div className="w-full h-full bg-red-50 flex flex-col items-center justify-center p-5">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
          <CheckCircle size={24} className="text-red-600" />
        </div>
        <div className="w-24 h-6 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-xs text-green-600">Completed</span>
        </div>
        <div className="flex mb-2">
          {Array(5).fill(0).map((_, i) => <div key={i} className="w-5 h-5 text-amber-400">★</div>)}
        </div>
        <div className="w-3/4 h-4 bg-white rounded-full"></div>
      </div>
}];
export default ProcessSection;