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
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
};

export default App;
