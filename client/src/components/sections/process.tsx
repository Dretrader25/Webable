export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description: "We start by understanding your business, goals, and target audience to create a tailored strategy that drives results."
    },
    {
      number: "2",
      title: "Design & Development",
      description: "Our team creates beautiful, functional designs and develops them using the latest technologies and best practices."
    },
    {
      number: "3",
      title: "Launch & Optimize",
      description: "We launch your project and continuously monitor performance, making optimizations to ensure maximum impact."
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
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
