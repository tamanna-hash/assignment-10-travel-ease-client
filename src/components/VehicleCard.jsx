import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
const VehicleCard = ({ vehicle }) => {
    const { vehicleName, coverImage, category, location, availability,pricePerDay, description, rating, _id, owner } = vehicle

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                duration: 0.75,
                ease: "easeInOut"
            }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div className="card rounded-none bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <figure className="md:h-52 h-32 overflow-hidden">
                    <img
                        src={coverImage}
                        alt={'vehicleImage'}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                </figure>
                <div className="card-body rounded-none ">
                    <h2 className="card-title md:text-2xl">{vehicleName}</h2>
                    <div className="badge badge-outline badge-accent">{category}</div>
                    <div className=" font-semibold">Owner: {owner}</div>
                    <div className="font-semibold">Location: {location}</div>
                    <div className="font-semibold">Price per day: {pricePerDay}$</div>
                    <p className="flex font-semibold gap-2 items-center">
                        Availability:{availability}
                    </p>
                    <p className="flex items-center gap-1 font-semibold">
                        Rate: {rating}<FaStar className="text-amber-400 text-xl" />
                    </p>
                    <p className="line-clamp-1 ">
                        {description}
                    </p>
                    <div className="card-actions justify-between items-center mt-1">
                        <Link to={`/vehicle-details/${_id}`} className="btn px-4 py-2 w-1/2 font-bold text-white hover:bg-linear-to-r bg-cyan-700  hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-500 transition-transform">
                            View Details</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
export default VehicleCard;
