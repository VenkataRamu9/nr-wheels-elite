import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CarsHighlight from "@/components/CarsHighlight";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CarsHighlight />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
