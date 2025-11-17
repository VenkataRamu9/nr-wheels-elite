import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Fuel, Settings } from "lucide-react";
import fortunerImg from "@/assets/car-fortuner.jpg";
import sedanImg from "@/assets/car-sedan.jpg";
import hatchbackImg from "@/assets/car-hatchback.jpg";

const Fleet = () => {
  const cars = [
    {
      name: "Toyota Fortuner",
      image: fortunerImg,
      category: "Premium SUV",
      price: "₹4,500/day",
      features: ["7 Seater", "Diesel", "Automatic"],
      icons: [Users, Fuel, Settings],
    },
    {
      name: "Premium Sedan",
      image: sedanImg,
      category: "Luxury Sedan",
      price: "₹2,500/day",
      features: ["5 Seater", "Petrol", "Automatic"],
      icons: [Users, Fuel, Settings],
    },
    {
      name: "Compact Hatchback",
      image: hatchbackImg,
      category: "City Car",
      price: "₹1,500/day",
      features: ["5 Seater", "Petrol", "Manual"],
      icons: [Users, Fuel, Settings],
    },
  ];

  const handleBookNow = () => {
    window.open("https://wa.me/918790496444?text=Hi, I'd like to book a car", "_blank");
  };

  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Premium Fleet</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_12px_48px_hsl(var(--primary)/0.2)] group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {car.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{car.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{car.price}</span>
                </div>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  {car.features.map((feature, idx) => {
                    const IconComponent = car.icons[idx];
                    return (
                      <div key={idx} className="flex items-center gap-1">
                        {IconComponent && <IconComponent className="h-4 w-4" />}
                        <span>{feature}</span>
                      </div>
                    );
                  })}
                </div>
                <Button
                  onClick={handleBookNow}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Prices are indicative and may vary based on duration and distance. Contact us for exact quotes.
          </p>
          <p className="text-sm text-muted-foreground">
            All vehicles are regularly serviced and maintained to ensure your safety and comfort.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
