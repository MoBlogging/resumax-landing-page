import { Button } from "@/components/ui/button";
import { Apple, Clock, FilePlus2, User } from "lucide-react";
import logoAsset from "@/assets/resumax-logo.png.asset.json";

const mockSteps = [
  { n: "1", title: "Upload", desc: "Pick your current resume as a PDF." },
  { n: "2", title: "Improve", desc: "Wording, structure and keywords are rewritten." },
  { n: "3", title: "Download", desc: "Export a clean, ATS-readable PDF." },
];

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
            Now available on iOS
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Build Resumes That
            <span className="block text-gradient">Land You The Job</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Create professional, ATS-optimized resumes in minutes. Powered by AI to help you stand out from the crowd and get more interviews.
          </p>
          
          <div className="flex justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Apple className="w-5 h-5" />
              Download on the App Store
            </Button>
          </div>
          
          {/* Phone mockup */}
          <div className="relative max-w-xs mx-auto animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="relative z-10 animate-float">
              <div className="w-64 h-[520px] mx-auto bg-foreground rounded-[3rem] p-2 shadow-elevated">
                <div className="w-full h-full bg-[hsl(0_0%_7%)] rounded-[2.5rem] overflow-hidden flex flex-col text-left">
                  {/* App bar */}
                  <div className="flex items-center justify-center gap-2 py-3 bg-[hsl(0_0%_11%)]">
                    <img src={logoAsset.url} alt="Resumax app icon" className="w-4 h-4 object-contain" />
                    <span className="text-[11px] font-semibold text-white">Resumax</span>
                  </div>

                  <div className="flex-1 px-4 pt-4 overflow-hidden">
                    <div className="text-sm font-bold text-white">Improve a resume</div>
                    <p className="text-[9px] text-white/50 mt-1 leading-snug">
                      Upload a PDF and get back a cleaner, ATS-readable version.
                    </p>

                    {/* Dropzone */}
                    <div className="mt-3 rounded-xl border border-dashed border-white/20 bg-white/[0.03] py-5 flex flex-col items-center justify-center gap-1">
                      <FilePlus2 className="w-5 h-5 text-white/50" />
                      <span className="text-[10px] font-semibold text-white">Choose a PDF</span>
                      <span className="text-[8px] text-white/40">Up to 10 pages</span>
                    </div>

                    <div className="mt-3 text-[7px] tracking-widest text-white/40 font-semibold">
                      HOW IT WORKS
                    </div>

                    <div className="mt-1.5 rounded-xl border border-white/10 divide-y divide-white/10">
                      {mockSteps.map((s) => (
                        <div key={s.n} className="flex gap-2 px-2.5 py-2">
                          <span className="text-[8px] text-white/40 mt-[2px]">{s.n}</span>
                          <div>
                            <div className="text-[9px] font-semibold text-white">{s.title}</div>
                            <p className="text-[8px] text-white/50 leading-snug">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tab bar */}
                  <div className="grid grid-cols-3 bg-[hsl(0_0%_11%)] py-2">
                    {[
                      { icon: Clock, label: "History", active: false },
                      { icon: FilePlus2, label: "Upload", active: true },
                      { icon: User, label: "Profile", active: false },
                    ].map(({ icon: Icon, label, active }) => (
                      <div key={label} className="flex flex-col items-center gap-0.5">
                        <Icon className={`w-3.5 h-3.5 ${active ? "text-accent" : "text-white/50"}`} />
                        <span className={`text-[7px] ${active ? "text-accent" : "text-white/50"}`}>{label}</span>
                      </div>
                    ))}
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
