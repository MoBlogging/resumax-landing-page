import { Sparkles, Shield, Zap, FileCheck, Palette, Globe } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    description: "Get intelligent suggestions to improve your resume content and make it more impactful."
  },
  {
    icon: Shield,
    title: "ATS-Optimized",
    description: "Beat applicant tracking systems with resumes formatted to pass automated screenings."
  },
  {
    icon: Zap,
    title: "Quick & Easy",
    description: "Create a professional resume in under 10 minutes with our intuitive builder."
  },
  {
    icon: FileCheck,
    title: "Multiple Formats",
    description: "Export your resume as PDF, DOCX, or share it online with a unique link."
  },
  {
    icon: Palette,
    title: "Beautiful Templates",
    description: "Choose from 50+ professionally designed templates for any industry."
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Create resumes in 30+ languages to apply for jobs anywhere in the world."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="text-gradient"> Stand Out</span>
          </h2>
          <p className="text-muted-foreground">
            Powerful features designed to help you create the perfect resume and land your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
