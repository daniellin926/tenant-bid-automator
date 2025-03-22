
import { ArrowDown, Check, Clock, Wallet, BarChart, User, Star, Calendar, ShieldCheck, MessageSquare } from 'lucide-react';
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
            <h2 className="text-2xl font-semibold mb-6">The Bidding Process</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Step 1: Request Distribution</h3>
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
                  <h3 className="text-lg font-medium mb-2">Step 2: Contractor Bidding</h3>
                  <p className="text-gray-600">
                    Contractors submit their competitive bids, including price, availability, and any relevant notes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Step 3: Smart Ranking</h3>
                  <p className="text-gray-600">
                    Our algorithm ranks bids based on price, contractor ratings, response time, and availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Check className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Step 4: Selection & Scheduling</h3>
                  <p className="text-gray-600">
                    Owner approves the best bid with one click, and scheduling begins automatically.
                  </p>
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
                        <div className="text-lg font-bold text-green-700">95</div>
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
                        <div className="text-lg font-bold">120</div>
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
                        <div className="text-lg font-bold">135</div>
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
