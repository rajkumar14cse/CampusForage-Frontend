import React from "react";

const FormData = ({ formData, handleChange }) => {
  const { name, email, message } = formData;

  return (
    <>
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-800">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          autoComplete="off"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-800">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="JohnDoe@gmail.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          autoComplete="off"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={message}
          onChange={handleChange}
          placeholder="Let's talk about your campus journey!"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
      </div>
    </>
  );
};

export default FormData;
