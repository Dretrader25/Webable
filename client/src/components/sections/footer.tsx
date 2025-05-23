import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Code, Twitter, Linkedin, Instagram, Camera } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest updates and tips.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Code className="text-white w-4 h-4" />
              </div>
              <span className="text-2xl font-bold">Webable</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              We create stunning, high-performance websites that drive results. From custom design to AI-powered marketing solutions, we're your complete digital partner.
            </p>
            <div className="flex space-x-4">
              <Button variant="secondary" size="icon" className="bg-gray-800 hover:bg-primary transition-all">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" className="bg-gray-800 hover:bg-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" className="bg-gray-800 hover:bg-primary transition-all">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" className="bg-gray-800 hover:bg-primary transition-all">
                <Camera className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Web Design</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Web Development</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">SEO Optimization</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Digital Marketing</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">AI Content Creation</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("portfolio")} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection("testimonials")} className="hover:text-white transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">Careers</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold text-lg mb-2">Stay updated</h4>
              <p className="text-gray-400">Get the latest web design trends and tips delivered to your inbox.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-primary focus:border-transparent"
                required
              />
              <Button 
                type="submit" 
                className="gradient-bg text-white hover:opacity-90 transition-all"
                disabled={newsletterMutation.isPending}
              >
                {newsletterMutation.isPending ? "..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; 2024 Webable. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-400">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
