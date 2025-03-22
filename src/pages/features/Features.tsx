
import { ArrowRight, Clock, Wallet, BarChart, Check, CalendarCheck, BellDot, MessageSquare, ShieldCheck, 
  Star, Calendar, List, User, BadgeDollarSign, Wrench, Thermometer, Zap, Image, AlertTriangle,
  MessageCircle, Bell, ThumbsUp, X, Home } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Features = () => {
  const { toast } = useToast();
  
  const requestFeatures = [
    "Submit maintenance requests with photos and descriptions",
    "Real-time status updates on all requests",
    "In-app messaging with property managers",
    "Automated scheduling of maintenance visits",
    "Request history and documentation",
    "Follow-up surveys and feedback forms"
  ];
  
  const communicationFeatures = [
    "Real-time push notifications for new maintenance requests",
    "One-click approval or denial with comment option",
    "Automated SMS and email alerts for important updates",
    "Contractor arrival estimates and scheduling updates",
    "Communication history for all maintenance requests",
    "Customizable notification preferences"
  ];

  const showDemoToast = () => {
    toast({
      title: "New Maintenance Request",
      description: "Leaking faucet in Unit 302 - Urgent",
      action: (
        <div className="flex gap-2 mt-2">
          <Button variant="default" size="sm" onClick={() => 
            toast({ title: "Request Approved", description: "Contractor will be notified" })
          }>
            Approve
          </Button>
          <Button variant="outline" size="sm" onClick={() => 
            toast({ title: "Request Denied", description: "Tenant has been notified" })
          }>
            Deny
          </Button>
        </div>
      ),
    });
  };

  return (
    <PageTemplate 
      title="Welcome to mAIntenants"
      subtitle="Our AI-powered maintenance management platform"
    >
      {/* Bidding System Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Automated Bidding System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
                    <h3 className="font-medium text-lg">Review Contractor Bids</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">3 Bids Available</span>
                  </div>
                  <div className="flex items-center text-sm mb-4">
                    <Wrench className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-gray-700 mr-4">Bathroom Sink Repair</span>
                    <Clock className="h-4 w-4 text-orange-500 mr-1" />
                    <span className="text-orange-600">Priority: High</span>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[180px]">Contractor</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Availability</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-green-50 border-l-2 border-green-500">
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                              <User className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <div>Bob's Plumbing</div>
                              <div className="flex items-center text-xs text-yellow-500">
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5" />
                                <span className="text-gray-500 ml-1">(127)</span>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-bold text-green-700">$95</TableCell>
                        <TableCell className="text-right">Today, 2-4PM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                              <User className="h-4 w-4 text-purple-600" />
                            </div>
                            <div>
                              <div>Pro Plumbing</div>
                              <div className="flex items-center text-xs text-yellow-500">
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5 text-gray-300" />
                                <span className="text-gray-500 ml-1">(82)</span>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">$120</TableCell>
                        <TableCell className="text-right">Tomorrow, 9-12AM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <div className="bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                              <User className="h-4 w-4 text-amber-600" />
                            </div>
                            <div>
                              <div>City Repairs</div>
                              <div className="flex items-center text-xs text-yellow-500">
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5" />
                                <Star className="h-3 w-3 mr-0.5 text-gray-300" />
                                <Star className="h-3 w-3 mr-0.5 text-gray-300" />
                                <span className="text-gray-500 ml-1">(43)</span>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">$115</TableCell>
                        <TableCell className="text-right">Today, 5-7PM</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="default" size="sm">Select Bob's Plumbing</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Request System Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Maintenance Request System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Effortless Maintenance Requests</h2>
              <p className="text-gray-600">
                Our request system simplifies the process of submitting maintenance issues. 
                With just a few taps, tenants can report problems, attach photos, and track progress 
                from submission to completion.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              {requestFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="aspect-[9/16] bg-gray-50 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col p-4 overflow-y-auto">
                <div className="bg-white rounded-lg shadow-sm p-4 mb-3">
                  <h3 className="font-medium text-lg mb-3">Maintenance Request Form</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="category" className="block text-sm font-medium mb-1">Category</Label>
                      <div className="flex items-center">
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select issue category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plumbing">
                              <div className="flex items-center">
                                <Wrench className="h-4 w-4 mr-2 text-blue-500" />
                                <span>Plumbing</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="heating">
                              <div className="flex items-center">
                                <Thermometer className="h-4 w-4 mr-2 text-red-500" />
                                <span>Heating & Cooling</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="electrical">
                              <div className="flex items-center">
                                <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                                <span>Electrical</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-1">
                        <MessageSquare className="h-4 w-4 mr-1 text-gray-500" />
                        <Label htmlFor="description" className="text-sm font-medium">Description</Label>
                      </div>
                      <Textarea 
                        id="description"
                        placeholder="Please describe the issue in detail..." 
                        className="resize-none"
                      />
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="h-4 w-4 mr-1 text-amber-500" />
                        <Label className="text-sm font-medium">Urgency Level</Label>
                      </div>
                      <RadioGroup defaultValue="normal" className="flex space-x-2">
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="low" id="low" />
                          <Label htmlFor="low" className="text-sm">Low</Label>
                        </div>
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="normal" id="normal" />
                          <Label htmlFor="normal" className="text-sm">Normal</Label>
                        </div>
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label htmlFor="urgent" className="text-sm">Urgent</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button className="w-full mt-2">Submit Request</Button>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">90% reduction in scheduling coordination time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">35% faster maintenance completion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">75% fewer missed appointments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Communication System Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Seamless Communication</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Instant Notifications, Faster Resolutions</h2>
              <p className="text-gray-600 mb-4">
                m<span className="text-primary font-bold">AI</span>ntenants's communication system ensures that every stakeholder stays informed
                throughout the maintenance process. Landlords receive instant notifications about new
                requests with the ability to approve or deny with a single tap.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              {communicationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <Button size="lg" onClick={showDemoToast}>
                <Bell className="mr-2 h-4 w-4" />
                Try Demo Notification
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="aspect-[9/16] bg-gray-50 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col p-4 overflow-y-auto">
                <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Wrench className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="font-medium">New Maintenance Request</span>
                    </div>
                    <span className="text-xs text-gray-500">Just now</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Leaking bathroom faucet in Unit 302. Tenant reports water accumulating.</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex">
                      <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs">Urgent</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="default" className="h-8 text-xs">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 text-xs">
                        <X className="h-3 w-3 mr-1" />
                        Deny
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border-l-4 border-green-500">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-green-500 mr-2" />
                      <span className="font-medium">Contractor Scheduled</span>
                    </div>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Bob's Plumbing will arrive tomorrow between 1-3 PM to fix your bathroom faucet.</p>
                  <div className="flex items-center text-sm mb-2 bg-gray-50 p-2 rounded">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span>Thursday, June 20 • 1:00 PM - 3:00 PM</span>
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
