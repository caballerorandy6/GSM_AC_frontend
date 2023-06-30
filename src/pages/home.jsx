import Hero from "../components/Hero";
import AboutUs from "./about-us";
import Services from "./services";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "./contact";

const Home = () => {
  return (
    <section>
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
    </section>
  );
};

export default Home;
