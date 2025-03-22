
import { Calendar, CalendarCheck, BellDot, CheckCheck, MessageSquare } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Scheduling = () => {
  return (
    <PageTemplate 
      title="Smart Scheduling" 
      subtitle="Eliminate the back-and-forth of scheduling maintenance visits"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
            <p className="text-gray-600 mb-8">
              Our intelligent scheduling system coordinates between tenants and contractors 
              automatically, finding optimal times that work for everyone without the endless 
              back-and-forth communication.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 text-blue-500">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium mb-2">Tenant Availability</h3>
                <p className="text-gray-600">
                  Tenants mark their preferred time slots directly in the app, indicating when 
                  they're available for maintenance visits.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 text-purple-500">
                  <CalendarCheck className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium mb-2">Contractor Scheduling</h3>
                <p className="text-gray-600">
                  Contractors sync their work calendars with our system, showing their real-time 
                  availability for new jobs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 text-green-500">
                  <BellDot className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium mb-2">Automatic Reminders</h3>
                <p className="text-gray-600">
                  All parties receive timely reminders before scheduled visits, reducing no-shows 
                  and last-minute cancellations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 text-amber-500">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium mb-2">In-App Communication</h3>
                <p className="text-gray-600">
                  Need to reschedule? All communication happens in the app with automatic 
                  rescheduling suggestions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 relative">
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-50 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">90% reduction in scheduling coordination time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">35% faster maintenance completion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">75% fewer missed appointments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Higher tenant satisfaction scores</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">More efficient contractor workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete visibility for property owners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Case Study
              </span>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Mountain View Apartments</h2>
            <p className="text-gray-600 mb-6">
              "Before TenantBid, we spent 15+ hours per week just coordinating schedules between tenants and maintenance crews. 
              Now it's all automated. Our maintenance completion rate is up 40% and tenant satisfaction improved significantly."
            </p>
            <p className="font-medium">— Sarah Johnson, Property Manager</p>
          </div>
          <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Ready to save time?</h3>
            <p className="mb-6">
              Join thousands of property managers who have streamlined their maintenance processes with our smart scheduling system.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/signup">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Scheduling;
