import { Link } from "react-router-dom";
import logoAsset from "@/assets/resumax-logo.png.asset.json";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="Resumax app logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-lg font-semibold text-foreground">Resumax</span>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">Help Center</a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Resumax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
