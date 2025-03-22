
import { useEffect, useState } from 'react';
import { ArrowRight, Clock, Wallet, BarChart, Check, CalendarCheck, MessageSquare, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const DemoVideoContent = () => {
  const [step, setStep] = useState(1);
  const [showMaintenanceForm, setShowMaintenanceForm] = useState(false);
  const [showBidding, setShowBidding] = useState(false);
  const [showScheduling, setShowScheduling] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [maintenanceSubmitted, setMaintenanceSubmitted] = useState(false);
  const [bidAccepted, setBidAccepted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    // Automated demo sequence
    if (step === 1) {
      // Show tenant submitting a maintenance request
      timer = setTimeout(() => {
        setShowMaintenanceForm(true);
      }, 1000);
    } else if (step === 2) {
      // Show submitted request
      timer = setTimeout(() => {
        setMaintenanceSubmitted(true);
        setTimeout(() => setStep(3), 2000);
      }, 1500);
    } else if (step === 3) {
      // Show bidding process
      timer = setTimeout(() => {
        setShowBidding(true);
        setTimeout(() => setBidAccepted(true), 3000);
        setTimeout(() => setStep(4), 4500);
      }, 1000);
    } else if (step === 4) {
      // Show scheduling
      timer = setTimeout(() => {
        setShowScheduling(true);
        setTimeout(() => setStep(5), 3000);
      }, 1000);
    } else if (step === 5) {
      // Show completion notification
      timer = setTimeout(() => {
        setShowNotification(true);
        setTimeout(() => setIsComplete(true), 2000);
      }, 1000);
    }
    
    return () => clearTimeout(timer);
  }, [step]);

  const handleSubmit = () => {
    setStep(2);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-full overflow-y-auto">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">mAIntenants Demo: Full Maintenance Process</h2>
        
        <div className="mb-6">
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              {[
                { num: 1, text: "Submit Request" },
                { num: 2, text: "Collect Bids" },
                { num: 3, text: "Schedule Work" },
                { num: 4, text: "Complete & Review" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= item.num ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {step > item.num ? <Check className="h-5 w-5" /> : item.num}
                  </div>
                  <span className={`text-sm ${step >= item.num ? 'text-primary font-medium' : 'text-gray-500'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-100 -z-10">
              <div 
                className="h-full bg-primary transition-all duration-1000" 
                style={{ width: `${(step - 1) * 33.33}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Step 1: Maintenance Request Form */}
        {showMaintenanceForm && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Step 1: Tenant Submits Maintenance Request</h3>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-medium text-lg mb-4">Maintenance Request Form</h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="category" className="block text-sm font-medium mb-1">Category</Label>
                    <Select defaultValue="plumbing">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select issue category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                        <SelectItem value="hvac">HVAC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description" className="block text-sm font-medium mb-1">Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Please describe the issue in detail..." 
                      className="resize-none"
                      defaultValue="The kitchen sink is leaking and water is collecting under the cabinet. It started yesterday and is getting worse."
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium mb-1">Urgency Level</Label>
                    <RadioGroup defaultValue="urgent" className="flex space-x-4">
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

                  <Button className="w-full mt-2" onClick={handleSubmit}>Submit Request</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Request Submitted */}
        {maintenanceSubmitted && (
          <div className="mb-8 animate-fade-in">
            <Card className="border-l-4 border-green-500">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <h4 className="font-medium">Request Submitted Successfully</h4>
                </div>
                <p className="text-gray-600 mb-2">
                  Your maintenance request for "Kitchen Sink Leaking" has been submitted and the property manager has been notified.
                </p>
                <p className="text-sm text-gray-500">
                  Request ID: #4872 • Submitted: Just now • Status: Pending Review
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Bidding Process */}
        {showBidding && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Step 2: Contractors Submit Bids</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-lg">Bids for Repair Request #4872</h4>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">3 Bids</span>
                </div>
                
                <div className="space-y-4">
                  <div className={`border rounded-md p-3 ${bidAccepted ? 'border-green-200 bg-green-50' : ''}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium">Bob's Plumbing</div>
                        <div className="flex items-center text-xs">
                          <span className="mr-1">4.9 ★</span>
                          <span className="text-gray-500">(127 jobs)</span>
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
                        <Clock className="h-3 w-3 text-gray-600 mr-1" />
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
                      <Button 
                        size="sm" 
                        variant={bidAccepted ? "default" : "outline"} 
                        className="text-xs h-8"
                        disabled={bidAccepted}
                      >
                        <Check className="h-3 w-3 mr-1" />
                        {bidAccepted ? "Bid Accepted" : "Accept Bid"}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium">Pro Plumbing Services</div>
                        <div className="flex items-center text-xs">
                          <span className="mr-1">4.7 ★</span>
                          <span className="text-gray-500">(82 jobs)</span>
                        </div>
                      </div>
                      <div className="text-lg font-bold">$120</div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-8" disabled={bidAccepted}>
                        <Check className="h-3 w-3 mr-1" />
                        Accept Bid
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 4: Scheduling */}
        {showScheduling && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Step 3: Scheduling the Repair</h3>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-medium text-lg mb-4">Automatically Scheduled Appointment</h4>
                
                <div className="p-4 bg-blue-50 rounded-lg mb-4">
                  <div className="flex items-start gap-3">
                    <CalendarCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-medium">Bob's Plumbing is scheduled to arrive:</h5>
                      <p className="text-lg font-bold text-blue-800 mt-1">Today, 3:00 PM - 5:00 PM</p>
                      <p className="text-sm text-gray-600 mt-2">
                        The system found a time that works for both your availability and the contractor's schedule.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <h5 className="font-medium mb-2">Appointment Details:</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>You'll receive a notification when the contractor is on the way</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Contractor will take photos before and after the repair</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>You'll be asked to approve the completed work</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 5: Completion */}
        {showNotification && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Step 4: Work Completed & Reviewed</h3>
            <Card className="border-l-4 border-green-500">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <h4 className="font-medium">Repair Completed Successfully</h4>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Bob's Plumbing has completed the repair on your kitchen sink. The leaking pipe has been 
                  replaced and the cabinet area was dried and cleaned.
                </p>
                
                {isComplete ? (
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <Check className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="font-medium text-green-800">Process Complete!</p>
                    <p className="text-sm text-gray-600 mt-1">
                      From request to completion in under 6 hours. That's the power of mAIntenants!
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <Button variant="outline">View Photos</Button>
                    <Button onClick={() => setIsComplete(true)}>
                      Approve & Complete <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {!showMaintenanceForm && (
          <div className="text-center">
            <Button onClick={() => setShowMaintenanceForm(true)} className="mx-auto">
              Start Demo
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoVideoContent;
