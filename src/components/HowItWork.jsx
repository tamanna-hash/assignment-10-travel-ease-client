import React from "react";
import { FaPlane, FaHotel, FaRegSmile } from "react-icons/fa";

const HowItWork = () => {
  const steps = [
    {
      icon: <FaPlane className="text-amber-400 w-12 h-12" />,
      title: "Choose Your Destination",
      description:
        "Explore a variety of travel destinations around the world and pick the one that suits your adventure dreams.",
    },
    {
      icon: <FaHotel className="text-amber-400 w-12 h-12" />,
      title: "Book Your Stay & Travel",
      description:
        "Secure flights and accommodations easily in just a few clicks with our seamless booking system.",
    },
    {
      icon: <FaRegSmile className="text-amber-400 w-12 h-12" />,
      title: "Enjoy & Relax",
      description:
        "Travel without stress! Enjoy your trip while we handle all the details for a smooth experience.",
    },
  ];

  return (
    <section className="bg-base-100 text-cyan-900 py-20 px-6 md:px-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold  mb-4">How <span className="text-amber-400">TravelEase</span> Works</h2>
        <p className="max-w-xl mx-auto text-base-content/70 ">
          Simple, fast, and stress-free travel planning. Follow these easy steps to start your journey with TravelEase.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-5">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
