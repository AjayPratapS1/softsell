import React, { useState } from "react";
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const licenseOptions = ["Windows", "Adobe", "Office 365", "Other"];
  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    if (!form.company) newErrors.company = "Company is required.";
    if (!form.licenseType) newErrors.licenseType = "License type is required.";
    if (!form.message) newErrors.message = "Message is required.";
    return newErrors;
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully!");
      setForm({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <section className="py-20 text-center dark:bg-gray-500 dark:text-white">
      <h2 className="text-3xl font-bold mb-10 ">Contact Us</h2>
      <form
        className="max-w-xl mx-auto text-left border border-gray-800 shadow-md p-5 rounded-lg"
        onSubmit={handleSubmit}
      >
        {["name", "email", "company"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block mb-1 capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors[field] && (
              <p className="text-red-500 text-sm">{errors[field]}</p>
            )}
          </div>
        ))}
        <div className="mb-4">
          <label className="block mb-1">License Type</label>
          <select
            name="licenseType"
            value={form.licenseType}
            onChange={handleChange}
            className="w-full p-2  border rounded"
          >
            <option value="">Select a license type</option>
            {licenseOptions.map((option, index) => (
              <option className="dark:text-gray-800" key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.licenseType && (
            <p className="text-red-500 text-sm">{errors.licenseType}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default ContactForm;
