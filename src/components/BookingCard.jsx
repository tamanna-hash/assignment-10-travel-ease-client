import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
const VehicleCard = ({ vehicle, index }) => {
  const {
    vehicleName,
    coverImage,
    category,
    location,
    pricePerDay,
    rating,

    _id,
  } = vehicle || {};
  console.log(vehicle);
  return (
    // <div className="p-2 animate__animated animate__fadeIn flex md:flex-row flex-col justify-between items-center border-b border-slate-300">
    //   <div className="flex items-center gap-4">
    //     <div>
    //       <img src={coverImage} alt={"vehicleImage"} className="h-20 w-24" />
    //     </div>
    //     <div className="flex justify-between items-center gap-2">
    //       <h1 className="text-lg font-bold mb-2">{vehicleName}</h1>
    //       <p className="badge badge-accent badge-outline p-4">{category}</p>
    //       <p className="text-sm">Price per day: {pricePerDay}$</p>
    //       {/* <p className="flex gap-2 items-center text-sm">
    //         Rating:{" "}
    //         <span className="flex">
    //           {[...Array(5)].map((_, index) => (
    //             <FaStar
    //               key={index}
    //               className={` ${
    //                 index < rating ? "text-amber-400" : "text-gray-300"
    //               }`}
    //             />
    //           ))}
    //         </span>
    //       </p> */}
    //     </div>
    //   </div>

    //   <Link
    //     to={`/booking-details/${_id}`}
    //     className="btn btn-outline outline-cyan-800 font-bold  hover:bg-cyan-100 btn-sm text-xs transition-transform"
    //   >
    //     View Details
    //   </Link>
    // </div>
    <tr>
      <th>{index + 1}</th>
      <td>
        <img
          src={coverImage}
          alt="vehicle image"
          className="h-15 w-15 rounded-2xl"
        />
      </td>
      <td>{vehicleName}</td>
      <td>{category}</td>
      <td className="text-red-700">${pricePerDay}</td>
      <td>
        <Link
          to={`/booking-details/${_id}`}
          className="btn btn-outline border border-amber-400 text-amber-400 font-bold  hover:bg-amber-400 hover:text-white btn-sm text-xs transition-transform"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};
export default VehicleCard;
