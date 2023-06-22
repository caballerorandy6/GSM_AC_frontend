import Footer from "./Footer";
import AirConditioningInstallation from "./AirConditioningInstallation";
import AirConditioningRepair from "./AirConditioningRepair";

const AllServices = () => {
  return (
    <section id="all-services" className="pt-28  mx-auto w-10/12">
      <AirConditioningInstallation />
      <AirConditioningRepair />
      <Footer />
    </section>
  );
};

export default AllServices;
