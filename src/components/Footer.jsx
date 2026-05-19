import { Link } from "react-router-dom";
import { Wind, MessageCircle, Share2, Camera, Globe, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8 relative z-10 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mt-2">
              <a href="8870010339" className="p-2 rounded-full bg-background border border-white/10 hover:border-primary text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background border border-white/10 hover:border-primary text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background border border-white/10 hover:border-primary text-muted-foreground hover:text-primary transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background border border-white/10 hover:border-primary text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
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
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors w-fit">Careers</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors w-fit">Blog</a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-foreground mb-2">Contact Info</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">
                2/134 Ayya house ,Ambalavanapuram,Mahendragiri post,Tirunelveli Dist-627 133, Tamil Nadu, India.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-muted-foreground">+91 8870010339</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-muted-foreground">srivaigunda@gmail.com</p>
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
