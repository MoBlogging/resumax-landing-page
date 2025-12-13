import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

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
            Join over 2 million job seekers who have created winning resumes with Resumax. Download now and start your success story.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="xl" 
              className="w-full sm:w-auto bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            >
              <Apple className="w-5 h-5" />
              Download for iOS
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Play className="w-5 h-5" />
              Get it on Android
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
