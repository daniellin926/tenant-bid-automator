
import { ArrowDown, Check, Clock, Wallet, BarChart } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Bidding = () => {
  return (
    <PageTemplate 
      title="Automated Bidding System" 
      subtitle="Let contractors compete for your maintenance jobs automatically"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">How Our Bidding Works</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Instant Notifications</h3>
                  <p className="text-gray-600">
                    When a maintenance request is approved, our system immediately notifies qualified contractors in the area.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Wallet className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">
                    Contractors submit their bids, knowing they're competing against others, which naturally drives better pricing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Smart Ranking</h3>
                  <p className="text-gray-600">
                    Our algorithm ranks bids based on price, contractor ratings, response time, and availability to recommend the best option.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-6">The Bidding Process</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Step 1</span>
                    <ArrowDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-700">Request is approved and automatically sent to qualified contractors</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Step 2</span>
                    <ArrowDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-700">Contractors review job details and submit their competitive bids</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Step 3</span>
                    <ArrowDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-700">System ranks bids and presents the best options to property owners</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Complete</span>
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-gray-700">Owner approves bid and scheduling begins automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-8 text-white mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Save 15-30% on Maintenance Costs</h2>
          <p className="mb-8">
            Our customers report significant savings on property maintenance costs after implementing our automated bidding system.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/signup">Start Saving Today</Link>
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Bidding;
