
import { ArrowRight, Home, MessageSquare, Calendar, CheckCircle, Play } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import { Card, CardContent } from '@/components/ui/card';

// Process step data
const processSteps = [
  {
    title: "Submit a request",
    description: "Use our simple form to describe your maintenance issue and upload photos if needed.",
    icon: <Home className="h-10 w-10 text-blue-500" />
  },
  {
    title: "Get status updates",
    description: "Receive automatic notifications as your request progresses through the system.",
    icon: <MessageSquare className="h-10 w-10 text-purple-500" />
  },
  {
    title: "Schedule service",
    description: "Choose a convenient time from available slots once a contractor is assigned.",
    icon: <Calendar className="h-10 w-10 text-green-500" />
  },
  {
    title: "Provide feedback",
    description: "After the work is complete, rate your experience to help improve service quality.",
    icon: <CheckCircle className="h-10 w-10 text-amber-500" />
  }
];

// FAQ data
const faqs = [
  {
    question: "How quickly will my request be addressed?",
    answer: "Most non-emergency requests are responded to within 24 hours, with contractors typically bidding within 48 hours. Emergency requests are prioritized and handled immediately."
  },
  {
    question: "Can I track the status of my request?",
    answer: "Yes, you'll receive real-time updates through the app, and you can check the status of all your requests in your tenant dashboard at any time."
  },
  {
    question: "What if I need to reschedule a service appointment?",
    answer: "You can easily reschedule through the app. Just visit your request details and select the reschedule option to view alternative available times."
  }
];

const ProcessStep = ({ step, index, totalSteps }) => (
  <div className="bg-white rounded-xl p-6 shadow-md relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
    {index < totalSteps - 1 && (
      <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
        <ArrowRight className="h-6 w-6 text-gray-300" />
      </div>
    )}
    <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center">
      {step.icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">Step {index + 1}: {step.title}</h3>
    <p className="text-gray-600">{step.description}</p>
  </div>
);

const FAQ = ({ question, answer }) => (
  <div className="animate-fade-in">
    <h3 className="text-lg font-medium mb-2">{question}</h3>
    <p className="text-gray-600 mb-6">{answer}</p>
  </div>
);

const TenantsProcess = () => {
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

  return (
    <PageTemplate 
      title="How It Works for Tenants" 
      subtitle="A simple four-step process to get your maintenance issues resolved quickly and efficiently"
    >
      {/* Process Steps */}
      <div className="mb-16 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={index} 
              step={step} 
              index={index} 
              totalSteps={processSteps.length} 
            />
          ))}
        </div>
      </div>
      
      {/* Interactive Demo Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
        <div className="p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Interactive Demo: Experience The Tenant Journey</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
            See how easy it is to submit maintenance requests, track their progress, 
            schedule service appointments, and provide feedback after completion.
          </p>
          
          {!demoPlaying ? (
            <div className="flex justify-center">
              <Button 
                onClick={handleStartDemo} 
                size="lg" 
                className="flex items-center gap-2"
              >
                <Play className="h-4 w-4 md:h-5 md:w-5" />
                Start Interactive Demo
              </Button>
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="bg-gray-50 rounded-lg h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden relative">
                    <VideoPlayer 
                      playing={demoPlaying} 
                      currentStep={currentStep} 
                      onNext={handleNextStep}
                      onPrevious={handlePreviousStep}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:p-4 flex justify-between items-center">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((step) => (
                          <div 
                            key={step} 
                            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${
                              currentStep >= step ? 'bg-primary' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                <h3 className="text-sm md:text-base font-medium mb-1 md:mb-2">
                  {currentStep === 1 && "Step 1: Submit Maintenance Request"}
                  {currentStep === 2 && "Step 2: Request Approved & Contractor Bids"}
                  {currentStep === 3 && "Step 3: Schedule Appointment"}
                  {currentStep === 4 && "Step 4: Contractor Visit"}
                  {currentStep === 5 && "Step 5: Provide Feedback"}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {currentStep === 1 && "Use our simple form to describe your issue, add photos, and indicate the urgency. You can submit requests for any maintenance problems in your rental unit."}
                  {currentStep === 2 && "Get instant updates as your request is approved by your landlord. You'll see qualified contractors bidding to fix your issue, each with ratings and availability."}
                  {currentStep === 3 && "Once your landlord approves a contractor, select a convenient time slot from the contractor's available dates to schedule the repair."}
                  {currentStep === 4 && "Receive reminders before the contractor arrives. When they complete the work, you'll be asked to confirm the issue has been resolved."}
                  {currentStep === 5 && "Rate your experience and provide feedback. Your input helps maintain high-quality service for all tenants using mAIntenants."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* FAQs */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left mt-8">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden animate-fade-in",
        "transition-all duration-300 hover:shadow-lg"
      )} style={{ animationDelay: '500ms' }}>
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
            <p className="text-gray-600 mb-6">
              Create your tenant account today and experience the easiest way to handle 
              maintenance requests for your home or apartment.
            </p>
            <Button size="lg" asChild className="transition-all hover:scale-105">
              <Link to="/signup">Create Free Account</Link>
            </Button>
          </div>
          <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">What tenants are saying</h3>
            <blockquote className="mb-6">
              "I used to wait days just to get a response about my leaky faucet. 
              With m<span className="text-white font-bold">AI</span>ntenants, I had a plumber scheduled within hours!"
              <footer className="mt-2 font-medium">— Sarah T., Apartment Resident</footer>
            </blockquote>
            <Button variant="outline" className="bg-blue-500 text-white border-white hover:bg-blue-600" asChild>
              <Link to="/testimonials">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default TenantsProcess;
