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

//Components
import AllServices from "./components/AllServices";

//Layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="all-services" element={<AllServices />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
