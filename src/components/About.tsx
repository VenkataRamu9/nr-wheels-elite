import { CheckCircle } from "lucide-react";
import ravitejaImg from "@/assets/raviteja.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src={ravitejaImg}
                alt="Raviteja - Owner of N R Car Travels"
                className="relative rounded-2xl shadow-[0_8px_32px_hsl(var(--primary)/0.2)] w-full object-cover"
              />
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">N R Car Travels</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Welcome to N R Car Travels, your trusted partner for premium car rental services in Vijayawada, Andhra Pradesh. Led by <span className="text-primary font-semibold">Raviteja</span>, we specialize in providing both self-drive cars and chauffeur-driven vehicles for all your travel needs.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With a commitment to excellence and customer satisfaction, we offer 24/7 availability and are ready to travel anywhere across India. Whether you need a car for a business trip, family vacation, or local commute, we've got you covered.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Premium Fleet</h3>
                  <p className="text-muted-foreground">Well-maintained vehicles with the latest features and maximum comfort</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">24/7 Availability</h3>
                  <p className="text-muted-foreground">Round-the-clock service, 7 days a week, whenever you need us</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Pan-India Service</h3>
                  <p className="text-muted-foreground">Ready to travel anywhere in India with reliable and safe transportation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
