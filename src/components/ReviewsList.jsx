import Review from "./Review";

const ReviewsList = ({ reviews }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-10">
      {reviews.map((review) => (
        <Review review={review} key={review._id} />
      ))}
    </div>
  );
};

export default ReviewsList;
