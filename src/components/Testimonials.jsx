import React from "react";
const testimonials = [
  {
    name: "Jane Doe",
    role: "CTO",
    company: "TechCorp",
    feedback:
      "SoftSell made it incredibly easy to monetize our unused licenses.",
  },
  {
    name: "John Smith",
    role: "IT Manager",
    company: "InnovateX",
    feedback: "A seamless experience from start to finish.",
  },
];
const Testimonials = () => (
  <section className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
    <h2 className="text-3xl font-bold mb-10 dark:text-white">
      What Our Clients Say
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-400 dark:text-white p-6 rounded shadow-md w-80"
        >
          <p className="italic">"{testimonial.feedback}"</p>
          <p className="mt-4 font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-600 dark:text-white">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      ))}
    </div>
  </section>
);
export default Testimonials;
