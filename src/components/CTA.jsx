import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-base-100 rounded-t-3xl">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-amber-400">
          <span className="text-cyan-900">Ready for Your Next</span> Adventure?
        </h2>
        <p className="text-lg md:text-xl text-base-content/70 mb-8">
          Let TravelEase make your travel planning effortless. Book your dream trip today and enjoy a smooth, stress-free journey!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-amber-400 text-cyan-900 font-semibold px-6 py-3 rounded-lg hover:bg-amber-300 transition-colors duration-300">
            Plan Your Trip
          </button>
          <Link to={'/about'} className="bg-transparent border-2 border-amber-400 text-amber-400 font-semibold px-6 py-3 rounded-lg hover:bg-amber-400 hover:text-cyan-900 transition-colors duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
