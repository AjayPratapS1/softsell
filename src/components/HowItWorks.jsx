import React from "react";
const steps = [
  {
    title: "Upload License",
    description: "Provide details of your unused license.",
  },
  {
    title: "Get Valuation",
    description: "Receive an instant market-based valuation.",
  },
  { title: "Get Paid", description: "Receive payment upon approval." },
];
const HowItWorks = () => (
  <section className="py-20 bg-gray-100 text-center dark:bg-gray-800">
    <h2 className="text-3xl font-bold mb-10 dark:text-white">How It Works</h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-400 dark:text-white p-6 rounded shadow-md w-64"
        >
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);
export default HowItWorks;
