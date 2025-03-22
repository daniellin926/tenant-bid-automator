
import { ArrowRight, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsDisplay from './StatsDisplay';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-6 lg:px-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-70 z-0"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-40 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-80 -left-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8">
            <span className="inline-flex items-center py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit animate-fade-in">
              Property Management Simplified
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight animate-slide-up">
              Automate <br/>
              <span className="text-primary">Maintenance Requests</span><br/>
              From Start to Finish
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
              Your all-in-one platform that handles tenant maintenance requests, 
              contractor bidding, scheduling, and follow-ups—automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Button className="rounded-full py-6 px-7 text-base bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* New Stats Display component */}
            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <StatsDisplay />
            </div>
          </div>
          
          {/* Main UI mockup */}
          <div className="relative flex justify-center items-center">
            {/* Main UI mockup */}
            <div className="relative w-full max-w-lg rounded-2xl shadow-glass overflow-hidden animate-slide-in-right backdrop-blur-sm">
              <div className="aspect-[9/16] relative bg-white rounded-2xl overflow-hidden shadow-subtle">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
