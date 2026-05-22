import { useState } from "react";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  // Shared state to hold the selected service text
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="bg-[#0a0806] min-h-screen text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Services />
      
      {/* Pass setter function down to Pricing */}
      <Pricing setSelectedService={setSelectedService} />
      
      <Testimonials />
      
      {/* Pass current value and setter down to Booking */}
      <Booking selectedService={selectedService} setSelectedService={setSelectedService} />
      
      <Footer />
    </div>
  );
};

export default App;