import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Now available on iOS & Android
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Build Resumes That
            <span className="block text-gradient">Land You The Job</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Create professional, ATS-optimized resumes in minutes. Powered by AI to help you stand out from the crowd and get more interviews.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Apple className="w-5 h-5" />
              Download for iOS
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Get it on Android
            </Button>
          </div>
          
          {/* Phone mockup */}
          <div className="relative max-w-xs mx-auto animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="relative z-10 animate-float">
              <div className="w-64 h-[520px] mx-auto bg-foreground rounded-[3rem] p-2 shadow-elevated">
                <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden flex flex-col">
                  <div className="h-6 bg-foreground/5 flex items-center justify-center">
                    <div className="w-20 h-4 bg-foreground rounded-full" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-3">
                    <div className="text-left">
                      <div className="text-xs font-semibold text-foreground mb-1">Your Resume</div>
                      <div className="h-2 w-3/4 bg-accent/20 rounded" />
                    </div>
                    <div className="flex-1 bg-secondary rounded-xl p-3 space-y-2">
                      <div className="h-2 w-full bg-accent/30 rounded" />
                      <div className="h-2 w-5/6 bg-muted-foreground/20 rounded" />
                      <div className="h-2 w-4/5 bg-muted-foreground/20 rounded" />
                      <div className="h-6 mt-3" />
                      <div className="h-2 w-2/3 bg-accent/30 rounded" />
                      <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                      <div className="h-2 w-3/4 bg-muted-foreground/20 rounded" />
                      <div className="h-6 mt-3" />
                      <div className="h-2 w-1/2 bg-accent/30 rounded" />
                      <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                    </div>
                    <div className="h-10 bg-accent rounded-xl flex items-center justify-center text-xs font-medium text-accent-foreground">
                      Export PDF
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="w-full h-full bg-accent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
