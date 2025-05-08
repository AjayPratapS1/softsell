import React from "react";
const features = [
  {
    title: "Fast Payouts",
    description: "Receive payments quickly after approval.",
  },
  {
    title: "Secure Transactions",
    description: "Your data is protected with top-notch security.",
  },
  {
    title: "Expert Support",
    description: "Our team is here to assist you at every step.",
  },
  {
    title: "Best Market Rates",
    description: "Get the most value for your licenses.",
  },
];
const WhyChooseUs = () => (
  <section className="py-20 text-center dark:bg-gray-500">
    <h2 className="text-3xl font-bold mb-10 dark:text-white">Why Choose Us</h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-gray-100 p-6 dark:bg-gray-400 dark:text-white rounded shadow-md w-64"
        >
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);
export default WhyChooseUs;
