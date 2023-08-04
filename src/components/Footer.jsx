import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black w-full">
      <div className="flex flex-col lg:flex-row gap-8 text-white text-opacity-70 py-8">
        <div className="lg:w-4/12 flex flex-col items-center">
          <h3 className="text-[#cbb26a] font-bold mb-4 text-2xl">
            Working Hours
          </h3>
          <div className="flex gap-2 ">
            <p>Monday to Saturday</p>
            <p className="text-[#cbb26a] font-bold">{"---"}</p>
            <p>8:00am to 8:00pm</p>
          </div>
          <div className="flex gap-2">
            <p>Sunday</p>
            <p className="text-[#cbb26a] font-bold">{"---"}</p>
            <p>Emergency services ONLY</p>
          </div>
        </div>

        <div className="lg:w-4/12 flex flex-col items-center">
          <h3 className="text-[#cbb26a] font-bold mb-4 text-2xl">Contact Us</h3>
          <p>G S M A/C & General Contractor INC.</p>
          <p className="mb-4">Cypress, TX 77433</p>
          <Link className="text-[#cbb26a]" to="tel: +12812354684 resorte">
            Phone: (281) 235-4684
          </Link>
        </div>

        <div className="lg:w-4/12 flex flex-col items-center">
          <h3 className="text-[#cbb26a] font-bold mb-4 text-2xl">
            Payment accepted
          </h3>
          <div className="flex gap-2">
            <img className="rounded" src="./cash.webp" alt="Cash Image" />
            <img className="rounded" src="./check.webp" alt="Check Image" />
            <img
              className="rounded"
              src="./debitCard.webp"
              alt="Debit Card Image"
            />
          </div>
          <p className="mt-2">Also accepts Zelle</p>
        </div>
      </div>

      <div className="w-11/12 content-none mx-auto h-1 mt-4 bg-white opacity-80"></div>

      <div className="flex flex-col lg:flex-row justify-center p-8 gap-4 lg:gap-10 items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-[#cbb26a] font-bold mb-4 text-base mt-4">
            Social Networks
          </h3>
          <div className="flex items-center gap-4">
            <Link
              to="https://www.facebook.com/gsmactx/?ref=page_internal"
              target="_blank"
            >
              <img
                className="h-12 w-12"
                src="./facebook.webp"
                alt="Facebook Image"
              />
            </Link>

            <Link
              to="https://www.google.com/maps/place/G+S+M+A%2FC+%26+General+Contractor+INC./@29.8801535,-95.7088008,15z/data=!4m6!3m5!1s0x8640d7a7761d3e75:0x5aa72afac9b36840!8m2!3d29.8801145!4d-95.7088761!16s%2Fg%2F11n5cyv1cm?entry=ttu"
              target="_blank"
            >
              <img
                className="h-12 w-12"
                src="./google.webp"
                alt="Google Image"
              />
            </Link>
          </div>
        </div>
        <div className="flex  items-center gap-4">
          <p className="text-[#cbb26a] font-bold text-base">Developed with</p>
          <Link to="https://vitejs.dev/" target="_blank">
            {" "}
            <img
              className="w-12 h-12 rounded-full"
              src="./vite.webp"
              alt="Vite Image"
            />
          </Link>
        </div>
        <p className="font-bold text-base text-center mb-8 mt-7 text-white text-opacity-80">
          GSM A/C{" "}
          <span className="text-[#cbb26a]">General and Contractor </span>
          {`@${new Date().getFullYear()}`} all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
