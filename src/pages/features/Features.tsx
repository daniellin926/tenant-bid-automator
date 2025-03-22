
import { ArrowRight, Clock, Wallet, BarChart, Check, CalendarCheck, BellDot, MessageSquare, ShieldCheck, Star, Calendar, List, User, BadgeDollarSign } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const Features = () => {
  return (
    <PageTemplate 
      title={<span>Welcome to <span className="font-bold">M<span className="text-blue-600">AI</span>NTEN<span className="text-blue-600">A</span>NTS</span></span>} 
      subtitle="Our AI-powered maintenance management platform"
    >
      {/* Request System Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Maintenance Request System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-6">
              Our intelligent request system streamlines the entire maintenance process from initial report to completion. 
              Tenants submit detailed requests while landlords enjoy complete visibility and control.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Structured Request Forms</h4>
                  <p className="text-sm text-gray-600">Capture all necessary details with customizable forms</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Photo Evidence</h4>
                  <p className="text-sm text-gray-600">Tenants can attach photos to clarify maintenance issues</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Priority Levels</h4>
                  <p className="text-sm text-gray-600">Automatically flag urgent requests for immediate attention</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Real-time Updates</h4>
                  <p className="text-sm text-gray-600">All parties receive status updates as work progresses</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b">
              <h3 className="font-medium">Submit Maintenance Request</h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>HVAC</option>
                  <option>Appliance</option>
                  <option>Structural</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  rows={4}
                  placeholder="Please describe the issue in detail..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Urgency Level</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="urgency" className="mr-1" />
                    <span className="text-sm">Low</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="urgency" className="mr-1" defaultChecked />
                    <span className="text-sm">Medium</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="urgency" className="mr-1" />
                    <span className="text-sm">High</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="urgency" className="mr-1" />
                    <span className="text-sm">Emergency</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Attach Photo</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center">
                  <p className="text-sm text-gray-500">Drag and drop a photo or</p>
                  <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">Browse files</button>
                </div>
              </div>
              
              <Button className="w-full">Submit Request</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bidding System Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Automated Bidding System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
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
            <div className="aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col p-4 overflow-y-auto">
                <div className="bg-white rounded-lg shadow-sm p-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Smart Scheduling Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Smart Scheduling</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-gray-600 mb-8">
              Our intelligent scheduling system coordinates between tenants and contractors 
              automatically, finding optimal times that work for everyone without the endless 
              back-and-forth communication.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 text-blue-500">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium mb-2">Tenant Availability</h3>
                <p className="text-gray-600">
                  Tenants mark their preferred time slots directly in the app, indicating when 
                  they're available for maintenance visits.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 text-purple-500">
                  <CalendarCheck className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium mb-2">Contractor Scheduling</h3>
                <p className="text-gray-600">
                  Contractors sync their work calendars with our system, showing their real-time 
                  availability for new jobs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 relative">
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-50 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">90% reduction in scheduling coordination time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">35% faster maintenance completion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">75% fewer missed appointments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Communication System Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Smart Communication</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-6">
              Our communication platform keeps everyone in the loop automatically. Landlords receive 
              instant notifications for maintenance requests with approve/deny options, while tenants 
              and contractors get real-time updates on scheduling and progress.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Instant Notifications</h4>
                  <p className="text-sm text-gray-600">Receive real-time alerts via app or SMS for critical updates</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <BadgeDollarSign className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">One-Click Approvals</h4>
                  <p className="text-sm text-gray-600">Landlords can approve requests and bids with a single tap</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <BellDot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Scheduling Updates</h4>
                  <p className="text-sm text-gray-600">Everyone stays informed about upcoming maintenance visits</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 mt-0.5">
                  <List className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Threaded Conversations</h4>
                  <p className="text-sm text-gray-600">All communication organized by maintenance request</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">New Maintenance Request</h3>
                      <span className="text-xs text-gray-500">Just now</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Unit 204 has reported a leaking kitchen faucet. Priority: Medium
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        View Details
                      </Button>
                      <Button size="sm" variant="default" className="text-xs h-8">
                        <Check className="h-3 w-3 mr-1" />
                        Approve
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Contractor Scheduled</h3>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Bob's Plumbing will arrive at Unit 112 tomorrow between 1-3pm for sink repair.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Maintenance Completed</h3>
                      <span className="text-xs text-gray-500">Yesterday</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      HVAC repair in Unit 305 has been completed. Awaiting tenant confirmation.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        View Report
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button size="sm" variant="outline" className="text-xs">
                      See All Notifications
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-8 text-white mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">All-in-One Maintenance Solution</h2>
          <p className="mb-8">
            Our customers report significant savings on property maintenance costs and time after implementing our AI-powered platform.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/signup">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Features;
