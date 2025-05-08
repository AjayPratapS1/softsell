import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

export default function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto">
      {[HeroSection, HowItWorks, WhyChooseUs, Testimonials, ContactForm].map(
        (Component, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Component />
          </motion.div>
        )
      )}
    </div>
  );
}
