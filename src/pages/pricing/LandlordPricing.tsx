
import { Check } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LandlordPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small landlords with up to 5 units",
      features: [
        "Up to 5 units",
        "Unlimited maintenance requests",
        "Automated contractor bidding",
        "Basic reporting",
        "Email support"
      ],
      isPopular: false,
      buttonText: "Start with Starter",
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing property portfolios with up to 20 units",
      features: [
        "Up to 20 units",
        "Everything in Starter",
        "Tenant portal access",
        "Scheduled maintenance",
        "Advanced reporting",
        "Priority email support"
      ],
      isPopular: true,
      buttonText: "Choose Professional",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "Complete solution for large property managers",
      features: [
        "50+ units",
        "Everything in Professional",
        "Custom branding",
        "API access",
        "Integration with accounting software",
        "Dedicated account manager",
        "Phone support"
      ],
      isPopular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <PageTemplate 
      title="Landlord Pricing Plans" 
      subtitle="Choose the plan that's right for your property portfolio"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.isPopular ? 'border-primary shadow-lg' : ''}`}>
            {plan.isPopular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.buttonVariant} asChild>
                <Link to="/signup">{plan.buttonText}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left mt-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Do I need to pay per maintenance request?</h3>
              <p className="text-gray-600">
                No, all our plans include unlimited maintenance requests. You pay a flat monthly fee based on 
                the number of units you manage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your 
                next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">
                No, there are no setup fees or hidden costs. The price you see is the price you pay.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Not sure which plan is right for you?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Our team is ready to help you choose the perfect plan for your needs. Schedule a free consultation 
          with one of our property management experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default LandlordPricing;
