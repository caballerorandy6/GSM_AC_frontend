import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [seeReviewList, setSeeReviewList] = useState(false);

  return (
    <section
      id="testimonials"
      className="w-full mx-auto overflow-y-scroll pt-10"
    >
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-[#cbb26a] font-bold">
        Testimonials
      </h1>
      <div className="w-96 content-none mx-auto h-1 mt-4 bg-black/70"></div>

      <button
        className="btn btn-info text-white border-2 font-semibold my-4 text-base rounded-lg transition-colors mx-auto block"
        onClick={() => setSeeReviewList(!seeReviewList)}
      >
        {!seeReviewList
          ? "Click here to see our customers review"
          : "Click here to hide our customers review"}
      </button>

      {seeReviewList && <ReviewsList reviews={reviews} />}

      {seeReviewList ? (
        <button
          className="btn btn-info text-white border-2 font-semibold my-4 text-base rounded-lg transition-colors mx-auto block mt-10"
          onClick={() => setSeeReviewList(!seeReviewList)}
        >
          {!seeReviewList
            ? "Click here to see our customers review"
            : "Click here to hide our customers review"}
        </button>
      ) : (
        ""
      )}

      <div className="w-full lg:flex justify-center gap-8 lg:p-4">
        <video
          className="w-10/12 mb-4 mx-auto sm:w-10/12 lg:w-6/12"
          src="./video.mp4"
          autoPlay
          muted
          loop
          controls
        />
        <div className="w-full mx-auto sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 p-10">
          <ReviewForm reviews={reviews} setReviews={setReviews} />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
