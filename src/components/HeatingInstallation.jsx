import { Link } from "react-router-dom";

const HeatingInstallation = () => {
  return (
    <section id="heating-installation" className="w-10/12 mx-auto min-h-screen">
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-[#cbb26a] font-bold pt-10">
        Home Heating Repair and Installation Available to You!
      </h1>
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 content-none mx-auto h-1 mt-4 bg-black/70"></div>
      <img
        src="./worker2.webp"
        alt="Worker 2"
        className="h-80 w-96 mx-auto mt-10 object-cover rounded-lg shadow-lg"
      />
      <p className="text-black/70 mt-10 mb-4">
        If you are planning to have a new home constructed in Cypress, TX, one
        of the first things that you would need to do is to choose a reliable
        and professional heating installation company. This is one of the most
        essential parts of the house, especially if you want to be comfortable
        inside your own home. This is why you should always make sure to hire G
        S M A/C & General Contractor INC. when it comes to the heating system in
        your home. Here are some benefits to hiring home heating repair experts
        like us:
      </p>

      <h3 className="text-[#cbb26a] font-bold text-xl">
        Professionals can provide you with a system that is efficient and works
        well with the house
      </h3>

      <p className="text-black/70 mb-4">
        When it comes to the heating installation of your home you would not
        only be dealing with the actual installation of the furnace or air
        conditioner or the wiring of your heating system you would also be
        dealing with the type of system you should have for your home. You would
        also have to consider the climate of your area and the design of your
        house when you are deciding which kind of system to buy.
      </p>

      <p className="text-black/70 mb-4">
        When you leave the heating installation to us, you would no longer have
        to worry about any of this. We can guide you in buying the right system
        for your home and your area.
      </p>

      <h3 className="text-[#cbb26a] font-bold text-xl">
        Professionals have the skills and training to do the job
      </h3>

      <p className="text-black/70 mb-4">
        Another reason why it is better to leave the installation of the system
        to professionals like us is because we would already be trained to
        handle such a complicated task and install the right kind of heating
        system for your home. You would not have to worry about anything during
        or after the installation, we would be responsible for it.
      </p>

      <p className="text-black/70 mb-10">
        If you want to make sure that the heating system installed in your home
        in Cypress, TX is up to par with the standards of the industry, hire
        experts. G S M A/C & General Contractor INC. offers a reliable home
        heating repair and installation service that you can count on. If you
        need more information about the services we offer, give us a call at{" "}
        <Link className="text-indigo-600" to="tel: +12812354684">
          (281) 235-4684
        </Link>{" "}
        and let us address your concerns.
      </p>
      <div className="w-full content-none mx-auto h-1 mt-4 bg-black/10"></div>
    </section>
  );
};

export default HeatingInstallation;
