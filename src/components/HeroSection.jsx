import React from "react";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
const HeroSection = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.theme === "dark" ||
    (!localStorage.theme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.theme = theme;
  }, [theme]);
  return (
    <section className="bg-blue-600 relative text-white py-20 text-center">
      <button
        className="absolute top-2 cursor-pointer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <MdLightMode className="w-8 h-8" />
        ) : (
          <MdOutlineLightMode className="w-8 h-8" />
        )}
      </button>
      <h1 className="text-4xl md:text-6xl font-bold">
        Sell Unused Software Licenses
      </h1>
      <p className="mt-4 text-lg md:text-xl">
        Turn your unused software licenses into cash effortlessly.
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
        Get a Quote
      </button>
    </section>
  );
};
export default HeroSection;
