const AboutUs = () => {
  return (
    <section id="about-us">
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl gold font-bold pt-14">
        About Our HVAC Repair & Installation Company
      </h1>
      <div className="w-96 content-none mx-auto h-1 mt-4 bg-black/70"></div>

      <ul className="mx-auto md:flex md:w-6/12 xl:flex-row xl:w-full xl:justify-center xl:items-center text-center flex-col gap-2 mt-10 text-lg lg:text-xl">
        <li className="text-indigo-700 font-semibold">
          Air Conditioning Installation
        </li>
        <div className="divider lg:divider-horizontal hidden xl:flex">|</div>
        <li className="text-indigo-700 font-semibold">
          Air Conditioning Repair
        </li>
        <div className="divider lg:divider-horizontal hidden xl:flex">|</div>
        <li className="text-indigo-700 font-semibold">Heating Installation</li>
        <div className="divider lg:divider-horizontal hidden xl:flex">|</div>
        <li className="text-indigo-700 font-semibold">Heating Repair</li>
        <div className="divider lg:divider-horizontal hidden xl:flex">|</div>
        <li className="text-indigo-700 font-semibold">Air Duct Cleaning</li>
        <div className="divider lg:divider-horizontal hidden xl:flex">|</div>
        <li className="text-indigo-700 font-semibold">Air Duct Sanitizing</li>
        <div className="divider lg:divider-horizontal hidden xl:flex">|</div>
        <li className="text-indigo-700 font-semibold">Attic Insulation</li>
      </ul>

      <div className="w-10/12 sm:w-8/12 md:w-8/12 bg-opacity-30 mx-auto shadow-lg rounded lg:mt-10 mb-10 p-4">
        <p className="w-full text-black/70 text-base mx-auto p-4">
          We established our HVAC repair & installation company in 2005 and
          since then, G S M A/C & General Contractor INC. has become a reference
          for quality, professionalism, and competence. Over the years, we have
          handled countless projects for many homeowners and businesses in
          Cypress, TX and we would be honored to assist you as well. Discover a
          dependable partner in us.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 justify-center mt-2 mb-4">
          <div className="card md:w-10/12 lg:w-5/12 bg-base-100 shadow-xl mx-auto image-full">
            <figure>
              <img src="./worker.webp" alt="About Worker" />
            </figure>
            <div className="card-body">
              <h3 className="card-title gold text-2xl">Why Work With Us?</h3>
              <p className="text-white text-opacity-90 text-base">
                Unlike many companies in Cypress, TX that offer limited
                assistance, we offer a comprehensive service package. We
                specialize in AC and HVAC installation and repair, as well as in
                heating installation and heating repair. We can clean and
                sanitize air ducts and insulate attics to prevent air leaks. We
                pride ourselves on doing things right the first time, meaning we
                can complete your project in a prompt but correct manner. Your
                satisfaction is guaranteed.
              </p>
            </div>
          </div>

          <div className="card md:w-10/12 lg:w-5/12 bg-base-100 shadow-xl mx-auto image-full ">
            <figure>
              <img src="./about-people.webp" alt="About People" />
            </figure>
            <div className="card-body">
              <h3 className="card-title gold text-2xl">Why Trust Us?</h3>
              <p className="text-white text-opacity-90 text-base">
                Our HVAC repair & installation company is based on honesty,
                teamwork, integrity, and accountability. Our core values have
                allowed us to earn the repeat business of countless customers
                and we believe they will win us yours as well. At G S M A/C &
                General Contractor INC., we are licensed, certified, and
                insured. Call now to ask about our attractive discounts. Reach
                us at (281) 223-5020 now to schedule an appointment and book our
                heating repair services and other options. We are looking
                forward to helping you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
