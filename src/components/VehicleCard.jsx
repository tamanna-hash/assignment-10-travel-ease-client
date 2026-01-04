import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { use, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
const VehicleCard = ({ vehicle }) => {
  const {
    vehicleName,
    coverImage,
    category,
    location,
    pricePerDay,
    rating,
    _id,
  } = vehicle || {};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.75,
        ease: "easeInOut",
      }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
       className="flex flex-col h-full overflow-hidden"
    >
      <div className="card h-62 m-2 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <figure className="h-32 overflow-hidden">
          <img
            src={coverImage}
            alt={"vehicleImage"}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>
        <div className="card-body -space-y-2 -m-4 rounded-none">
          <div className="flex gap-2 items-center">
            <h2 className="font-bold">{vehicleName}</h2>
            <div className="badge badge-outline badge-accent badge-sm">
              {category}
            </div>
          </div>
          <div className="flex">
            <p className=""> {location}</p>
            <p className="flex items-center gap-1 font-semibold">
              <span className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={` ${
                      index < rating ? "text-amber-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </span>
            </p>
          </div>
          <div className="">
            <span className="text-red-600 font-semibold text-lg">
              {pricePerDay}৳ 
            </span>
            /per day
          </div>
          {/* <p className="line-clamp-1">{description}</p> */}
          <div className="card-actions justify-between items-center mt-1">
            <Link
              to={`/vehicle-details/${_id}`}
              className="btn btn-xs text-white hover:bg-linear-to-r bg-cyan-700  hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-500 transition-transform"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default VehicleCard;
