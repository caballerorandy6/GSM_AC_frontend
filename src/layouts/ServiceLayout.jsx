import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const ServiceLayout = ({ title, description }) => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ServiceLayout;
