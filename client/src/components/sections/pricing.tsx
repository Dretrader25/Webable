import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$300",
      period: "/month",
      features: [
        "Custom Website Design",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Forms",
        "Social Media Integration",
        "3 Months Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "$750",
      period: "/month",
      features: [
        "Everything in Starter",
        "Brand Creation/Makeover",
        "Google Business Mang.",
        "Content Management System",
        "Email Marketing Setup",
        "6 Months Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: "$999",
      period: "/month",
      features: [
        "Everything in Professional",
        "Custom Functionality",
        "AI Content Creation",
        "Advanced Analytics",
        "Dedicated Account Manager",
        "12 Months Support"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include unlimited revisions and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`hover-lift card-glow relative ${
                plan.popular ? "neon-border glow-effect shadow-2xl" : "shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-bg text-white border-0 glow-effect">Most Popular</Badge>
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <div className="text-4xl font-bold text-foreground mb-2">{plan.price}</div>
                  <div className="text-muted-foreground">{plan.period}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "gradient-bg text-white hover:opacity-90 glow-effect" 
                      : "neon-border hover:bg-[hsl(var(--neon-purple)/0.1)] hover:text-[hsl(var(--neon-cyan))]"
                  } transition-all`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={scrollToContact}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
