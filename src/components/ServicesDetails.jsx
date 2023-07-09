import AirConditioningInstallation from "./AirConditioningInstallation";
import AirConditioningRepair from "./AirConditioningRepair";
import HeatingInstallation from "./HeatingInstallation";
import HeatingRepair from "./HeatingRepair";
import AirDuctSanitizing from "./AirDuctSanitizing";
import AtticInsulation from "./AtticInsulation";

const ServicesDetails = () => {
  return (
    <section id="all-services">
      <HeatingInstallation />
      <AirConditioningRepair />
      <HeatingRepair />
      <AirConditioningInstallation />
      <AirDuctSanitizing />
      <AtticInsulation />
    </section>
  );
};

export default ServicesDetails;
