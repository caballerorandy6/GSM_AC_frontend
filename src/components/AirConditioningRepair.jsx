import { Link } from "react-router-dom";

const AirConditioningRepair = () => {
  return (
    <section id="air-conditioning-repair" className="w-10/12 mx-auto">
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-[#cbb26a] font-bold pt-10">
        Need Help with Fixing Your Air Conditioning Unit? Use Our HVAC Repair
        Services Now!
      </h1>
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 content-none mx-auto h-1 mt-4 bg-black/70"></div>
      <img
        src="./worker7.webp"
        alt="Worker 7"
        className="h-80 w-96 mx-auto mt-10 object-cover rounded-lg shadow-lg"
      />
      <p className="text-black/70 mt-10 mb-4">
        Even if you’re careful with your AC maintenance, there will come a time
        when it will break down on you. Frequent AC malfunctions can be a result
        of underlying problems in your HVAC system. Don’t wait for it to get
        worse. Have it fixed now! There is nothing to fret about that because
        you can always rely on G S M A/C & General Contractor INC. for a quick
        and quality AC repair service. We offer immediate HVAC repair solutions
        to property owners in the Cypress, TX area, so don’t hesitate to call
        us!
      </p>
      <h3 className="text-[#cbb26a] font-bold text-xl">
        Is it time for a repair?
      </h3>
      <p className="text-black/70 mb-4">
        You should have your air conditioning fixed as soon as possible once it
        starts to malfunction. You need not wait for days to come and go without
        using your AC. Ensure you get the repair done in a single sitting. That
        is only possible when you turn to our team for the repair job. We
        respond to all calls right, and we complete the air conditioning repair
        task in a timely manner, ensuring excellent workmanship.
      </p>
      <h3 className="text-[#cbb26a] font-bold text-xl">
        It is time to call our experts!
      </h3>
      <p className="text-black/70 mb-4">
        When it’s time to have your air conditioning unit fixed, don’t hesitate
        to call us right away. You can expect our technicians to promptly
        respond to your calls and provide you with an efficient repair service.
        We can guarantee to provide you with long-lasting repair solutions at
        all times. We have the skills, tools, and other equipment that allow us
        to complete the repair work in a timely manner. Rest assured that there
        will be no damage that will be left untreated.
      </p>
      <p className="text-black/70 mt-4 mb-10">
        Once you notice signs of AC failure, call G S M A/C & General Contractor
        INC. for a reliable air conditioning repair service right away. Don’t
        delay as it can only lead to more problems. If you’re looking for a
        reliable AC technician in Cypress, TX, you now know which one to call
        for the job. To book our HVAC repair services, feel free to give us a
        call at{" "}
        <Link className="text-indigo-600" to="tel: +12812235020">
          (281) 223-5020
        </Link>{" "}
        today!
      </p>
      <div className="w-full content-none mx-auto h-1 mt-4 bg-black/10"></div>
    </section>
  );
};

export default AirConditioningRepair;
