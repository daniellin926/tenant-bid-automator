
import { CheckCircle } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
          <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex flex-col p-4">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-3">
                <h3 className="font-medium text-sm mb-1">Maintenance Request Form</h3>
                <div className="space-y-2">
                  <div className="h-6 bg-gray-100 rounded-md w-full"></div>
                  <div className="h-6 bg-gray-100 rounded-md w-full"></div>
                  <div className="h-24 bg-gray-100 rounded-md w-full"></div>
                  <div className="h-6 bg-gray-100 rounded-md w-3/4"></div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-medium text-sm mb-1">Recent Requests</h3>
                <div className="space-y-2">
                  <div className="h-12 bg-blue-50 rounded-md w-full"></div>
                  <div className="h-12 bg-green-50 rounded-md w-full"></div>
                  <div className="h-12 bg-amber-50 rounded-md w-full"></div>
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
