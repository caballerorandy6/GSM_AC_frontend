import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";
import GoogleReviews from "./GoogleReviews";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [seeReviewList, setSeeReviewList] = useState(false);

  return (
    <section
      id="testimonials"
      className="w-full mx-auto overflow-y-scroll mt-10"
    >
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-[#cbb26a] font-bold">
        Testimonials
      </h1>

      <div className="w-96 content-none mx-auto h-1 mt-4 bg-black/70"></div>

      <div className="w-10/12 mt-10 mx-auto border p-8 rounded-lg shadow-md">
        <GoogleReviews />
      </div>

      {/* <button
        className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 btn btn-link border-2 font-semibold text-base rounded-lg transition-colors mx-auto mt-10 block"
        onClick={() => setSeeReviewList(!seeReviewList)}
      >
        {!seeReviewList
          ? "click here to view customer reviews on our website!"
          : "click here to hide customer reviews on our website!"}
      </button> */}

      {/* {seeReviewList && <ReviewsList reviews={reviews} />}

      {seeReviewList ? (
        <button
          className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 btn btn-link border-2 font-semibold text-base rounded-lg transition-colors mx-auto block mt-6"
          onClick={() => setSeeReviewList(!seeReviewList)}
        >
          {!seeReviewList
            ? "click here to view customer reviews on our website!"
            : "click here to hide customer reviews on our website!"}
        </button>
      ) : (
        ""
      )} */}

      <div className="w-full lg:flex justify-around">
        <video
          className="w-full md:w-10/12 mx-auto lg:w-6/12 p-16"
          src="./video.mp4"
          muted
          loop
          controls
          autoPlay
        />
        {/* <div className="w-full mx-auto sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 p-10">
          <ReviewForm reviews={reviews} setReviews={setReviews} />
        </div> */}
      </div>
    </section>
  );
};
export default Testimonials;
