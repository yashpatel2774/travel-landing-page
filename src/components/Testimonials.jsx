import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:4000/testimonials")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (testimonials.length === 0) return null;

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const main = testimonials[current];
  const next = testimonials[(current + 1) % testimonials.length];

  return (
    <section className="px-6 sm:px-10 md:px-20 py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-16 items-center">

      <div className="flex-1 text-center md:text-left">
        <p className="text-orange-500 uppercase font-semibold text-sm sm:text-base">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mt-3">
          What People Say <br /> About Us
        </h2>
      </div>

      <div className="flex-1 relative w-full max-w-md md:max-w-none">

        <div className="absolute right-0 -top-6 md:-top-10 w-[90%] md:w-[80%] bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl opacity-40 scale-90 transition-all duration-300">
          <img
            src={next.avatar}
            alt={next.name}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <p className="text-gray-500 italic mt-2 md:mt-3 text-sm md:text-base">
            “{next.message}”
          </p>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl relative z-10 transition-all duration-300">
          <img
            src={main.avatar}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mb-3 md:mb-4 mx-auto md:mx-0"
            alt={main.name}
          />

          <p className="text-gray-700 italic text-base md:text-lg leading-relaxed text-center md:text-left">
            “{main.message}”
          </p>

          <div className="mt-4 md:mt-6 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold">{main.name}</h3>
            <p className="text-gray-500 text-sm md:text-sm">{main.role}</p>
          </div>
        </div>

        <div className="absolute right-0 md:right-4 top-full md:top-1/2 mt-4 md:mt-0 flex justify-center md:flex-col gap-4 z-20">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full hover:cursor-pointer bg-white shadow-md hover:bg-gray-100 grid place-items-center"
          >
            ▲
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full hover:cursor-pointer bg-white shadow-md hover:bg-gray-100 grid place-items-center"
          >
            ▼
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
