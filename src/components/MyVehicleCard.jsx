import { Link, Navigate, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";

import { AuthContext } from "../provider/AuthContext";
import { use } from "react";
import { MdDeleteForever } from "react-icons/md";
const VehicleCard = ({ vehicle, index }) => {
  const { user } = use(AuthContext);
  const {
    vehicleName,
    coverImage,
    category,
    pricePerDay,
    rating,
    createdAt,
    _id,
    owner,
  } = vehicle;
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/all-vehicles/${vehicle._id}`, {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          })
          .then((data) => {
            navigate("/allVehicles");
            Swal.fire({
              title: "Deleted!",
              text: "Your vehicle has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    // <div className='p-2 animate__animated animate__fadeInUp md:p-2 flex md:flex-row flex-col justify-between items-center border-b border-slate-300'>
    //     <div className="flex items-center gap-4">
    //         <div>
    //             <img src={coverImage} alt={'vehicleImage'} className='h-20 w-20' />
    //         </div>
    //         <div>
    //             <h1 className='text-lg font-bold mb-2'>{vehicleName}</h1>
    //             <div className='md:flex gap-3'>
    //                 <p className='badge badge-accent badge-outline'>{category}</p>
    //                 <p className='text-sm flex items-center'>Price per day: {pricePerDay}$</p>
    //                 <p className='flex gap-2 items-center text-sm'>Rating: {rating}<FaStar className='h-5 w-5 text-amber-400' alt="" /></p>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="flex justify-between items-center md:mt-0 mt-2 gap-2">
    //         <Link to={`/vehicle-details/${_id}`} className="btn btn-outline outline-cyan-800 font-bold  hover:bg-cyan-100 btn-sm text-xs transition-transform">
    //             View Details
    //         </Link>
    //         <Link
    //             to={`/update-vehicle/${vehicle._id}`}
    //             className="btn btn-outline outline-cyan-800 font-bold  hover:bg-cyan-100 btn-sm text-xs transition-transform">
    //             Update <GrUpdate className="text-green-600 h-3 w-3" />
    //         </Link>
    //         <button
    //             onClick={handleDelete}
    //             className="btn btn-outline outline-cyan-800 font-bold  hover:bg-cyan-100 btn-sm text-xs transition-transform">
    //             Delete <MdDeleteForever className="text-red-600 h-4 w-4" />
    //         </button>
    //     </div>

    // </div >
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
      <td className="">{new Date(createdAt).toLocaleString()}</td>
      {/* actions */}
      <td>
        <div className="flex justify-between items-center">
          <Link
            to={`/vehicle-details/${_id}`}
            className="btn btn-outline border border-amber-400 text-amber-400 font-bold  hover:bg-amber-400 hover:text-white btn-sm text-xs transition-transform"
          >
            View Details
          </Link>
          <Link
            to={`/dashboard/update-vehicle/${vehicle._id}`}
            className="btn btn-outline border border-amber-400 text-amber-400 font-bold  hover:bg-amber-400 hover:text-white btn-sm text-xs transition-transform"
          >
            Update <GrUpdate className="text-green-600 h-3 w-3" />
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-outline border border-red-600 text-red-600 font-bold  hover:bg-red-600 hover:text-white btn-sm text-xs transition-transform"
          >
            Delete <MdDeleteForever className=" h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default VehicleCard;
