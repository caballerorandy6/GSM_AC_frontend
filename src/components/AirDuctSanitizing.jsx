import { Link } from "react-router-dom";

const AirDuctSanitizing = () => {
  return (
    <section id="air-duct-Sanitizing" className="w-10/12 mx-auto min-h-screen">
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-[#cbb26a] font-bold pt-10">
        Quality HVAC Services and Air Duct Sanitizing Services!
      </h1>
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 content-none mx-auto h-1 mt-4 bg-black/70"></div>
      <img
        src="./worker4.webp"
        alt="Worker 4"
        className="h-80 w-96 mx-auto mt-10 object-cover rounded-lg shadow-lg"
      />
      <p className="text-black/70 mt-10 mb-4">
        The negative impacts of mold and dust are significantly decreased by
        cleaning up the contaminants from your air duct system. Those who are
        susceptible to indoor air pollution, especially those with allergies,
        should breathe clean, healthy air that is constantly flowing. We provide
        quality HVAC services that also include special air duct sanitizing
        services. Here are the top 4 comfort-related reasons why you need G S M
        A/C & General Contractor INC..
      </p>
      <h3 className="text-[#cbb26a] font-bold text-xl">
        Cleaner Home Environment
      </h3>
      <p className="text-black/70 mb-4">
        After a few hours of inactivity, dust in your ductwork begins to collect
        like it does everywhere else in your house in Cypress, TX. The dust
        starts to move when the system turns on, but it doesn’t stay in the
        ductwork. It enters your home through the walls and floors and settles
        into the carpeting, furniture, and bedding. Your home will become a
        cleaner environment to live in if you remove dust from within.
      </p>
      <h3 className="text-[#cbb26a] font-bold text-xl">Better Air Quality</h3>
      <p className="text-black/70 mb-4">
        What level of air quality are you breathing? Cleaner air keeps your
        family safe even if no one in your home has allergies or respiratory
        issues. Every time you breathe in dangerous pollutants and dust, it may
        cause sneezing and coughing, as well as have an impact on your sinuses
        and bronchial congestion. You’ll always have cleaner air to breathe if
        you keep your air ducts clean.
      </p>
      <h3 className="text-[#cbb26a] font-bold text-xl">Fewer Irritants</h3>
      <p className="text-black/70 mb-4">
        Your air ducts contain more than just dust. There are also contaminants
        and harmful microorganisms there. The air you breathe may contain
        bacteria, pollen, mildew, pet dander, and other contaminants. Instead of
        recirculating possible issues, our routine air duct cleaning services
        can help keep your family far healthier.
      </p>
      <h3 className="text-[#cbb26a] font-bold text-xl">Better Odor</h3>
      <p className="text-black/70 mb-4">
        Every house has a distinct aroma. It’s not always the most enjoyable
        experience. Stale odours can develop over time and can be caused by a
        variety of things, including mildew, paint fumes, tobacco usage, food,
        cleaning supplies, and pets. You’ll have a house with a fresher scent
        thanks to our thorough cleaning of the air ducts, which helps remove
        aromas that are trapped in dust particles.
      </p>
      <p className="text-black/70 mb-10">
        Call G S M A/C & General Contractor INC. at{" "}
        <Link className="text-indigo-600" to="tel: +12812235020">
          (281) 223-5020
        </Link>{" "}
        if you require our air duct cleaning & sanitizing services for your
        property in Cypress, TX. You can also call our team for quality HVAC
        services.
      </p>
      <div className="w-full content-none mx-auto h-1 mt-4 bg-black/10"></div>
    </section>
  );
};

export default AirDuctSanitizing;
