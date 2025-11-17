import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="N R Car Travels" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground">
              Your trusted partner for premium car rental services in Vijayawada. Available 24/7 for all your travel needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </button>
              <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="block text-muted-foreground hover:text-primary transition-colors">
                Our Services
              </button>
              <button onClick={() => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" })} className="block text-muted-foreground hover:text-primary transition-colors">
                Our Fleet
              </button>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>8790496444</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm break-all">bajarangtravels6893@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Vijayawada, Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} N R Car Travels. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Powered by Raviteja | Available 24/7
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
