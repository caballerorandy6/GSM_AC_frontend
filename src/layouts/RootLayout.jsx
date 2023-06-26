import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

const RootLayout = ({ title, description }) => {
  return (
    <>
      <header>
        <Nav />
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
