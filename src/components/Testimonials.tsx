import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Vijay Kumar",
      review: "Best car travel service in Vijayawada! Raviteja anna is very friendly and the cars are in excellent condition.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      review: "Booked a self-drive car for a weekend trip. Smooth process, clean vehicle, and very affordable!",
      rating: 5,
    },
    {
      name: "Ramesh Reddy",
      review: "They even provide cars with drivers and the service is too good. Highly recommended!",
      rating: 5,
    },
    {
      name: "Anitha Devi",
      review: "24/7 availability is a lifesaver. I booked at midnight and got the car within 30 minutes.",
      rating: 5,
    },
    {
      name: "Suresh Babu",
      review: "Professional, reliable, and comfortable. Will definitely book again!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_32px_hsl(var(--primary)/0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
              <p className="font-semibold text-foreground">- {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
