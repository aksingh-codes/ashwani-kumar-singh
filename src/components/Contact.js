import React, { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "email-validator";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      to_name: "Ashwani",
      email: data.email,
      message: data.messageBox,
    };

    await toast.promise(
      emailjs.send(
        process.env.GATSBY_API_SERVICE_ID,
        process.env.GATSBY_API_TEMPLATE_ID,
        templateParams,
        process.env.GATSBY_API_PUBLIC_KEY
      ),
      {
        pending: "Sending your pretty message please wait ☺️",
        success: "Thanks for contacting me, I will get back to you soon 🙋‍♂️",
        error:
          "Couldn't send message, please check your internet connection 🤯",
      }
    );

    setLoading(false);
  };

  return (
    <section id="contact" className="container pattern-dots-sm">
      <div className="header">
        <h1>Contact</h1>
        <p>Let's build something great together!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="form-style">
          <li>
            <label htmlFor="field1">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field1"
              className="field-divided"
              placeholder="First"
              {...register("firstName", { required: true })}
            />{" "}
            <input
              type="text"
              name="field2"
              className="field-divided"
              placeholder="Last"
              {...register("lastName", { required: true })}
            />
            {errors.firstName?.type === "required" && "First name is required"}
            {errors.lastName?.type === "required" && "Last name is required"}
          </li>
          <li>
            <label htmlFor="field3">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="field3"
              className="field-long"
              {...register("email", {
                required: true,
                validate: validator.validate,
              })}
            />
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "validate" && "Email is invalid"}
          </li>
          <li>
            <label htmlFor="field5">
              Your Message <span className="required">*</span>
            </label>
            <textarea
              name="field5"
              id="field5"
              className="field-long field-textarea"
              {...register("messageBox", { required: true })}
            ></textarea>
            {errors.messageBox?.type === "required" && "Message is required"}
          </li>
          <li>
            <button disabled={loading} className="btn">
              Send
            </button>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default Contact;
