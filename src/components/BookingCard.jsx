import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
const VehicleCard = ({ vehicle }) => {
    const { vehicleName, coverImage, category, description, location, availability, pricePerDay, rating, _id, owner } = vehicle

    return (
        <div className='p-2 animate__animated animate__fadeIn md:p-2 flex md:flex-row flex-col justify-between items-center border-b border-slate-300'>
            <div className="flex items-center gap-4">
                <div>
                    <img src={coverImage} alt={'vehicleImage'} className='h-20 w-24' />
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-2'>{vehicleName}</h1>
                    {/* <div className='md:flex gap-3'> */}
                        <p className='badge badge-accent badge-outline p-4'>{category}</p>
                        <p className='text-sm'>Price per day: {pricePerDay}$</p>
                        <p className='flex gap-2 items-center text-sm'>Rating: {rating}<FaStar className='h-5 w-5 text-amber-400' alt="" /></p>
                    {/* </div> */}
                </div>
            </div>

            <Link to={`/booking-details/${_id}`} className="btn btn-outline outline-cyan-800 font-bold  hover:bg-cyan-100 btn-sm text-xs transition-transform">
                View Details
            </Link>
        </div>
    );
};
export default VehicleCard;
