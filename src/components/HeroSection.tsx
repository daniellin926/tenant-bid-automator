
import { ArrowRight, Building, Tools, Timer, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedIcon from './AnimatedIcon';

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
              <Button variant="outline" className="rounded-full py-6 px-7 text-base">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-5 pt-2 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">800+ properties</span> are managing maintenance with TenantBid
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            {/* Main UI mockup */}
            <div className="relative w-full max-w-lg rounded-2xl shadow-glass overflow-hidden animate-slide-in-right backdrop-blur-sm">
              <div className="aspect-[9/16] relative bg-white rounded-2xl overflow-hidden shadow-subtle">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
                
                {/* App UI mockup content */}
                <div className="absolute inset-0 flex flex-col p-4">
                  <div className="flex justify-between items-center pb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Maintenance Dashboard</h3>
                      <p className="text-xs text-gray-500">Property Manager View</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                  </div>
                  
                  <div className="mt-2 flex flex-col space-y-3">
                    {/* Status cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 p-3 rounded-xl">
                        <p className="text-xs text-blue-700">New Requests</p>
                        <p className="text-xl font-bold text-blue-900">12</p>
                      </div>
                      <div className="bg-amber-50 p-3 rounded-xl">
                        <p className="text-xs text-amber-700">Pending Bids</p>
                        <p className="text-xl font-bold text-amber-900">8</p>
                      </div>
                    </div>
                    
                    {/* Request items */}
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Requests</h4>
                      <div className="space-y-2">
                        {[
                          { title: "Leaking Faucet", status: "Scheduled", unit: "Apt 304" },
                          { title: "HVAC Repair", status: "Bidding", unit: "Apt 201" },
                          { title: "Broken Window", status: "New", unit: "Apt 115" },
                        ].map((item, i) => (
                          <div key={i} className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                            <div>
                              <p className="font-medium text-sm">{item.title}</p>
                              <p className="text-xs text-gray-500">{item.unit}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.status === "Scheduled" ? "bg-green-100 text-green-800" :
                              item.status === "Bidding" ? "bg-amber-100 text-amber-800" :
                              "bg-blue-100 text-blue-800"
                            }`}>
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating UI elements */}
            <AnimatedIcon 
              icon={<Tools size={24} className="text-blue-600" />}
              className="absolute -left-4 top-1/4"
              animation="float"
              delay={200}
            />
            
            <AnimatedIcon 
              icon={<Building size={24} className="text-purple-600" />}
              className="absolute -right-4 top-1/3"
              animation="float"
              delay={400}
            />
            
            <AnimatedIcon 
              icon={<Timer size={24} className="text-green-600" />}
              className="absolute left-1/4 -bottom-4"
              animation="float"
              delay={600}
            />
            
            <AnimatedIcon 
              icon={<CheckCircle size={24} className="text-amber-600" />}
              className="absolute right-1/4 -bottom-6"
              animation="float"
              delay={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
