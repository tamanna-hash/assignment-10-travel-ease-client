import { Link, Navigate, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthContext";
import { use } from "react";
const VehicleCard = ({ vehicle }) => {
    const { user } = use(AuthContext)
    const { vehicleName, coverImage, category, availability, description, rating, _id, owner } = vehicle
    const navigate = useNavigate()
    const axiosInstance = useAxios()
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/all-vehicles/${vehicle._id}`, {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`,
                    }
                })
                    .then(data => {
                        navigate('/allVehicles')
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your vehicle has been deleted.",
                            icon: "success"
                        });

                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });

    }
    return (
        // <motion.div
        //     initial="hidden"
        //     whileInView="visible"
        //     viewport={{ once: true }}
        //     transition={{
        //         duration: 0.75,
        //         ease: "easeInOut"
        //     }}
        //     variants={{
        //         hidden: { opacity: 0, y: 50 },
        //         visible: { opacity: 1, y: 0 },
        //     }}
        // >
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <figure className="h-48 overflow-hidden">
                <img
                    src={coverImage}
                    alt={'vehicleImage'}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{vehicleName}</h2>
                <div className="badge text-xs badge-xs badge-secondary rounded-full">{category}</div>
                <div className="text-xs text-secondary">{owner}</div>
                <p className="line-clamp-1">
                    {description}
                </p>
                <p className="flex gap-2 items-center">
                    rate:{rating}<FaStar className="text-yellow-400" />
                </p>
                <p className="flex gap-2 items-center">
                    availability:{availability}
                </p>
                <div className="card-actions justify-between items-center mt-4">
                    <Link to={`/vehicle-details/${_id}`} className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm">View</Link>
                </div>
                <Link
                    to={`/update-vehicle/${vehicle._id}`}
                    className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
                >
                    Update Model
                </Link>
                <button
                    onClick={handleDelete}
                    className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
                >
                    Delete
                </button>
            </div>
        </div>
        // </motion.div>
    );
};
export default VehicleCard;