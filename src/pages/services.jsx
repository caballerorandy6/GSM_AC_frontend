import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="w-full overflow-y-scroll mt-10">
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-[#cbb26a] font-bold">
        What Are Our Services
      </h1>
      <div className="w-96 content-none mx-auto h-1 mt-4 bg-black/70"></div>
      <div className="w-10/12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 grid-auto-fit-xs grid-auto-fit-sm grid-auto-fit-md grid-auto-fit-lg grid-auto-fit-xl justify-items-center mt-8 mb-8 mx-auto">
        <div className="rounded-lg w-full shadow-lg">
          <div className="rounded overflow-hidden">
            <img
              src="./worker1.webp"
              alt="Worker 1"
              className="w-full h-60 object-cover"
            />
            <div className="px-6 py-4">
              <div className="mb-2 flex items-center lg:justify-between flex-col lg:flex-row">
                <p className="text-[#cbb26a] text-xl font-bold">
                  Air Conditioning Installation
                </p>
                <Link to="all-services" className="btn btn-link">
                  See more...
                </Link>
              </div>
              <p className="text-gray-800">
                We have the know-how and resources to install AC and HVAC units
                of all generations. We keep drilling to a minimum and always
                clean up after ourselves because we respect the properties of
                our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg w-full shadow-lg">
          <div className="rounded overflow-hidden">
            <img
              src="./worker2.webp"
              alt="Worker 2"
              className="w-full h-60 object-cover"
            />
            <div className="px-6 py-4">
              <div className="mb-2 flex items-center lg:justify-between flex-col lg:flex-row">
                <p className="text-[#cbb26a] text-xl font-bold">
                  Air Conditioning Repair
                </p>
                <Link to="all-services" className="btn btn-link">
                  See more...
                </Link>
              </div>
              <p className="text-gray-800">
                When it comes to AC or HVAC repair, we are the specialists that
                you should contact. Our technicians can quickly pinpoint and
                remedy or replace defective parts and components.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg w-full shadow-lg">
          <div className="rounded overflow-hidden">
            <img
              src="./worker3.webp"
              alt="Worker 3"
              className="w-full h-60 object-cover"
            />
            <div className="px-6 py-4">
              <div className="mb-2 flex items-center lg:justify-between flex-col lg:flex-row">
                <p className="text-[#cbb26a] text-xl font-bold">
                  Heating Installation
                </p>
                <Link to="all-services" className="btn btn-link">
                  See more...
                </Link>
              </div>
              <p className="text-gray-800">
                Apart from installing ACs and HVACs, we can also set up heating
                devices. We strive to choose locations that offer maximum
                coverage so our customers can heat their properties without
                using too much energy.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg w-full shadow-lg">
          <div className="rounded overflow-hidden">
            <img
              src="./worker4.webp"
              alt="Worker 4"
              className="w-full h-60 object-cover"
            />
            <div className="px-6 py-4">
              <div className="mb-2 flex items-center lg:justify-between flex-col lg:flex-row">
                <p className="text-[#cbb26a] text-xl font-bold">
                  Heating Repair
                </p>
                <Link to="all-services" className="btn btn-link">
                  See more...
                </Link>
              </div>
              <p className="text-gray-800">
                Use our office & home heating repair services services to remedy
                problematic heating units. We can repair or replace faulty parts
                to restore the original functionality of the devices. Our prices
                are pocket-friendly and you will get your money&apos;s worth.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg w-full shadow-lg">
          <div className="rounded overflow-hidden">
            <img
              src="./about-people.webp"
              alt="Worker 6"
              className="w-full h-60 object-cover"
            />
            <div className="px-6 py-4">
              <div className="mb-2 flex items-center lg:justify-between flex-col lg:flex-row">
                <p className="text-[#cbb26a] text-xl font-bold">
                  Air Duct Sanitizing
                </p>
                <Link to="all-services" className="btn btn-link">
                  See more...
                </Link>
              </div>
              <p className="text-gray-800">
                Customers can trust us with the cleaning and sanitizing of their
                air ducts. We have the products and tools to eliminate harmful
                particles such as dust, dirt, allergens, germs, etc. We can keep
                your vents pristine.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg w-full shadow-lg">
          <div className="rounded overflow-hidden">
            <img
              src="./worker7.webp"
              alt="Worker 7"
              className="w-full h-60 object-cover"
            />
            <div className="px-6 py-4">
              <div className="mb-2 flex items-center lg:justify-between flex-col lg:flex-row">
                <p className="text-[#cbb26a] text-xl font-bold">
                  Attic Insulation
                </p>
                <Link to="all-services" className="btn btn-link">
                  See more...
                </Link>
              </div>
              <p className="text-gray-800">
                Customers can trust us with the cleaning and sanitizing of their
                air ducts. We have the products and tools to eliminate harmful
                particles such as dust, dirt, allergens, germs, etc. We can keep
                your vents pristine.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto p-8 my-8 rounded-lg shadow-lg">
        <div className="my-8">
          <h3 className="text-[#cbb26a] text-2xl mb-2">Capable Specialists</h3>
          <p className="text-black/70">
            At G S M A/C & General Contractor INC., we use innovative techniques
            and state-of-the-art equipment to correctly carry out
            labor-intensive and time-sensitive cooling and heating projects. We
            can install ACs, heating units, and HVACs on any make and model, and
            give our customers the tools they need to keep their properties at a
            comfortable and cozy temperature all year long. We never use
            one-size-fits-all solutions because we are completely aware that
            each job is unique. Choosing our heating repair services and other
            options is choosing to partner with competent professionals.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-[#cbb26a] text-2xl mb-2">
            Superior Customer Service Since 2005
          </h3>
          <p className="text-black/70">
            Many homeowners and businesses in {""}
            <Link
              to="https://en.wikipedia.org/wiki/Cypress,_Texas"
              target="_blank"
              className="text-blue-600"
            >
              Cypress, TX
            </Link>
            {""} have made us their go-to company because we offer quality HVAC
            services. Our experienced and well-trained technicians will help
            with the selection of your system by explaining the advantages and
            disadvantages of your available options. They will provide you with
            the details you need to make an educated decision suitable for your
            needs and budget. Once you have made your choice, they will handle
            the installation work and make sure your unit is working at optimal
            efficiency. Let us make things easier for you.
          </p>
        </div>

        <div className="">
          <h3 className="text-[#cbb26a] text-2xl mb-2">
            Call us at{" "}
            <Link className="text-blue-600 text-lg" to="tel: +12812354684">
              (281) 235-4684
            </Link>{" "}
            to take advantage of our impeccable heating repair services!
          </h3>
          <p className="text-black/70">
            Book our affordable AC replacement services and other options by
            calling us now. Our phone operators will gladly answer your
            questions. You can find our number on our homepage. Let us know how
            we can help you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
