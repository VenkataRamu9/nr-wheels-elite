import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:8790496444";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918790496444?text=Hi, I'd like to book a car", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
            N R Car Travels
          </h1>
          <p className="text-2xl md:text-3xl text-foreground mb-4 font-light">
            Self Drive & Chauffeur Cars
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Anytime, Anywhere in India
          </p>
          <div className="flex items-center justify-center gap-2 text-primary mb-12">
            <div className="h-px w-16 bg-primary" />
            <span className="text-lg font-semibold">24/7 Available</span>
            <div className="h-px w-16 bg-primary" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={handleCall}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300 text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300 text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Booking
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span>Premium Vehicles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span>Professional Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span>Best Rates</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
