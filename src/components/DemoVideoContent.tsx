
import { useEffect, useState } from 'react';
import { ArrowRight, Clock, Wallet, BarChart, Check, CalendarCheck, MessageSquare, ShieldCheck, BellRing, DollarSign, Upload, Camera, Star, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

interface DemoVideoContentProps {
  currentStep?: number;
}

const DemoVideoContent = ({ currentStep = 1 }: DemoVideoContentProps) => {
  const [step, setStep] = useState(currentStep);
  const [requestReviewed, setRequestReviewed] = useState(false);
  const [showBids, setShowBids] = useState(false);
  const [bidApproved, setBidApproved] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [paymentApproved, setPaymentApproved] = useState(false);
  
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [issueDescription, setIssueDescription] = useState('');
  const [issueCategory, setIssueCategory] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setStep(currentStep);
    
    if (currentStep === 1) {
      setRequestSubmitted(false);
      setRequestReviewed(false);
      setShowBids(false);
      setBidApproved(false);
      setShowSchedule(false);
      setShowCompletion(false);
      setPaymentApproved(false);
      setFeedbackSubmitted(false);
    } else if (currentStep === 2) {
      setRequestSubmitted(true);
      setRequestReviewed(true);
      setShowBids(true);
      setBidApproved(false);
      setShowSchedule(false);
      setShowCompletion(false);
      setPaymentApproved(false);
      setFeedbackSubmitted(false);
    } else if (currentStep === 3) {
      setRequestSubmitted(true);
      setRequestReviewed(true);
      setShowBids(true);
      setBidApproved(true);
      setShowSchedule(false);
      setShowCompletion(false);
      setPaymentApproved(false);
      setFeedbackSubmitted(false);
    } else if (currentStep === 4) {
      setRequestSubmitted(true);
      setRequestReviewed(true);
      setShowBids(true);
      setBidApproved(true);
      setShowSchedule(true);
      setShowCompletion(false);
      setPaymentApproved(false);
      setFeedbackSubmitted(false);
    } else if (currentStep === 5) {
      setRequestSubmitted(true);
      setRequestReviewed(true);
      setShowBids(true);
      setBidApproved(true);
      setShowSchedule(true);
      setShowCompletion(true);
      setPaymentApproved(true);
      setFeedbackSubmitted(false);
    }
  }, [currentStep]);

  const handleApproveRequest = () => {
    setRequestReviewed(true);
    toast({
      title: "Request approved",
      description: "Finding contractors in your area...",
    });
  };

  const handleApproveBid = () => {
    setBidApproved(true);
    toast({
      title: "Bid approved",
      description: "Bob's Plumbing has been notified.",
    });
  };

  const handleApprovePayment = () => {
    setPaymentApproved(true);
    toast({
      title: "Payment approved",
      description: "The contractor will be paid automatically.",
    });
  };

  const handleSubmitRequest = () => {
    if (!issueDescription || !issueCategory || !urgencyLevel) {
      toast({
        title: "Please fill all fields",
        description: "All fields must be completed to submit the request",
        variant: "destructive",
      });
      return;
    }
    setRequestSubmitted(true);
    toast({
      title: "Request submitted successfully!",
      description: "Your landlord will be notified.",
    });
  };

  const handleScheduleAppointment = () => {
    if (!scheduledTime) {
      toast({
        title: "Please select a time",
        description: "You must select an appointment time",
        variant: "destructive",
      });
      return;
    }
    setShowSchedule(true);
    toast({
      title: "Appointment scheduled!",
      description: `Your appointment is confirmed for ${scheduledTime}`,
    });
  };

  const handleSubmitFeedback = () => {
    if (rating === 0) {
      toast({
        title: "Please provide a rating",
        description: "You must provide a rating to submit feedback",
        variant: "destructive",
      });
      return;
    }
    setFeedbackSubmitted(true);
    toast({
      title: "Feedback submitted!",
      description: "Thank you for your feedback",
    });
  };

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  const isTenantJourney = window.location.pathname.includes('tenants');

  if (isTenantJourney) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md w-full h-full overflow-y-auto">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">mAIntenants Demo: Tenant Experience</h2>
          
          <div className="mb-6">
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                {[
                  { num: 1, text: "Submit Request" },
                  { num: 2, text: "View Bids" },
                  { num: 3, text: "Schedule Visit" },
                  { num: 4, text: "Contractor Visit" },
                  { num: 5, text: "Give Feedback" }
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
                  style={{ width: `${(step - 1) * 25}%` }}
                ></div>
              </div>
            </div>
          </div>

          {(step === 1) && (
            <div className="mb-8 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Submit a Maintenance Request</h3>
              <Card>
                <CardContent className="pt-6">
                  {!requestSubmitted ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="issueCategory">What type of issue are you experiencing?</Label>
                        <Select value={issueCategory} onValueChange={setIssueCategory}>
                          <SelectTrigger id="issueCategory">
                            <SelectValue placeholder="Select issue category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plumbing">Plumbing</SelectItem>
                            <SelectItem value="electrical">Electrical</SelectItem>
                            <SelectItem value="appliance">Appliance</SelectItem>
                            <SelectItem value="hvac">Heating/Cooling</SelectItem>
                            <SelectItem value="structural">Structural</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="urgencyLevel">How urgent is this issue?</Label>
                        <Select value={urgencyLevel} onValueChange={setUrgencyLevel}>
                          <SelectTrigger id="urgencyLevel">
                            <SelectValue placeholder="Select urgency level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency - Needs immediate attention</SelectItem>
                            <SelectItem value="urgent">Urgent - Within 24 hours</SelectItem>
                            <SelectItem value="standard">Standard - Within a few days</SelectItem>
                            <SelectItem value="low">Low - No rush</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="description">Describe the issue in detail</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Please be specific about the problem..."
                          rows={4}
                          value={issueDescription}
                          onChange={(e) => setIssueDescription(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <Label>Add Photos (Optional)</Label>
                        <div className="mt-2 flex items-center gap-4">
                          <Button variant="outline" className="h-24 w-24 flex flex-col items-center justify-center border-dashed gap-1">
                            <Camera className="h-8 w-8 text-gray-400" />
                            <span className="text-xs text-gray-500">Upload</span>
                          </Button>
                          <div className="text-sm text-gray-500">
                            Photos help contractors understand the issue better.
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="w-full" onClick={handleSubmitRequest}>
                          <Upload className="h-4 w-4 mr-2" />
                          Submit Request
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 p-6 bg-green-50 rounded-lg text-green-700">
                      <Check className="h-10 w-10 text-green-600" />
                      <div>
                        <h4 className="font-medium text-lg">Request Submitted!</h4>
                        <p>Your landlord has been notified and will review your request shortly.</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {(step === 2) && (
            <div className="mb-8 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Your Request Status</h3>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  <Check className="h-3.5 w-3.5 mr-1" /> Approved by Landlord
                </Badge>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="border-b pb-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
                        <BellRing className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Request #472: Plumbing Issue - Kitchen Sink</h4>
                        <div className="text-sm text-gray-500 mt-1">Submitted Yesterday, 2:42 PM</div>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-medium mb-3">Available Contractors</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Your landlord will select one of these contractors to fix your issue. 
                    You'll be notified once a choice has been made.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
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
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">Available Today</Badge>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-2">
                        "I can fix the kitchen sink leak today. This sounds like a typical issue with the P-trap or drain assembly."
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
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
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">Available Tomorrow</Badge>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-2">
                        "I specialize in kitchen plumbing repairs. Happy to help with your sink issue."
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
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
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">Available Friday</Badge>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-2">
                        "We can replace the entire assembly if needed. We have parts in stock."
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-center gap-2 text-amber-700">
                      <Clock className="h-5 w-5" />
                      <h4 className="font-medium">Waiting for landlord approval</h4>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Your landlord will select one of these contractors. You'll receive a notification when a contractor is approved.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {(step === 3) && (
            <div className="mb-8 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Schedule Repair Service</h3>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <Check className="h-3.5 w-3.5 mr-1" /> Contractor Selected
                </Badge>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="border-b pb-4 mb-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-12 h-12 border">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-blue-100 text-blue-700">BP</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-lg">Bob's Plumbing</div>
                        <div className="flex items-center text-sm mt-1">
                          <span className="mr-1 text-amber-500">★★★★★</span>
                          <span className="text-gray-500">(127 jobs)</span>
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          <span className="text-green-600 font-medium">Selected by your landlord</span> to fix your kitchen sink
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-medium mb-3">Choose an Appointment Time</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Select a convenient time for Bob's Plumbing to visit your home.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div 
                      className={`border rounded-md p-3 cursor-pointer transition-colors ${scheduledTime === 'Today, 3:00 PM - 5:00 PM' ? 'border-primary bg-primary/5' : 'hover:border-blue-200'}`}
                      onClick={() => setScheduledTime('Today, 3:00 PM - 5:00 PM')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Today</div>
                        <div className="text-sm">3:00 PM - 5:00 PM</div>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-md p-3 cursor-pointer transition-colors ${scheduledTime === 'Today, 5:30 PM - 7:30 PM' ? 'border-primary bg-primary/5' : 'hover:border-blue-200'}`}
                      onClick={() => setScheduledTime('Today, 5:30 PM - 7:30 PM')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Today</div>
                        <div className="text-sm">5:30 PM - 7:30 PM</div>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-md p-3 cursor-pointer transition-colors ${scheduledTime === 'Tomorrow, 9:00 AM - 11:00 AM' ? 'border-primary bg-primary/5' : 'hover:border-blue-200'}`}
                      onClick={() => setScheduledTime('Tomorrow, 9:00 AM - 11:00 AM')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Tomorrow</div>
                        <div className="text-sm">9:00 AM - 11:00 AM</div>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-md p-3 cursor-pointer transition-colors ${scheduledTime === 'Tomorrow, 1:00 PM - 3:00 PM' ? 'border-primary bg-primary/5' : 'hover:border-blue-200'}`}
                      onClick={() => setScheduledTime('Tomorrow, 1:00 PM - 3:00 PM')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Tomorrow</div>
                        <div className="text-sm">1:00 PM - 3:00 PM</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={handleScheduleAppointment}>
                      <CalendarCheck className="h-4 w-4 mr-2" />
                      Schedule Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {(step === 4) && (
            <div className="mb-8 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Contractor Visit</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <CalendarCheck className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Appointment Confirmed</h4>
                      <p className="text-gray-600 mb-3">
                        Bob's Plumbing will arrive at your home to fix the kitchen sink issue
                      </p>
                      
                      <div className="p-4 bg-blue-50 rounded-lg mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-gray-500">Date & Time</div>
                            <div className="font-bold text-blue-800">Today, 3:00 PM - 5:00 PM</div>
                          </div>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700">
                            <Clock className="h-3 w-3 mr-1" />
                            In Progress
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4 mt-4">
                        <h5 className="font-medium mb-2">Status Updates:</h5>
                        <div className="space-y-4">
                          <div className="flex gap-3">
                            <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                              <Check className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">Contractor en route</div>
                              <div className="text-xs text-gray-500">2:45 PM</div>
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                              <Check className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">Contractor arrived</div>
                              <div className="text-xs text-gray-500">3:10 PM</div>
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                              <Clock className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">Work in progress</div>
                              <div className="text-xs text-gray-500">Current status</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4 mt-4">
                        <h5 className="font-medium mb-2">Repair Notes from Contractor:</h5>
                        <p className="text-sm text-gray-600">
                          "I've identified the issue with your sink. The P-trap connection is loose and the drain 
                          assembly needs to be replaced. I have the parts with me and am working on the repair now."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {(step === 5) && (
            <div className="mb-8 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Repair Complete - Provide Feedback</h3>
              <Card>
                <CardContent className="pt-6">
                  {!feedbackSubmitted ? (
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-full">
                          <Check className="h-6 w-6 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Your repair has been completed!</h4>
                          <p className="text-gray-600">
                            Bob's Plumbing has fixed your kitchen sink leak. Please provide feedback on your experience.
                          </p>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <h5 className="font-medium mb-3">Rate your experience</h5>
                        <div className="flex items-center gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-8 w-8 cursor-pointer ${
                                star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                              }`}
                              onClick={() => handleStarClick(star)}
                            />
                          ))}
                        </div>
                        
                        <div className="mb-4">
                          <Label htmlFor="feedback">Comments (optional)</Label>
                          <Textarea 
                            id="feedback" 
                            placeholder="Share details about your experience..."
                            rows={4}
                          />
                        </div>
                        
                        <div className="pt-2">
                          <Button onClick={handleSubmitFeedback}>
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            Submit Feedback
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 bg-green-50 rounded-lg text-center">
                      <Check className="h-10 w-10 text-green-600 mx-auto mb-2" />
                      <h4 className="font-medium text-lg text-green-800">Thank you for your feedback!</h4>
                      <p className="text-gray-600 mt-2">
                        Your feedback helps maintain high-quality service for all tenants using mAIntenants.
                      </p>
                      <div className="flex justify-center mt-4">
                        <div className="p-4 bg-white rounded-md border max-w-md">
                          <h5 className="font-medium text-center mb-2">Request Summary</h5>
                          <div className="text-sm space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Request submitted:</span>
                              <span>Yesterday, 2:42 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Repair completed:</span>
                              <span>Today, 4:15 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Total time to resolution:</span>
                              <span className="font-medium text-green-700">25 hours, 33 minutes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // Landlord journey - implementation for non-tenant routes
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-full overflow-y-auto">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">mAIntenants Demo: Landlord Experience</h2>
        
        <div className="mb-6">
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              {[
                { num: 1, text: "Review Request" },
                { num: 2, text: "Select Contractor" },
                { num: 3, text: "Confirm Schedule" },
                { num: 4, text: "Monitor Progress" },
                { num: 5, text: "Approve Payment" }
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
                style={{ width: `${(step - 1) * 25}%` }}
              ></div>
            </div>
          </div>
        </div>

        {(step === 1) && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">New Maintenance Request</h3>
            <Card>
              <CardContent className="pt-6">
                {!requestReviewed ? (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
                        <BellRing className="h-5 w-5" />
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 mb-2">New Request</Badge>
                        <h4 className="font-medium text-lg">Plumbing Issue - Kitchen Sink</h4>
                        <div className="text-sm text-gray-500 mt-1">Submitted by: John Tenant - Apt #302</div>
                        <div className="text-sm text-gray-500">Received: Today, 10:30 AM</div>
                        
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm font-medium text-gray-500">Issue Category</div>
                            <div className="font-medium">Plumbing</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500">Urgency Level</div>
                            <Badge variant="outline" className="bg-orange-50 text-orange-700 mt-1">
                              Urgent - Within 24 hours
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="mt-4 border-t pt-4">
                          <div className="text-sm font-medium text-gray-500 mb-2">Description</div>
                          <p className="text-gray-700">
                            "The kitchen sink is leaking from underneath whenever I run the water. There's a puddle forming on the floor and I've had to place a bucket underneath to catch the water. The leak seems to be coming from where the pipes connect."
                          </p>
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" className="mr-2">Mark as Low Priority</Button>
                          <Button onClick={handleApproveRequest}>
                            <Check className="h-4 w-4 mr-2" />
                            Approve & Find Contractors
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 p-6 bg-green-50 rounded-lg text-green-700">
                    <Check className="h-10 w-10 text-green-600" />
                    <div>
                      <h4 className="font-medium text-lg">Request Approved!</h4>
                      <p>Finding suitable contractors in your area...</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {(step === 2 && showBids) && (
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Select a Contractor</h3>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                <Clock className="h-3.5 w-3.5 mr-1" /> 3 Bids Available
              </Badge>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="border-b pb-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
                      <BellRing className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Request #472: Plumbing Issue - Kitchen Sink</h4>
                      <div className="text-sm text-gray-500 mt-1">Submitted Today, 10:30 AM</div>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-medium mb-3">Available Contractors</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Select a contractor to fix this maintenance issue. All contractors are verified and insured.
                </p>
                
                <div className="space-y-4">
                  <div className={`border rounded-md p-4 ${bidApproved ? 'border-green-400 bg-green-50' : ''}`}>
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
                      <div className="flex flex-col items-end">
                        <div className="font-medium text-green-700">$125</div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 mt-1">Available Today</Badge>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-3">
                      "I can fix the kitchen sink leak today. This sounds like a typical issue with the P-trap or drain assembly. I have the necessary parts in my truck and can be there within 2 hours of approval."
                    </div>
                    
                    {!bidApproved ? (
                      <div className="flex justify-end">
                        <Button onClick={handleApproveBid}>
                          <Check className="h-4 w-4 mr-2" />
                          Select Contractor
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-green-700">
                        <Check className="h-5 w-5" />
                        <span className="font-medium">Selected</span>
                      </div>
                    )}
                  </div>
                  
                  {!bidApproved && (
                    <>
                      <div className="border rounded-md p-4">
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
                          <div className="flex flex-col items-end">
                            <div className="font-medium text-green-700">$150</div>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 mt-1">Available Tomorrow</Badge>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-3">
                          "I specialize in kitchen plumbing repairs. Happy to help with your sink issue. I can provide a 90-day warranty on all parts and labor."
                        </div>
                        
                        <div className="flex justify-end">
                          <Button variant="outline">
                            Select Contractor
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4">
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
                          <div className="flex flex-col items-end">
                            <div className="font-medium text-green-700">$135</div>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 mt-1">Available Friday</Badge>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-3">
                          "We can replace the entire assembly if needed. We have parts in stock and provide a 1-year warranty on all our work."
                        </div>
                        
                        <div className="flex justify-end">
                          <Button variant="outline">
                            Select Contractor
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {(step === 3 && bidApproved) && (
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Contractor Schedule</h3>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Check className="h-3.5 w-3.5 mr-1" /> Contractor Selected
              </Badge>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="border-b pb-4 mb-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-12 h-12 border">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-blue-100 text-blue-700">BP</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-lg">Bob's Plumbing</div>
                      <div className="flex items-center text-sm mt-1">
                        <span className="mr-1 text-amber-500">★★★★★</span>
                        <span className="text-gray-500">(127 jobs)</span>
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        <span className="text-green-600 font-medium">Selected by you</span> for Request #472: Plumbing Issue
                      </div>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-medium mb-3">Appointment Details</h4>
                {!showSchedule ? (
                  <div className="p-4 bg-amber-50 rounded-lg mb-4">
                    <div className="flex items-center gap-2 text-amber-700">
                      <Clock className="h-5 w-5" />
                      <h4 className="font-medium">Waiting for tenant to choose a time slot</h4>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      The tenant has been notified to select a convenient time. You'll receive a notification once scheduled.
                    </p>
                  </div>
                ) : (
                  <div className="p-4 bg-blue-50 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Date & Time</div>
                        <div className="font-bold text-blue-800">Today, 3:00 PM - 5:00 PM</div>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        <Check className="h-3.5 w-3.5 mr-1" />
                        Confirmed
                      </Badge>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      Appointment has been confirmed with both the tenant and contractor.
                    </div>
                  </div>
                )}
                
                <div className="border-t pt-4 mt-4">
                  <h5 className="font-medium mb-2">Estimated Cost Breakdown:</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Service fee:</span>
                      <span>$85.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Parts estimate:</span>
                      <span>$40.00</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                      <span>Total:</span>
                      <span>$125.00</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Final cost may vary based on actual parts needed and time spent. You'll only be charged after job completion.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {(step === 4 && showSchedule) && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Repair Progress</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <CalendarCheck className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Repair in Progress</h4>
                    <p className="text-gray-600 mb-3">
                      Bob's Plumbing is currently fixing the kitchen sink issue
                    </p>
                    
                    <div className="p-4 bg-blue-50 rounded-lg mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-500">Date & Time</div>
                          <div className="font-bold text-blue-800">Today, 3:00 PM - 5:00 PM</div>
                        </div>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700">
                          <Clock className="h-3 w-3 mr-1" />
                          In Progress
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mt-4">
                      <h5 className="font-medium mb-2">Status Updates:</h5>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                            <Check className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">Contractor en route</div>
                            <div className="text-xs text-gray-500">2:45 PM</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                            <Check className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">Contractor arrived</div>
                            <div className="text-xs text-gray-500">3:10 PM</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">Work in progress</div>
                            <div className="text-xs text-gray-500">Current status</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mt-4">
                      <h5 className="font-medium mb-2">Repair Notes from Contractor:</h5>
                      <p className="text-sm text-gray-600">
                        "I've identified the issue with the sink. The P-trap connection is loose and the drain 
                        assembly needs to be replaced. I have the parts with me and am working on the repair now.
                        Should be completed within the hour."
                      </p>
                    </div>

                    {!showCompletion && (
                      <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="flex items-center gap-2 text-amber-700">
                          <Clock className="h-5 w-5" />
                          <h4 className="font-medium">Waiting for job completion</h4>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          You'll receive a notification when the repair is complete and ready for your review.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {(step === 5 && showCompletion) && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Repair Complete - Approve Payment</h3>
            <Card>
              <CardContent className="pt-6">
                {!paymentApproved ? (
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Check className="h-6 w-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Repair Completed!</h4>
                        <p className="text-gray-600">
                          Bob's Plumbing has completed the kitchen sink repair. Please review and approve payment.
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <h5 className="font-medium mb-2">Final Invoice</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Service fee:</span>
                          <span>$85.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Replacement drain assembly:</span>
                          <span>$35.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Additional plumbing supplies:</span>
                          <span>$15.00</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                          <span>Total:</span>
                          <span>$135.00</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h5 className="font-medium mb-2">Contractor Notes:</h5>
                      <p className="text-sm text-gray-600 mb-4">
                        "Replaced the drain assembly and P-trap with new parts. Also tightened all connections and tested the sink thoroughly. Everything is working properly now with no leaks. Please let me know if there are any issues."
                      </p>
                      
                      <div className="border p-3 rounded-lg mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Camera className="h-5 w-5 text-gray-500" />
                          <span className="font-medium">Photos of completed work</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
                          <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
                          <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
                        </div>
                      </div>
                      
                      <div className="pt-2 flex justify-end">
                        <Button variant="outline" className="mr-2">Request Revision</Button>
                        <Button onClick={handleApprovePayment}>
                          <Wallet className="h-4 w-4 mr-2" />
                          Approve & Pay $135.00
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 bg-green-50 rounded-lg text-center">
                    <Check className="h-10 w-10 text-green-600 mx-auto mb-2" />
                    <h4 className="font-medium text-lg text-green-800">Payment Approved!</h4>
                    <p className="text-gray-600 mt-2">
                      The contractor will be paid automatically. The tenant has been asked to provide feedback.
                    </p>
                    <div className="flex justify-center mt-4">
                      <div className="p-4 bg-white rounded-md border max-w-md">
                        <h5 className="font-medium text-center mb-2">Request Summary</h5>
                        <div className="text-sm space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Request received:</span>
                            <span>Today, 10:30 AM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Repair completed:</span>
                            <span>Today, 4:15 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total time to resolution:</span>
                            <span className="font-medium text-green-700">5 hours, 45 minutes</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total cost:</span>
                            <span className="font-medium">$135.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoVideoContent;
