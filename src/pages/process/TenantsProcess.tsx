
import { ArrowRight, Home, MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TenantsProcess = () => {
  const steps = [
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

  return (
    <PageTemplate 
      title="How It Works for Tenants" 
      subtitle="A simple four-step process to get your maintenance issues resolved quickly and efficiently"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md relative">
              {index < steps.length - 1 && (
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
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left mt-8">
            <div>
              <h3 className="text-lg font-medium mb-2">How quickly will my request be addressed?</h3>
              <p className="text-gray-600">
                Most non-emergency requests are responded to within 24 hours, with contractors typically 
                bidding within 48 hours. Emergency requests are prioritized and handled immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Can I track the status of my request?</h3>
              <p className="text-gray-600">
                Yes, you'll receive real-time updates through the app, and you can check the status 
                of all your requests in your tenant dashboard at any time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">What if I need to reschedule a service appointment?</h3>
              <p className="text-gray-600">
                You can easily reschedule through the app. Just visit your request details and select 
                the reschedule option to view alternative available times.
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
              Create your tenant account today and experience the easiest way to handle 
              maintenance requests for your home or apartment.
            </p>
            <Button size="lg" asChild>
              <Link to="/signup">Create Free Account</Link>
            </Button>
          </div>
          <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">What tenants are saying</h3>
            <blockquote className="mb-6">
              "I used to wait days just to get a response about my leaky faucet. 
              With TenantBid, I had a plumber scheduled within hours!"
              <footer className="mt-2 font-medium">— Sarah T., Apartment Resident</footer>
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

export default TenantsProcess;
