import { useState } from "react";
import { Card } from "@/components/ui/card";
import car1 from "@/assets/car-animation-1.png";
import car2 from "@/assets/car-animation-2.png";
import car3 from "@/assets/car-animation-3.png";

const AnimatedCars = () => {
  const [activeCar, setActiveCar] = useState<number | null>(null);

  const cars = [
    { id: 1, image: car1, name: "Premium Sports Car" },
    { id: 2, image: car2, name: "Luxury SUV" },
    { id: 3, image: car3, name: "Executive Sedan" },
  ];

  const handleCarClick = (id: number) => {
    setActiveCar(id);
    setTimeout(() => {
      window.location.href = "tel:8790496444";
    }, 1500);
  };

  return (
    <section id="cars" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your <span className="text-primary">Ride</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any car to start your journey with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card
              key={car.id}
              onClick={() => handleCarClick(car.id)}
              className={`relative overflow-hidden bg-card border-border cursor-pointer transition-all duration-500 group hover:border-primary/50 hover:shadow-[0_12px_48px_hsl(var(--primary)/0.3)] animate-fade-in ${
                activeCar === car.id ? "animate-zoom-speed" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className={`w-full h-full object-contain transition-all duration-700 ${
                    activeCar === car.id
                      ? "scale-[3] translate-x-[100%] opacity-0"
                      : "group-hover:scale-110"
                  }`}
                />
                
                {/* Speed trail effect */}
                {activeCar === car.id && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-speed-trail" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center animate-fade-in bg-background/90 p-6 rounded-lg border-2 border-primary shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                        <p className="text-2xl font-bold text-primary mb-2">Ready to Go!</p>
                        <p className="text-lg text-foreground">Call us at</p>
                        <p className="text-3xl font-bold text-primary animate-glow-pulse">
                          8790496444
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground">{car.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Click to book this car type
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            We have a variety of cars available for self-drive and with-driver services
          </p>
          <p className="text-sm text-muted-foreground">
            Call us for availability and instant booking
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCars;
