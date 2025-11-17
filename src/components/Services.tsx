import { Card } from "@/components/ui/card";
import { Car, UserCheck, Clock, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Self Drive Cars",
      description: "Choose from our premium fleet and drive yourself. Perfect for those who love the freedom of the road.",
      features: ["No driver costs", "Complete privacy", "Flexible timing", "Easy booking"],
    },
    {
      icon: UserCheck,
      title: "Cars with Driver",
      description: "Relax and enjoy the journey with our professional, experienced chauffeurs at your service.",
      features: ["Professional drivers", "Local expertise", "Stress-free travel", "Door-to-door service"],
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "We're always ready when you need us. Book anytime, day or night, 365 days a year.",
      features: ["Round-the-clock service", "Emergency bookings", "Late-night pickups", "No holiday breaks"],
    },
    {
      icon: MapPin,
      title: "Pan-India Travel",
      description: "Whether it's a local trip or an interstate journey, we're ready to take you anywhere in India.",
      features: ["Interstate permits", "Long-distance travel", "Outstation packages", "Multi-city tours"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer flexible car rental solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_32px_hsl(var(--primary)/0.2)] group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
