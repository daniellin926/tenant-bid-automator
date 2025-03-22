
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  bgColor?: string;
}

const PageTemplate = ({ title, subtitle, children, bgColor = "bg-gradient-to-b from-blue-50 to-white" }: PageTemplateProps) => {
  return (
    <div className={`min-h-screen ${bgColor}`}>
      <Navbar />
      
      <div className="container mx-auto pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </div>
        
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PageTemplate;
