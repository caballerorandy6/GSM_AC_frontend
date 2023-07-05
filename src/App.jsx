import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//Pages
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Services from "./pages/services";
import Contact from "./pages/contact";

//Layouts
import RootLayout from "./layouts/RootLayout";
import ServiceLayout from "./layouts/ServiceLayout";

//Components
import ServicesDetails from "./components/ServicesDetails";
import AirConditioningInstallation from "./components/AirConditioningInstallation";
import AirConditioningRepair from "./components/AirConditioningRepair";
import HeatingInstallation from "./components/HeatingInstallation";
import HeatingRepair from "./components/HeatingRepair";
import AirDuctSanitizing from "./components/AirDuctSanitizing";
import AtticInsulation from "./components/AtticInsulation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main Menu */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Services Menu */}
      <Route path="all-services" element={<ServiceLayout />}>
        <Route index element={<ServicesDetails />} />
        <Route
          path="air-conditioning-installation"
          element={<AirConditioningInstallation />}
        />
        <Route
          path="air-conditioning-repair"
          element={<AirConditioningRepair />}
        />
        <Route path="heating-installation" element={<HeatingInstallation />} />
        <Route path="heating-repair" element={<HeatingRepair />} />
        <Route path="air-duct-Sanitizing" element={<AirDuctSanitizing />} />
        <Route path="attic-insulation" element={<AtticInsulation />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
