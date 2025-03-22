
import { ArrowDown, Check, Clock, Wallet, BarChart, BadgeDollarSign, ShieldCheck, MessageSquare, Star, Calendar, List, User } from 'lucide-react';
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

      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Landlord Bid Management</h2>
            <p className="text-gray-600 mb-6">
              As a landlord, you'll receive ranked bids for all maintenance requests. Our smart algorithm considers pricing, contractor ratings, and response times to recommend the best option.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <List className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Transparent Bid Comparison</h4>
                  <p className="text-sm text-gray-600">See all bids side-by-side with key information highlighted</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Verified Contractors Only</h4>
                  <p className="text-sm text-gray-600">All bidding contractors are pre-vetted and insured</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <BadgeDollarSign className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Best Price Guarantee</h4>
                  <p className="text-sm text-gray-600">Competitive bidding ensures you get the best market rates</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Direct Communication</h4>
                  <p className="text-sm text-gray-600">Message contractors directly to ask questions before accepting</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="aspect-[9/16] bg-gray-50 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col p-4 overflow-y-auto">
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-lg">Bids for Repair Request #4872</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">3 Bids</span>
                  </div>
                  <div className="flex items-center text-sm mb-4">
                    <Wallet className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-gray-700 mr-4">Leaking Kitchen Sink</span>
                    <Clock className="h-4 w-4 text-orange-500 mr-1" />
                    <span className="text-orange-600">Urgent</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border border-green-200 rounded-md p-3 bg-green-50">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">Bob's Plumbing</div>
                            <div className="flex items-center text-xs">
                              <Star className="h-3 w-3 text-yellow-500 mr-1" />
                              <span className="mr-1">4.9</span>
                              <span className="text-gray-500">(127 jobs)</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-green-700">$95</div>
                      </div>
                      
                      <div className="flex items-center gap-4 my-2 text-xs">
                        <div className="flex items-center">
                          <ShieldCheck className="h-3 w-3 text-blue-600 mr-1" />
                          <span>Verified</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 text-gray-600 mr-1" />
                          <span>Available Today</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-600 mb-3">
                        "I can fix your kitchen sink leak today. I've handled similar issues in your building before."
                      </p>
                      
                      <div className="flex justify-between">
                        <Button size="sm" variant="outline" className="text-xs h-8">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="default" className="text-xs h-8">
                          <Check className="h-3 w-3 mr-1" />
                          Accept Bid
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                            <User className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium">Pro Plumbing Services</div>
                            <div className="flex items-center text-xs">
                              <Star className="h-3 w-3 text-yellow-500 mr-1" />
                              <span className="mr-1">4.7</span>
                              <span className="text-gray-500">(82 jobs)</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-lg font-bold">$120</div>
                      </div>
                      
                      <div className="flex items-center gap-4 my-2 text-xs">
                        <div className="flex items-center">
                          <ShieldCheck className="h-3 w-3 text-blue-600 mr-1" />
                          <span>Verified</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 text-gray-600 mr-1" />
                          <span>Tomorrow, 10am-2pm</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-600 mb-3">
                        "Can fix this tomorrow morning. Will bring all parts needed and provide 90-day warranty."
                      </p>
                      
                      <div className="flex justify-between">
                        <Button size="sm" variant="outline" className="text-xs h-8">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs h-8">
                          <Check className="h-3 w-3 mr-1" />
                          Accept Bid
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                            <User className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <div className="font-medium">Quick Fix Plumbing</div>
                            <div className="flex items-center text-xs">
                              <Star className="h-3 w-3 text-yellow-500 mr-1" />
                              <span className="mr-1">4.5</span>
                              <span className="text-gray-500">(43 jobs)</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-lg font-bold">$135</div>
                      </div>
                      
                      <div className="flex items-center gap-4 my-2 text-xs">
                        <div className="flex items-center">
                          <ShieldCheck className="h-3 w-3 text-blue-600 mr-1" />
                          <span>Verified</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 text-gray-600 mr-1" />
                          <span>Today, After 5pm</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-600 mb-3">
                        "Available for evening repair today. Have extensive experience with kitchen plumbing issues."
                      </p>
                      
                      <div className="flex justify-between">
                        <Button size="sm" variant="outline" className="text-xs h-8">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs h-8">
                          <Check className="h-3 w-3 mr-1" />
                          Accept Bid
                        </Button>
                      </div>
                    </div>
                  </div>
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
