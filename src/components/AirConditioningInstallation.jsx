import { Link } from "react-router-dom";

const AirConditioningInstallation = () => {
  return (
    <section
      id="air-conditioning-installation"
      className="w-10/12 mx-auto min-h-screen"
    >
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-[#cbb26a] font-bold pt-10">
        Take Advantage of Our Affordable AC Replacement Services Today!
      </h1>
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12  content-none flex h-1 mt-4 mx-auto bg-black/70"></div>
      <img
        src="./worker3.webp"
        alt="Worker 3"
        className="h-80 w-96 mx-auto mt-10 object-cover rounded-lg shadow-lg"
      />
      <p className="text-black/70 mt-10 mb-4">
        You should not delay when it comes to replacing your old and damaged air
        conditioning system. Doing so means you are going to end up spending
        more money on recurring repairs and potentially more damage. When
        it&apos;s already very old, it means a lot more frequent repairs will be
        needed. This isn&apos;t something that you’d want to happen. Save
        yourself from that. If it&apos;s the cost of our quality air
        conditioning replacement services you are worried about, there is G S M
        A/C & General Contractor INC. that can offer you really affordable rates
        for the high-quality services that we provide. Our affordable AC
        replacement services are just a call away from the property owners in
        the Cypress, TX area.
      </p>
      <h3 className="text-[#cbb26a] font-bold text-xl">
        When Replacing an AC System
      </h3>
      <p className="text-black/70 mb-4">
        Air conditioning systems can be tricky to deal with, especially if you
        have no experience whatsoever. You need the expertise and proper
        training as well as the right tools in order to successfully replace an
        air conditioning system. It can get quite overwhelming planning the
        entire replacement process. So, you should leave the job to
        professionals like us. We can determine which air conditioning system
        will work best for your home or workplace, and we&apos;ll handle the
        replacement process from start to end.
      </p>
      <h3 className="text-[#cbb26a] font-bold text-xl">
        We Can Replace Air Conditioning Systems!
      </h3>
      <p className="text-black/70 mb-4">
        Our air conditioning replacement service is all about using the right
        tools and following the correct procedures so that the new air
        conditioning system will be installed according to industry standards.
        We&apos;ll prepare the tools needed for the replacement task, including
        proper sealants and fixatives. We&apos;ll then proceed to remove the
        existing air conditioning system, making sure we do it correctly so that
        we won&apos;t cause any kind of damage to the wall behind the AC unit.
        We&apos;ll then install the new AC system, making sure we double-check
        our work for accuracy. If your air conditioning system is too old, you
        know who to call for a successful replacement.
      </p>
      <p className="text-black/70 mb-10">
        When it comes to affordable AC replacement services in Cypress, TX, you
        can always rely on G S M A/C & General Contractor INC.. To book our
        services, feel free to call us at{" "}
        <Link
          className="text-indigo-500 hover:text-indigo-600"
          to="tel: +12812354684"
        >
          (281) 235-4684
        </Link>{" "}
        today!
      </p>
      <div className="w-full content-none mx-auto h-1 mt-4 bg-black/10"></div>
    </section>
  );
};

export default AirConditioningInstallation;
