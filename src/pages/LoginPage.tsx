
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Home, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const LoginPage = () => {
  const [userType, setUserType] = useState<"landlord" | "tenant">("tenant");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally connect to an authentication service
    console.log(`Logging in as ${userType} with email: ${email}`);
    
    toast({
      title: "Login Attempted",
      description: `You tried to log in as a ${userType} with ${email}. This is a demo.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <div className="container mx-auto pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your mAIntenants account
              </CardDescription>
            </CardHeader>
            
            <Tabs defaultValue="tenant" onValueChange={(v) => setUserType(v as "landlord" | "tenant")}>
              <TabsList className="grid grid-cols-2 mb-4 mx-4">
                <TabsTrigger value="tenant" className="flex items-center gap-2">
                  <Home size={16} />
                  <span>Tenant</span>
                </TabsTrigger>
                <TabsTrigger value="landlord" className="flex items-center gap-2">
                  <Building size={16} />
                  <span>Landlord</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="tenant">
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input 
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Sign in as Tenant
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </TabsContent>
              
              <TabsContent value="landlord">
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="landlord-email">Email</Label>
                        <Input 
                          id="landlord-email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="landlord-password">Password</Label>
                        <div className="relative">
                          <Input 
                            id="landlord-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Sign in as Landlord
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </TabsContent>
            </Tabs>
            
            <CardFooter className="flex flex-col space-y-4 mt-2">
              <div className="text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
