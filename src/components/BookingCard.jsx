import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
const VehicleCard = ({ vehicle }) => {
  const {
    vehicleName,
    coverImage,
    category,
    location,
    pricePerDay,
    rating,
    _id,
  } = vehicle;

  return (
    <div className="p-2 animate__animated animate__fadeIn md:p-2 flex md:flex-row flex-col justify-between items-center border-b border-slate-300">
      <div className="flex items-center gap-4">
        <div>
          <img src={coverImage} alt={"vehicleImage"} className="h-20 w-24" />
        </div>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-lg font-bold mb-2">{vehicleName}</h1>
          <p className="badge badge-accent badge-outline p-4">{category}</p>
          <p className="text-sm">Price per day: {pricePerDay}$</p>
          {/* <p className="flex gap-2 items-center text-sm">
            Rating:{" "}
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
          </p> */}
        </div>
      </div>

      <Link
        to={`/booking-details/${_id}`}
        className="btn btn-outline outline-cyan-800 font-bold  hover:bg-cyan-100 btn-sm text-xs transition-transform"
      >
        View Details
      </Link>
    </div>
  );
};
export default VehicleCard;
