import { Link } from "react-router-dom";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div
      id="contact"
      className="background-image-contact bg-cover object-cover min-h-screen"
    >
      <div className="bg-img pb-10 min-h-screen">
        <h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-[#cbb26a] font-bold pt-10">
          Call Us Now!
        </h1>
        <div className="w-96 content-none mx-auto h-1 mt-4 bg-white bg-opacity-90"></div>

        <div className="sm:flex items-center justify-center sm:p-4 w-full mx-auto">
          <div className="sm:flex flex-col sm:w-5/12 md:6/12 lg:w-7/12 items-center">
            <p className="text-base text-center lg:text-start text-white text-opacity-90 p-4 mx-auto w-10/12">
              Call now to schedule an appointment. At G S M A/C & General
              Contractor INC., we take pride in offering quality HVAC services
              suitable for residential and commercial projects. We can install
              and repair a wide variety of AC, HVAC, and heating units. We can
              also clean air ducts and insulate attics. Quality assistance is a
              phone call away!
            </p>

            <div className="w-10/12 mx-auto mt-4 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl text-[#cbb26a] font-bold w-full">
                G S M A/C & General Contractor INC.
              </h3>
              <p className="p-2 text-white text-opacity-80">
                Cypress, TX 77433
              </p>
              <Link
                className="text-center justify-center items-center w-3/12 bg-gray-100 border-none"
                to="tel: +12812235020"
              >
                <p className="w-full rounded-lg mx-auto text-sm sm:text-xl text-white text-opacity-80 hover:text-blue-500 lg:text-2xl sm:block font-semibold hover:mx-auto hover:rounded-lg transition-colors">
                  Call now +1 (281)223-5020
                </p>
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-7/12 md:w-5/12 lg:w-4/12 mt-8">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
