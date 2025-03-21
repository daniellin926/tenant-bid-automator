
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-md mx-auto">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-6">
            404 Error
          </span>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Page Not Found</h1>
          <p className="text-gray-600 mb-10 text-lg">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Button className="rounded-full py-6 px-8 bg-primary hover:bg-primary/90">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
