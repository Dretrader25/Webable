import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 bg-background overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 gradient-bg opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-bg-2 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 gradient-bg-3 opacity-10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 neon-border rounded-full text-sm font-medium mb-6 glow-effect">
              <Rocket className="w-4 h-4 mr-2 text-[hsl(var(--neon-cyan))]" />
              <span className="gradient-text">Create Your Digital Presence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Premium Web Design & 
              <span className="gradient-text"> Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We create custom, high-performance websites that drive results. From tailored design s to AI-powered marketing solutions, we're your complete digital partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="gradient-bg text-white hover:opacity-90 transition-all transform hover:scale-105 glow-effect"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="neon-border hover:bg-[hsl(var(--neon-purple)/0.1)] hover:text-[hsl(var(--neon-cyan))] transition-all"
                onClick={() => scrollToSection("portfolio")}
              >
                View Our Work
              </Button>
            </div>
            <div className="flex items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          <div className="animate-float">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern web design workspace with multiple screens showing website designs" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
