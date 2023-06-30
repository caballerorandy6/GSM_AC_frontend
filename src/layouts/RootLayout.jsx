import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Headroom from "react-headroom";

const RootLayout = () => {
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
          <Nav />
        </Headroom>
      </header>
      <main>
        <Outlet />
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default RootLayout;
