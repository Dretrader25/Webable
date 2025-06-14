export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Subscribe and Onboarding",
      description: "Choose a plan that fits your needs — then begin the easiest onboarding process you've ever experienced!"
    },
    {
      number: "2",
      title: "Design & Development",
      description: "Upload your content, or answer a few simple questions. We handle the rest."
    },
    {
      number: "3",
      title: "Launch & Optimize",
      description: "You’ll get a custom, mobile-ready, SEO-friendly website in your inbox within hours. Seriously."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures every project is delivered on time, on budget, and exceeds your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const gradientClass = index === 0 ? 'gradient-bg' : index === 1 ? 'gradient-bg-2' : 'gradient-bg-3';
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${gradientClass} rounded-full flex items-center justify-center mx-auto mb-6 glow-effect`}>
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}