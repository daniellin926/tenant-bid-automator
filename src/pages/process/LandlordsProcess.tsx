import { ArrowRight, Bell, MessageSquare, ListCheck, DollarSign, Play } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import { Card, CardContent } from '@/components/ui/card';

const LandlordsProcess = () => {
  const [demoPlaying, setDemoPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleStartDemo = () => {
    setDemoPlaying(true);
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    {
      title: "Approve or deny requests",
      description: "Receive push notifications when tenants submit maintenance requests and quickly approve or deny with comments.",
      icon: <Bell className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Review estimates",
      description: "TenantBid automatically collects estimates and schedules time with tenants. Simply review and approve recommended estimates or select alternate bids.",
      icon: <ListCheck className="h-10 w-10 text-purple-500" />
    },
    {
      title: "Payment approval",
      description: "We handle all scheduling and repairs. You'll be notified when the job is complete and your payment approval is needed.",
      icon: <DollarSign className="h-10 w-10 text-green-500" />
    }
  ];

  return (
    <PageTemplate 
      title="How It Works for Landlords" 
      subtitle="Take the hassle out of maintenance management with our streamlined system"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-gray-300" />
                </div>
              )}
              <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">Step {index + 1}: {step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Interactive Demo Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Interactive Demo: Experience The Landlord Journey</h2>
          <p className="text-gray-600 mb-6">
            Walk through the entire maintenance request process from a landlord's perspective. 
            See how easy it is to manage maintenance requests, approve bids, and process payments.
          </p>
          
          {!demoPlaying ? (
            <div className="flex justify-center">
              <Button 
                onClick={handleStartDemo} 
                size="lg" 
                className="flex items-center gap-2"
              >
                <Play className="h-5 w-5" />
                Start Interactive Demo
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="bg-gray-50 rounded-lg h-[600px] overflow-hidden relative">
                    <VideoPlayer 
                      playing={demoPlaying} 
                      currentStep={currentStep} 
                      onNext={handleNextStep}
                      onPrevious={handlePreviousStep}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-center">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((step) => (
                          <div 
                            key={step} 
                            className={`w-2.5 h-2.5 rounded-full ${
                              currentStep >= step ? 'bg-primary' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium mb-2">
                  {currentStep === 1 && "Step 1: Review Maintenance Request"}
                  {currentStep === 2 && "Step 2: Approve the Request"}
                  {currentStep === 3 && "Step 3: Select Contractor Bid"}
                  {currentStep === 4 && "Step 4: Confirm Scheduled Appointment"}
                  {currentStep === 5 && "Step 5: Approve Payment After Completion"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {currentStep === 1 && "You'll receive instant notifications when tenants submit maintenance requests. Review all details including images and urgency level."}
                  {currentStep === 2 && "Quickly approve appropriate requests or request more information if needed. Our AI helps prioritize requests based on urgency."}
                  {currentStep === 3 && "View multiple bids from qualified contractors with transparent pricing and reviews. Select the best option for your property."}
                  {currentStep === 4 && "Once a bid is approved, scheduling happens automatically. You'll be notified of the confirmed appointment time."}
                  {currentStep === 5 && "After job completion, review the work details and approve payment. All documentation is stored for your records."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left mt-8">
            <div>
              <h3 className="text-lg font-medium mb-2">How much time will this save me?</h3>
              <p className="text-gray-600">
                Property managers report saving 5-10 hours per week using our system. All the coordination, 
                follow-ups, and scheduling are handled automatically.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">How do I know I'm getting fair prices?</h3>
              <p className="text-gray-600">
                Our bidding system ensures competitive pricing. You'll see multiple bids for each job, 
                complete with ratings and reviews, so you can make informed decisions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Can I use my own preferred contractors?</h3>
              <p className="text-gray-600">
                Yes! You can invite your trusted contractors to join the platform. They'll receive 
                notifications for relevant jobs and can submit bids alongside our vetted provider network.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
            <p className="text-gray-600 mb-6">
              Create your landlord account today and experience hassle-free maintenance management
              for your properties.
            </p>
            <Button size="lg" asChild>
              <Link to="/signup">Create Free Account</Link>
            </Button>
          </div>
          <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">What landlords are saying</h3>
            <blockquote className="mb-6">
              "I used to spend hours coordinating repairs between tenants and contractors. 
              With TenantBid, it's all automated. My phone only buzzes when I need to approve something!"
              <footer className="mt-2 font-medium">— Michael R., Property Owner</footer>
            </blockquote>
            <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/testimonials">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default LandlordsProcess;
