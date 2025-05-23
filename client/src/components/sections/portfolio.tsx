import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern online store with advanced filtering and checkout",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "ecommerce"
    },
    {
      id: 2,
      title: "Corporate Website",
      description: "Professional business site with lead generation focus",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "web-design"
    },
    {
      id: 3,
      title: "Mobile App Design",
      description: "Intuitive mobile experience with seamless navigation",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "mobile"
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Appetizing design with online ordering functionality",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "web-design"
    },
    {
      id: 5,
      title: "Tech Startup",
      description: "Modern landing page with conversion optimization",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "web-design"
    },
    {
      id: 6,
      title: "Fashion Store",
      description: "Elegant e-commerce with AR try-on features",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "ecommerce"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web-design", label: "Web Design" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "mobile", label: "Mobile Apps" }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of our recent work that helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`transition-all ${
                activeFilter === filter.id
                  ? "gradient-bg text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              variant={activeFilter === filter.id ? "default" : "secondary"}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer hover-lift">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={item.image}
                  alt={item.description}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="gradient-bg text-white hover:opacity-90 transition-all">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
