import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8 relative z-10 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-foreground mb-2">About Us</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Srivaigunda Group is dedicated to delivering sustainable solutions for a better future. We combine innovation with responsibility.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-foreground mb-2">Quick Links</h3>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors w-fit">Home</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors w-fit">About Us</Link>
            <Link to="/client-satisfaction" className="text-muted-foreground hover:text-primary transition-colors w-fit">Projects & Clients</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors w-fit">Contact Options</Link>
            <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors w-fit">Careers</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors w-fit">Blog</Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-foreground mb-2">Resources</h3>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors w-fit">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors w-fit">Terms of Service</Link>
            <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors w-fit">FAQ</Link>
            <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors w-fit">Support</Link>
            <Link to="/sitemap" className="text-muted-foreground hover:text-primary transition-colors w-fit">Sitemap</Link>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-foreground mb-2">Contact Info</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground text-sm">
                2/134 Ayya house, Ambalavanapuram, Mahendragiri post, Tirunelveli Dist-627 133, Tamil Nadu, India.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="tel:+918870010339" className="text-muted-foreground hover:text-primary transition-colors">+91 8870010339</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="mailto:srivaigunda@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">srivaigunda@gmail.com</a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Srivaigunda Group. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm text-center md:text-right">
            Designed with <span className="text-red-500">♥</span> for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
