import Hero from "../components/Hero";
import AboutUs from "./about-us";
import Services from "./services";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "./contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
