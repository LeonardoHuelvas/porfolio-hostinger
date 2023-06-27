import React, { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div id="contact" className="max-w-[800px] mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-[#001b5e]">Contact</h1>
      <form
        action="https://getform.io/f/3b57d21a-939d-4e8a-8e22-6caf1731fdf9"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-1">Name</label>
            <input
              className="border-2 rounded-lg p-2 flex border-gray-300"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-1">Phone</label>
            <input
              className="border-2 rounded-lg p-2 flex border-gray-300"
              type="text"
              name="phone"
              pattern="[0-9]*"
              required
              title="Ingrese solo números"
            />
          </div>
        </div>
        <div className="flex flex-col py-1">
          <label className="uppercase text-sm py-1">Email</label>
          <input
            className="border-2 rounded-lg p-2 flex border-gray-300"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </div>
        <div>
          <label className="uppercase text-sm py-1">Subject</label>
          <input
            className="border-2 rounded-lg p-2 flex border-gray-300"
            type="text"
            name="subject"
            required
          />
        </div>
        <div className="flex flex-col py-1">
          <label className="uppercase text-sm py-1">Message</label>
          <textarea
            className="border-2 rounded-lg p-2 border-gray-300"
            rows="7"
            name="message"
            required
          ></textarea>
        </div>
        <button className="bg-[#1b2781] text-gray-100 mt-2 w-full p-3 rounded-lg hover:bg-sky-700">
          Send Message
        </button>
      </form>
      {isSubmitted && (
        <p className="mt-4 text-2xl text-green-600">
          Su mensaje ha sido enviado. Me pondré en contacto con usted en breve.
        </p>
      )}
    </div>
  );
};

export default Contact;
