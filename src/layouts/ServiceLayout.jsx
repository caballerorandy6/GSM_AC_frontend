import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ServicesNav from "../components/ServicesNav";
import Headroom from "react-headroom";

const ServiceLayout = () => {
  return (
    <>
      <header>
        <Headroom
          style={{
            WebkitTransition: "all .3s ease-in-out",
            MozTransition: "all .3s ease-in-out",
            OTransition: "all .3s ease-in-out",
            transition: "all .3s ease-in-out",
          }}
        >
          <ServicesNav />
        </Headroom>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ServiceLayout;
