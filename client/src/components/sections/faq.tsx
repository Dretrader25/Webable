import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to complete a website project?",
      answer: "Project timelines vary depending on complexity, but most websites are completed within 4-8 weeks. Simple sites can be done in 2-3 weeks, while complex e-commerce or custom applications may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! All our plans include ongoing support. Starter plans include 3 months of support, Professional plans include 6 months, and Enterprise plans include 12 months. After that, we offer monthly maintenance packages to keep your site updated and secure."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Absolutely! We offer comprehensive SEO optimization, automated marketing solutions, and AI-powered content creation. Our team can help you improve search rankings, set up email marketing campaigns, and create engaging content that converts visitors into customers."
    },
    {
      question: "What if I need revisions or changes?",
      answer: "All our plans include unlimited revisions during the design and development phase. We want to ensure you're completely satisfied with the final result. After launch, minor changes are included in your support period, while major changes may require additional project work."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, we work with clients worldwide! Our team is experienced in working across different time zones and we use modern collaboration tools to ensure smooth communication. We're happy to accommodate meeting times that work for your schedule."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to the most common questions about our services and process.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-muted/30 rounded-2xl overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold text-foreground text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`text-muted-foreground transition-transform duration-300 ${
                    openItem === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openItem === index && (
                <div className="px-8 pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
