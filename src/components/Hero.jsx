import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Form from "./Form";
import CheckIcon from "./CheckIcon";

const Hero = () => {
  return (
    <section
      id="hero"
      className="background-image bg-cover object-cover min-h-screen"
    >
      <div className="top-0 left-0 right-0 bottom-0 bg-img min-h-screen pt-12">
        <div className="w-6/12 sm:w-4/12 lg:w-3/12 mx-auto text-center bg-white bg-opacity-10 rounded-xl ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-opacity-90 uppercase">
            GSM <span className="font-bold text-[#cbb26a]">A/C</span>
          </h1>
          <span className="text-base lg:text-xl font-bold text-white text-opacity-70 mt-4">
            General & Contractor Inc
          </span>
        </div>
        <div className="sm:flex justify-around sm:p-4 w-full mx-auto">
          <div className="sm:flex flex-col sm:w-5/12 md:6/12 lg:w-7/12 items-center">
            <div className="w-10/12  mx-auto mt-4 text-center">
              <div className="flex justify-center items-center gap-2 text-3xl">
                <CheckIcon />
                <Link
                  to="https://dealerportal.optimusfinancing.com/?did=4zE7mS4sI2pR7yK1wM"
                  target="_blank"
                  className="btn btn-link text-sm lg:text-lg text-white text-opacity-70 hover:text-blue-500 transition-colors"
                >
                  Financing Application Click Here!!!
                </Link>
              </div>

              <div className="text-xl sm:text-2xl text-center font-bold mt-4 text-[#cbb26a]">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("$0 down payment!")
                      .changeDelay(150)
                      .deleteAll()
                      .typeString("$0 interest!")
                      .changeDelay(150)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="mx-auto text-center mt-6">
                <p className="w-full mx-auto text-white text-base font-semibold bg-white p-4 rounded-md shadow bg-opacity-10 text-opacity-80">
                  Special Spring A/C Check Up For $79.99″ Regular Check Up Is
                  $99.99
                </p>
                <p className="w-full mx-auto text-white text-base font-semibold bg-white p-4 rounded-md shadow mt-4 bg-opacity-10 text-opacity-80">
                  Free media filter and power surge protection with complete
                  system replacement!!!
                </p>
              </div>

              <div className="lg:flex justify-center items-center gap-8 p-8 opacity-95 hidden">
                <img
                  className="w-3/12"
                  src="./discount.webp"
                  alt="Discount Logo"
                />
                <img
                  className="w-3/12"
                  src="./customer.webp"
                  alt="New Referral"
                />

                <img
                  className="w-3/12"
                  src="./certified.webp"
                  alt="Certified Logo"
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-7/12 md:w-5/12 lg:w-4/12 mt-4 pb-4">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
