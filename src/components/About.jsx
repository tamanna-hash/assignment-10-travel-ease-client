import React from "react";
import travel1 from "../assets/travel1.jpg";
import travel2 from "../assets/travel2.jpg";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router";
const About = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={travel2}
            className="max-w-sm md:h-auto h-60 rounded-lg shadow-2xl"
          />
          <div className="items-start">
            <p className="satisfy text-xl md:text-3xl text-center text-sky-400">
              Why Choose Us
            </p>
            <h1 className="md:text-5xl text-3xl text-center font-bold">
              What are our Advantages
            </h1>

            <p className="py-6 text-slate-600 flex items-center gap-2 md:gap-4">
              <IoMdCheckmarkCircle className="text-sky-400 text-2xl" />
              <div>
                <h1 className="text-xl font-bold">Expert Guidance</h1>
                <p className="">
                  Local guides share culture, history, and hidden attractions
                  often missed.
                </p>
              </div>
            </p>
            <p className="py-6 text-slate-600 flex items-center gap-2 md:gap-4">
              <IoMdCheckmarkCircle className="text-sky-400 text-2xl" />
              <div>
                <h1 className="text-xl font-bold">Cost-Effectiveness</h1>

                <p className="">
                  Group tours get better deals, saving money on travel
                  essentials.
                </p>
              </div>
            </p>
            <p className="py-6 text-slate-600 flex items-center gap-2 md:gap-4">
              <IoMdCheckmarkCircle className="text-sky-400 text-2xl" />
              <div>
                <h1 className="text-xl font-bold">Safety and Security</h1>
                <p className="">
                  Group travel lowers risks in unfamiliar or remote, unsafe
                  destinations.
                </p>
              </div>
            </p>
            <Link
              to={"/allVehicles"}
              className="btn bg-cyan-900 hover:bg-cyan-800 text-white border-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
