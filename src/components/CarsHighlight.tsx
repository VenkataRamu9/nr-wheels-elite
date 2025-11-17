const CarsHighlight = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-6 animate-glow-pulse">
            We have a variety of cars available for{" "}
            <span className="text-primary">self-drive</span> and{" "}
            <span className="text-primary">with-driver</span> services
          </p>
          <p className="text-lg md:text-xl text-muted-foreground animate-float">
            Call us for availability and instant booking
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};

export default CarsHighlight;
