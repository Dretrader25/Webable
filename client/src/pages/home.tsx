import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Pricing from "@/components/sections/pricing";
import Portfolio from "@/components/sections/portfolio";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
