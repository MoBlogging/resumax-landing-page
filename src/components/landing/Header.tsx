import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/resumax-logo.png.asset.json";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Resumax app logo"
            className="w-9 h-9 rounded-xl object-cover"
          />
          <span className="text-xl font-semibold text-foreground">Resumax</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Download
          </a>
        </nav>

        <Button variant="accent" size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
