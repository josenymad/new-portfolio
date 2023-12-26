import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register } = useForm<FormInputs>();

  return (
    <form
      action={import.meta.env.VITE_FORM_ENDPOINT}
      className="flex flex-col w-1/4 mx-auto"
      method="post"
    >
      <label htmlFor="name">Name:{}</label>
      <input
        type="text"
        id="name"
        {...register("name")}
        className="mb-2 text-black p-1.5 rounded"
        placeholder="Your name"
      />
      <label htmlFor="email">Email:{}</label>
      <input
        type="email"
        id="email"
        {...register("email")}
        className="mb-2 text-black p-1.5 rounded"
        placeholder="youremail@here.com"
      />
      <label htmlFor="message">Message:{}</label>
      <textarea
        id="message"
        {...register("message")}
        className="mb-2 text-black p-1.5 h-48 rounded"
        placeholder="Your message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
