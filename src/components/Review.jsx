import { FaStar } from "react-icons/fa";
import { formatDate } from "../helpers/index";

const Review = ({ review }) => {
  const { createdAt, fullName, reviewTitle, rate, message } = review;

  return (
    <div className="card w-10/12 lg:w-8/12 bg-gray-50  shadow-xl">
      <div className="card-body border-b">
        <label className="text-sm">
          {formatDate(createdAt)} by{" "}
          <span className="text-sm text-black/70">{fullName}</span> on G S M A/C
          & General Contractor INC.
        </label>
        <h2 className="card-title text-black/70 text-xl font-normal">
          {reviewTitle}
        </h2>

        <div className="card-actions">
          <div className="flex items-center w-full">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <FaStar
                  key={ratingValue}
                  size={16}
                  color={ratingValue <= rate ? "#cbb26a" : "gray"}
                  className="transition-colors"
                />
              );
            })}
          </div>
        </div>
        <p className="text-sm text-black/70 p-2 overflow-y-scroll">{message}</p>
      </div>
    </div>
  );
};

export default Review;
