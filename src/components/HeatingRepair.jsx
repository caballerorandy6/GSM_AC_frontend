import { Link } from "react-router-dom";

const HeatingRepair = () => {
  return (
    <section id="heating-repair" className="w-10/12 mx-auto">
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-[#cbb26a] font-bold pt-10">
        Heating Repair Company That You Can Trust!
      </h1>
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 content-none mx-auto h-1 mt-4 bg-black/70"></div>
      <img
        src="./worker1.webp"
        alt="Worker 1"
        className="h-80 w-96 mx-auto mt-10 object-cover rounded-lg shadow-lg"
      />
      <p className="text-black/70 mt-10 mb-4">
        You need to be careful around your home’s HVAC system. This is because
        it is a complex system that keeps a home at a comfortable temperature.
        Your HVAC system also helps regulate the temperature and humidity in
        your home. You should keep your HVAC system in great condition if you
        want to keep your family comfortable. You can do this by calling a
        reliable heating repair service. G S M A/C & General Contractor INC. is
        a highly recommended company that you can trust in Cypress, TX when it
        comes to your heating repair needs.
      </p>
      <h3 className="text-[#cbb26a] font-bold text-xl">
        Why Fix Your HVAC System Right Away
      </h3>
      <p className="text-black/70 mb-4">
        Some signs will tell you that your HVAC system needs immediate repair.
        Strange odors, vibrations, and sounds emanating from your HVAC system
        should not be ignored. Once signs of HVAC failure show, you must take
        action right away. Damage will increase in proportion to how long you
        wait. This means higher repair costs. The best course of action is an
        immediate repair to stop further harm. Avoid taking the DIY route,
        though, because doing so can potentially lead to more problems. If you
        have some HVAC repair experts like us, you don’t need to worry about the
        cost, as we provide some of the best HVAC service rates.
      </p>
      <h3 className="text-[#cbb26a] font-bold text-xl">
        Let Us Fix Your Heating System
      </h3>
      <p className="text-black/70 mb-4">
        We have extensive training in the repair of complex HVAC systems. We can
        handle any HVAC work because we have the experience, knowledge, and
        abilities. We have the equipment to perform any HVAC repair service.
        With us, you can guarantee the best solution for your damaged HVAC
        system. We can guarantee efficient service and quality solutions because
        we operate with a high-standard checklist as part of our HVAC repair
        process.
      </p>
      <p className="text-black/70 mb-10">
        With years of experience, trusting a professional like G S M A/C &
        General Contractor INC. is the right choice. If you need our quality
        heating repair service in Cypress, TX, feel free to contact us at{" "}
        <Link className="text-indigo-600" to="tel: +12812235020">
          (281) 223-5020
        </Link>{" "}
        right away!
      </p>
      <div className="w-full content-none mx-auto h-1 mt-4 bg-black/10"></div>
    </section>
  );
};

export default HeatingRepair;
