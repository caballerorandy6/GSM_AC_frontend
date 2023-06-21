import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";

const Form = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  //Recibir Email cuando envian formulario
  const form = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm("gmail", "rcweb_template", form.current, "jDYT49szBWHrh5m3P")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Message has been sent successfully!");
    reset();
  };

  return (
    <div className="w-10/12 md:w-full h-full mx-auto border-2 border-white/60 p-6 sm:p-8 rounded-md shadow mb-4 bg-opacity-70">
      <div className="flex flex-col">
        <h1 className="text-center text-xl gold text-opacity-90 sm:text-2xl mb-2 sm:mb-4 font-semibold">
          GET A FREE ESTIMATE!
        </h1>
        <form
          className="text-white"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <input
            {...register("name", {
              required: "Name is required!",
              minLength: {
                value: 2,
                message: "Name must have at least 2 or more characters!",
              },
              maxLength: {
                value: 50,
                message: "Name must be 50 characters or less!",
              },
            })}
            type="text"
            placeholder="Full Name:"
            className="text-white w-full border-b-2 bg-transparent focus:outline-none active:bg-transparent p-2 placeholder-white placeholder-opacity-75"
          />
          <Alert>{errors?.name?.message}</Alert>
          {errors?.name?.length < 2 ? (
            <Alert message={errors?.name?.message} />
          ) : (
            ""
          )}
          {errors?.name?.length > 50 ? (
            <Alert message={errors?.name?.message} />
          ) : (
            ""
          )}

          <input
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email!",
              },
            })}
            type="text"
            placeholder="Email:"
            className="w-full border-b-2 bg-transparent focus:outline-none active:bg-transparent p-2 text-white mt-8 placeholder-white placeholder-opacity-75"
          />
          <Alert>{errors?.email?.message}</Alert>
          {errors?.email && <Alert message={errors?.email?.message} />}

          <input
            {...register("phone", {
              required: "Phone number is required!",
              pattern: {
                value:
                  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message:
                  "Invalid Format! The phone number must contain only numbers!",
              },
              minLength: {
                value: 10,
                message: "Phone number must contain at least 10 digits!",
              },
              maxLength: {
                value: 10,
                message: "Phone number must not contain more than 10 digits!",
              },
            })}
            type="text"
            placeholder="Phone Number:"
            className="w-full border-b-2 bg-transparent focus:outline-none active:bg-transparent p-2 text-white mt-8 placeholder-white placeholder-opacity-75"
          />
          <Alert>{errors?.phone?.message}</Alert>
          {errors?.phone && <Alert message={errors?.phone?.message} />}

          <textarea
            {...register("message")}
            placeholder="Message"
            rows="5"
            className="w-full border-2 bg-transparent focus:outline-none active:bg-transparent p-2 text-white mt-12 rounded-md placeholder-white placeholder-opacity-75"
          />
          <input
            type="submit"
            className="btn btn-primary w-full mt-8 bg-white hover-gold text-black font-bold bg-opacity-80 border-0 transition-colors"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
