import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="overflow-y-scroll">
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
};

export default RootLayout;
