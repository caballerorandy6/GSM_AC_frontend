import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Alert from "./Alert";
import { FaStar } from "react-icons/fa";
import { useForm } from "react-hook-form";
import clienteAxios from "../config/clienteAxios";
const ReviewForm = ({ reviews, setReviews }) => {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //Submit Form, create review
  const onSubmit = async (review) => {
    try {
      const { data } = await clienteAxios.post(`/create-review`, review);
      setReviews([...reviews, data]);
      toast.success("The review has been created correctly!");
      reset();
      setRate(0);
    } catch (error) {
      console.log(error);
      toast.error("Sorry, you can only create one review!");
    }
  };

  //Get All reviews
  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await clienteAxios(`/reviews`);

        if (!data) {
          throw Error("Could not fetch reviews");
        }

        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [setReviews]);

  return (
    <div className="w-full md:w-full h-full mx-auto border-[#cbb26a] border-2 p-6 sm:p-8 rounded-md shadow-lg mb-4 bg-opacity-70">
      <div className="flex flex-col">
        <h1 className="text-center text-xl text-[#cbb26a] text-opacity-90 sm:text-2xl mb-2 sm:mb-4 font-semibold uppercase">
          Submit your review in our website!
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-white"
          noValidate
        >
          <input
            {...register("fullName", {
              required: "Name is required!",
              minLength: {
                value: 2,
                message: "Full name must have at least 2 or more characters!",
              },
              maxLength: {
                value: 50,
                message: "Full name must be 50 characters or less!",
              },
            })}
            type="text"
            placeholder="Full Name:"
            className="w-full border-b-2 bg-transparent focus:outline-none active:bg-transparent text-base p-2 placeholder-black/50 text-black/70 mt-4"
          />
          <Alert>{errors?.fullName?.message}</Alert>
          {errors?.fullName?.length < 2 ? (
            <Alert message={errors?.fullName?.message} />
          ) : (
            ""
          )}
          {errors?.fullName?.length > 50 ? (
            <Alert message={errors?.fullName?.message} />
          ) : (
            ""
          )}

          <input
            {...register("reviewTitle", {
              required: "Title review is required!",
              minLength: {
                value: 2,
                message:
                  "Title review must have at least 2 or more characters!",
              },
              maxLength: {
                value: 100,
                message: "Title review must be 100 characters or less!",
              },
            })}
            type="text"
            placeholder="Title Review:"
            className="w-full border-b-2 bg-transparent focus:outline-none active:bg-transparent text-base p-2 placeholder-black/50 text-black/70 mt-4"
          />
          <Alert>{errors?.reviewTitle?.message}</Alert>
          {errors?.reviewTitle?.length <= 2 ? (
            <Alert message={errors?.reviewTitle?.message} />
          ) : (
            ""
          )}
          {errors?.reviewTitle?.length > 50 ? (
            <Alert message={errors?.reviewTitle?.message} />
          ) : (
            ""
          )}

          <div className="flex items-center gap-4 center mt-2">
            <p className="w-2/12 bg-transparent focus:outline-none active:bg-transparent p-2 text-black/70">
              Rate:
            </p>
            <div className="flex items-center w-full">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                  <label className="flex" key={ratingValue}>
                    <input
                      {...register("rate", {
                        required: "Rate is required!",
                        minLength: {
                          value: 1,
                          message: "Rate must have at least 1 star!",
                        },
                      })}
                      type="radio"
                      name="rate"
                      value={ratingValue}
                      onClick={
                        (() => setRate(ratingValue),
                        (e) => setRate(Number(e.target.value)))
                      }
                    />
                    <FaStar
                      size={16}
                      color={
                        ratingValue <= (hover || rate) ? "#cbb26a" : "gray"
                      }
                      className="cursor-pointer transition-colors w-6"
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
              <p className="text-black text-base px-4">
                Rating {""}
                {rate}
              </p>
            </div>
          </div>
          <Alert>{errors?.rate?.message}</Alert>
          {errors?.rate?.length < 1 ? (
            <Alert message={errors?.rate?.message} />
          ) : (
            ""
          )}

          <textarea
            {...register("message", {
              required: "Message is required!",
              minLength: {
                value: 2,
                message: "Message must have at least 2 or more characters!",
              },
              maxLength: {
                value: 500,
                message: "Message must be 300 characters or less!",
              },
            })}
            placeholder="Message"
            rows="5"
            className="w-full border-2 bg-transparent focus:outline-none active:bg-transparent p-2 mt-12 rounded-md placeholder-black/50 text-black/70"
          />
          <Alert>{errors?.message?.message}</Alert>
          {errors?.message?.length <= 2 ? (
            <Alert message={errors?.message?.message} />
          ) : (
            ""
          )}
          {errors?.message?.length > 500 ? (
            <Alert message={errors?.message?.message} />
          ) : (
            ""
          )}

          <input
            type="submit"
            className="btn w-full mt-8 bg-white hover:bg-[#cbb26a] text-black font-bold bg-opacity-80 border-[#cbb26a] border-2 hover:border-[#cbb26a] focus:outline-none transition-colors"
            value="Submit Review"
          />
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
