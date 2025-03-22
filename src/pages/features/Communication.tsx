
import { Link } from 'react-router-dom';
import { MessageCircle, Bell, Calendar, CheckCircle, Clock, ThumbsUp, X, MessageSquare, User, Wrench, Home } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const Communication = () => {
  const { toast } = useToast();
  
  const features = [
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
      title="Seamless Communication" 
      subtitle="Keep everyone informed at every step of the process"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Instant Notifications, Faster Resolutions</h2>
            <p className="text-gray-600 mb-4">
              TenantBid's communication system ensures that every stakeholder stays informed
              throughout the maintenance process. Landlords receive instant notifications about new
              requests with the ability to approve or deny with a single tap.
            </p>
            <p className="text-gray-600">
              Both tenants and landlords receive timely updates about contractor scheduling, 
              estimated arrival times, and job completion - eliminating the frustration of
              waiting and wondering.
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
          
          <div className="flex flex-wrap gap-4 mt-6">
            <Button size="lg" onClick={showDemoToast}>
              <Bell className="mr-2 h-4 w-4" />
              Try Demo Notification
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="aspect-[9/16] bg-gray-50 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex flex-col p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-4 bg-white p-3 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-blue-500 mr-2" />
                  <h3 className="font-medium">Notifications</h3>
                </div>
                <div className="text-xs bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </div>
              </div>

              {/* Landlord View - New Request */}
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

              {/* Tenant View - Scheduling Update */}
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
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="text-xs">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Message
                  </Button>
                </div>
              </div>

              {/* Landlord View - Job Complete */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border-l-4 border-purple-500">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    <span className="font-medium">Job Completed</span>
                  </div>
                  <span className="text-xs text-gray-500">Yesterday</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Electrical repair in Unit 145 has been completed. Awaiting your approval for payment.</p>
                <div className="flex items-center text-sm mb-2 bg-gray-50 p-2 rounded">
                  <Home className="h-4 w-4 text-gray-500 mr-2" />
                  <span>123 Main St, Unit 145</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Completed
                  </span>
                  <Button variant="default" size="sm" className="text-xs">
                    Approve Payment
                  </Button>
                </div>
              </div>

              {/* Chat Message */}
              <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-indigo-500">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 text-indigo-500 mr-2" />
                    <span className="font-medium">New Message</span>
                  </div>
                  <span className="text-xs text-gray-500">Yesterday</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <User className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <span className="text-sm font-medium">Bob's Plumbing</span>
                    <p className="text-xs text-gray-500">Contractor</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 p-2 bg-gray-50 rounded mb-2">
                  I've completed the repair and left a note with the tenant. Please let me know if there are any issues.
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="text-xs">
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Card className="bg-blue-50 border-0">
        <CardContent className="p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Keep everyone in the loop</h2>
            <p className="text-gray-600 mb-6">
              Join hundreds of property managers who have streamlined their communication 
              with tenants and contractors using TenantBid's all-in-one platform.
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

export default Communication;
