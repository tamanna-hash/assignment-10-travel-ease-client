import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Talha Tarique",
      role: "Travel Enthusiast",
      message: "TravelEase made my trip planning so easy! Everything went perfectly.",
    },
    {
      name: "Jhankar Mahbub",
      role: "Frequent Traveler",
      message: "The booking system is smooth and reliable. Highly recommend it!",
    },
    {
      name: "Ahsan Habib Uthsho",
      role: "Adventure Seeker",
      message: "I loved how simple and beautiful the TravelEase platform is!",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-900 mb-4">Testimonials</h2>
        <p className="text-lg text-cyan-900 max-w-xl mx-auto">
          Hear from our happy travelers who experienced the difference with TravelEase.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <FaQuoteLeft className="text-amber-400 w-8 h-8 mb-4" />
            <p className="text-gray-700 mb-4">&quot;{item.message}&quot;</p>
            <h4 className="text-cyan-900 font-semibold">{item.name}</h4>
            <p className="text-gray-500 text-sm">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
