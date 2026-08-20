import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const CTA = () => {
  return (
    <section id="download" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(168_76%_42%/0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            Join job seekers who have created winning resumes with Resumax. Download on the App Store and start your success story.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="xl" 
              className="w-full sm:w-auto bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            >
              <Apple className="w-5 h-5" />
              Download on the App Store
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/50">
            Free to download • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
