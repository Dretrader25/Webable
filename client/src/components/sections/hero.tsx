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
    <section id="home" className="pt-24 pb-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Transform Your Digital Presence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Premium Web Design & 
              <span className="gradient-text"> Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We create stunning, high-performance websites that drive results. From custom design to AI-powered marketing solutions, we're your complete digital partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="gradient-bg text-white hover:opacity-90 transition-all transform hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
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
