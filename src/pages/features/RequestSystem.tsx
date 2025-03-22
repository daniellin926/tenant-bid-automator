
import { CheckCircle, Wrench, Thermometer, Zap, MessageSquare, Image, AlertTriangle } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';

const RequestSystem = () => {
  const features = [
    "Submit maintenance requests with photos and descriptions",
    "Real-time status updates on all requests",
    "In-app messaging with property managers",
    "Automated scheduling of maintenance visits",
    "Request history and documentation",
    "Follow-up surveys and feedback forms"
  ];

  return (
    <PageTemplate 
      title="Request System" 
      subtitle="A simple and effective way for tenants to submit and track maintenance requests"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
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
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="mt-4" asChild>
            <Link to="/signup">Try It For Free</Link>
          </Button>
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
                          <SelectItem value="appliance">
                            <div className="flex items-center">
                              <span>Appliance</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="other">
                            <div className="flex items-center">
                              <span>Other</span>
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

                  <div>
                    <div className="flex items-center mb-1">
                      <Image className="h-4 w-4 mr-1 text-gray-500" />
                      <Label htmlFor="photo" className="text-sm font-medium">Photo (optional)</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="file" id="photo" className="text-sm" />
                    </div>
                  </div>

                  <Button className="w-full mt-2">Submit Request</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-medium text-sm mb-2">Recent Requests</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-blue-50 rounded-md w-full border border-blue-100">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Wrench className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm font-medium">Leaking Faucet</span>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">In Progress</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Submitted: June 10, 2024</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded-md w-full border border-green-100">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm font-medium">Power Outlet Issue</span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Submitted: June 5, 2024</p>
                  </div>
                  <div className="p-2 bg-amber-50 rounded-md w-full border border-amber-100">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Thermometer className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm font-medium">Heater Not Working</span>
                      </div>
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Scheduled</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Submitted: May 28, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Card className="bg-blue-50 border-0">
        <CardContent className="p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Ready to simplify maintenance for your property?</h2>
            <p className="text-gray-600 mb-6">
              Join hundreds of property managers who have streamlined their maintenance process with TenantBid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/signup">Sign Up Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/process/landlords">Learn More</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageTemplate>
  );
};

export default RequestSystem;
