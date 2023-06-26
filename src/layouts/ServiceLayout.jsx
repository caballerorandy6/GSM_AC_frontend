import { Outlet } from "react-router-dom";

const ServiceLayout = ({ title, description }) => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ServiceLayout;
