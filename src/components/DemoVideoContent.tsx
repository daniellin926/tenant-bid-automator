
import { useEffect, useState } from 'react';
import { ArrowRight, Clock, Wallet, BarChart, Check, CalendarCheck, MessageSquare, ShieldCheck, BellRing, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DemoVideoContent = () => {
  const [step, setStep] = useState(1);
  const [requestReviewed, setRequestReviewed] = useState(false);
  const [showBids, setShowBids] = useState(false);
  const [bidApproved, setBidApproved] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [paymentApproved, setPaymentApproved] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    // Automated demo sequence
    if (step === 1) {
      // Show landlord receiving request notification
      timer = setTimeout(() => {
        setStep(2);
      }, 2000);
    } else if (step === 2) {
      // Show request details and approval
      timer = setTimeout(() => {
        setRequestReviewed(true);
        setTimeout(() => setStep(3), 2000);
      }, 3000);
    } else if (step === 3) {
      // Show bids from contractors
      timer = setTimeout(() => {
        setShowBids(true);
        setTimeout(() => setBidApproved(true), 3000);
        setTimeout(() => setStep(4), 4500);
      }, 1000);
    } else if (step === 4) {
      // Show scheduled appointment
      timer = setTimeout(() => {
        setShowSchedule(true);
        setTimeout(() => setStep(5), 3000);
      }, 1000);
    } else if (step === 5) {
      // Show completion and payment approval
      timer = setTimeout(() => {
        setShowCompletion(true);
        setTimeout(() => setPaymentApproved(true), 3000);
      }, 1000);
    }
    
    return () => clearTimeout(timer);
  }, [step]);

  const handleApproveRequest = () => {
    setRequestReviewed(true);
    setTimeout(() => setStep(3), 1500);
  };

  const handleApproveBid = () => {
    setBidApproved(true);
    setTimeout(() => setStep(4), 1500);
  };

  const handleApprovePayment = () => {
    setPaymentApproved(true);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-full overflow-y-auto">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">mAIntenants Demo: Landlord Experience</h2>
        
        <div className="mb-6">
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              {[
                { num: 1, text: "Review Request" },
                { num: 2, text: "Approve Bids" },
                { num: 3, text: "Confirm Schedule" },
                { num: 4, text: "Approve Payment" }
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

        {/* Step 1-2: Incoming Maintenance Request */}
        {step <= 2 && (
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">New Maintenance Request</h3>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                <BellRing className="h-3.5 w-3.5 mr-1" /> Just Now
              </Badge>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-100 text-blue-700">TR</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Taylor Reynolds - Unit 4B</div>
                    <div className="text-sm text-gray-500">Birchwood Apartments</div>
                    <div className="flex items-center mt-1">
                      <Badge variant="secondary" className="mr-2">Urgent</Badge>
                      <Badge variant="outline">Plumbing</Badge>
                    </div>
                  </div>
                </div>

                <div className="border-t border-b py-4 my-4">
                  <h4 className="font-medium mb-2">Issue Description</h4>
                  <p className="text-gray-700">
                    The kitchen sink is leaking and water is collecting under the cabinet. It started yesterday and is getting worse. 
                    There's now a small puddle on the floor.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Submitted</div>
                    <div>Today, 9:24 AM</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Tenant Phone</div>
                    <div>(555) 123-4567</div>
                  </div>
                </div>

                {!requestReviewed ? (
                  <div className="flex justify-between gap-3">
                    <Button variant="outline" className="w-1/2">
                      Request More Info
                    </Button>
                    <Button className="w-1/2" onClick={handleApproveRequest}>
                      Approve Request
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-md text-green-700">
                    <Check className="h-5 w-5" />
                    <span>Request approved - Finding contractors...</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Bidding Process */}
        {showBids && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Select Contractor Bid</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-lg">Bids for Request #4872 - Kitchen Sink Leak</h4>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">3 Bids</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className={`border rounded-md p-4 ${bidApproved ? 'border-green-200 bg-green-50' : 'hover:border-blue-200'}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10 border">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-blue-100 text-blue-700">BP</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Bob's Plumbing</div>
                          <div className="flex items-center text-xs mt-1">
                            <span className="mr-1 text-amber-500">★★★★★</span>
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
                        <Clock className="h-3 w-3 text-gray-600 mr-1" />
                        <span>Available Today</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      "I can fix the kitchen sink leak today. This sounds like a typical issue with the P-trap or drain assembly. 
                      I've handled similar issues in your building before."
                    </p>
                    
                    <div className="flex justify-between">
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                      {!bidApproved ? (
                        <Button 
                          size="sm" 
                          className="text-xs h-8"
                          onClick={handleApproveBid}
                        >
                          <Check className="h-3 w-3 mr-1" />
                          Approve Bid
                        </Button>
                      ) : (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <Check className="h-3 w-3 mr-1" />
                          Approved
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4 hover:border-blue-200">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10 border">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gray-100">PP</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Pro Plumbing Services</div>
                          <div className="flex items-center text-xs mt-1">
                            <span className="mr-1 text-amber-500">★★★★★</span>
                            <span className="text-gray-500">(82 jobs)</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-lg font-bold">$120</div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-8" disabled={bidApproved}>
                        <Check className="h-3 w-3 mr-1" />
                        Approve Bid
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4 hover:border-blue-200">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10 border">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gray-100">QP</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Quick Plumbing Fix</div>
                          <div className="flex items-center text-xs mt-1">
                            <span className="mr-1 text-amber-500">★★★★</span>
                            <span className="text-gray-500">(43 jobs)</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-lg font-bold">$135</div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-8" disabled={bidApproved}>
                        <Check className="h-3 w-3 mr-1" />
                        Approve Bid
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 4: Scheduling Confirmation */}
        {showSchedule && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Scheduled Maintenance</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <CalendarCheck className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Maintenance Appointment Confirmed</h4>
                    <p className="text-gray-600 mb-3">
                      Bob's Plumbing will fix the kitchen sink leak at Unit 4B
                    </p>
                    
                    <div className="p-4 bg-blue-50 rounded-lg mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-500">Date & Time</div>
                          <div className="font-bold text-blue-800">Today, 3:00 PM - 5:00 PM</div>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Check className="h-3 w-3 mr-1" />
                          Tenant Confirmed
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mt-4">
                      <h5 className="font-medium mb-2">Automatic Updates:</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>You'll receive a notification when contractor arrives</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Before & after photos will be documented</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Tenant will confirm completion of work</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 5: Work Completion & Payment Approval */}
        {showCompletion && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Approve Payment</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`rounded-full p-3 ${paymentApproved ? 'bg-green-100' : 'bg-amber-100'}`}>
                    <DollarSign className={`h-6 w-6 ${paymentApproved ? 'text-green-700' : 'text-amber-700'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-lg">Work Completed - Payment Required</h4>
                    <p className="text-gray-600 mb-4">
                      Bob's Plumbing has completed the kitchen sink repair at Unit 4B. Tenant has confirmed the work is satisfactory.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="border rounded-md p-3">
                        <h5 className="text-sm font-medium text-gray-500 mb-1">Repair Summary</h5>
                        <p className="text-sm">
                          Replaced leaking P-trap and drain assembly. Cleaned and dried cabinet area. 
                          Sink is now functioning properly with no leaks.
                        </p>
                      </div>
                      <div className="border rounded-md p-3">
                        <h5 className="text-sm font-medium text-gray-500 mb-1">Photo Documentation</h5>
                        <div className="flex space-x-2 mt-2">
                          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                            Before
                          </div>
                          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                            After
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-b py-4 my-4">
                      <div className="flex justify-between font-medium mb-2">
                        <span>Service fee</span>
                        <span>$95.00</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Contractor: Bob's Plumbing</span>
                        <span>Invoice #2845</span>
                      </div>
                    </div>
                    
                    {!paymentApproved ? (
                      <div className="flex justify-between gap-3 mt-4">
                        <Button variant="outline" className="w-1/2">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Contact Contractor
                        </Button>
                        <Button className="w-1/2" onClick={handleApprovePayment}>
                          <Check className="h-4 w-4 mr-2" />
                          Approve Payment
                        </Button>
                      </div>
                    ) : (
                      <div className="p-4 bg-green-50 rounded-lg text-center mt-4">
                        <Check className="h-6 w-6 text-green-600 mx-auto mb-2" />
                        <p className="font-medium text-green-800">Payment Approved!</p>
                        <p className="text-sm text-gray-600 mt-1">
                          From request to completion in under 8 hours. That's the power of mAIntenants!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 1 && (
          <div className="text-center">
            <Button onClick={() => setStep(2)} className="mx-auto">
              Start Demo
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoVideoContent;
