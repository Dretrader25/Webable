import { Card, CardContent } from "@/components/ui/card";
import { Brush, Search, TrendingUp, Bot, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Brush,
      title: "Web Design & Development",
      description: "Custom, responsive websites that look stunning and perform flawlessly across all devices. Built with the latest technologies.",
      features: ["Custom UI/UX Design", "Responsive Development", "Performance Optimization"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic with our comprehensive SEO strategies and technical optimizations.",
      features: ["Technical SEO Audit", "Keyword Research", "Content Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Automated Marketing",
      description: "Scale your marketing efforts with intelligent automation, email campaigns, and conversion optimization strategies.",
      features: ["Email Automation", "Lead Generation", "Analytics & Reporting"]
    },
    {
      icon: Bot,
      title: "AI Content Creation",
      description: "Leverage AI technology to create compelling copy, generate ideas, and maintain consistent content across all your channels.",
      features: ["AI Copywriting", "Content Strategy", "Brand Voice Training"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch and beyond, we provide comprehensive digital solutions that drive growth and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const gradientClass = index % 4 === 0 ? 'gradient-bg' : index % 4 === 1 ? 'gradient-bg-2' : index % 4 === 2 ? 'gradient-bg-3' : 'gradient-bg-4';
            return (
              <Card key={index} className="hover-lift card-glow">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 ${gradientClass} rounded-lg flex items-center justify-center mb-6 glow-effect`}>
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
