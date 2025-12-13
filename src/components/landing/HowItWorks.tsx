const steps = [
  {
    number: "01",
    title: "Download the App",
    description: "Get Resumax free on iOS or Android and create your account in seconds."
  },
  {
    number: "02",
    title: "Choose a Template",
    description: "Browse our collection of professional templates designed for your industry."
  },
  {
    number: "03",
    title: "Fill in Your Details",
    description: "Add your experience, skills, and education. Our AI helps you write compelling content."
  },
  {
    number: "04",
    title: "Export & Apply",
    description: "Download your polished resume and start applying to your dream jobs."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Create Your Resume in
            <span className="text-gradient"> 4 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground">
            No complicated processes. Just a straightforward path to your perfect resume.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative flex gap-6 p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <span className="text-5xl font-bold text-accent/20">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
