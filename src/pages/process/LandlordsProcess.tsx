
import { ArrowRight, Bell, MessageSquare, ListCheck, DollarSign } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LandlordsProcess = () => {
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
