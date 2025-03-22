
import { ArrowRight, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsDisplay from './StatsDisplay';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-12 px-6 lg:px-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-70 z-0"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-40 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-80 -left-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit animate-fade-in">
            Property Management Simplified
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight animate-slide-up mt-8">
            Automate <br />
            <span className="text-primary">Maintenance Requests</span><br />
            From Start to Finish
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-xl animate-slide-up mt-8" style={{
            animationDelay: '100ms'
          }}>
            Your all-in-one platform that handles tenant maintenance requests, 
            contractor bidding, scheduling, and follow-ups—automatically.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-8 animate-slide-up" style={{
            animationDelay: '200ms'
          }}>
            <Button className="rounded-full py-6 px-7 text-base bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats Display component */}
          <div className="animate-slide-up mt-8 w-full max-w-3xl" style={{
            animationDelay: '300ms'
          }}>
            <StatsDisplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
