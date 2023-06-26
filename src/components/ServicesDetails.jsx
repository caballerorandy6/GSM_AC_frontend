import AirConditioningInstallation from "./AirConditioningInstallation";
import AirConditioningRepair from "./AirConditioningRepair";
import HeatingInstallation from "./HeatingInstallation";
import HeatingRepair from "./HeatingRepair";
import AirDuctSanitizing from "./AirDuctSanitizing";
import AtticInsulation from "./AtticInsulation";
import ServicesNav from "./ServicesNav";

const ServicesDetails = () => {
  return (
    <section id="all-services" className="mx-auto w-full bg-gray-50">
      <ServicesNav />
      <AirConditioningInstallation />
      <AirConditioningRepair />
      <HeatingInstallation />
      <HeatingRepair />
      <AirDuctSanitizing />
      <AtticInsulation />
    </section>
  );
};

export default ServicesDetails;
