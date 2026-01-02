import React from 'react';
import { FaCarAlt, FaCarSide } from 'react-icons/fa';
import { MdElectricCar } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { motion } from "framer-motion";
import travel2 from '../assets/travel2.jpg';

const TopCategories = () => {
    return (
        <div className="max-container jost flex flex-col bg-base-300">
            <div className='mt-9 mb-4 md:my-12'>
                <p className='text-center text-cyan-700 satisfy md:text-lg'>Drive Freedom with Every Ride.</p>
                <h1 className="section-title  animate__animated animate__fadeInUp">
                    Our Top Categories
                </h1>
            </div>

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
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8 max-w-[1000px] mx-auto p-6 md:p-12">

                    {/* ELECTRIC */}
                    <div
                        className="relative top-card rounded-lg group bg-cover bg-center"
                        style={{ backgroundImage: `url(${travel2})` }}
                    >
                        <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/10"></div>
                        <div className="relative z-10 text-center">
                            <MdElectricCar className="top-i mx-auto" />
                            <h1 className="top-h1">ELECTRIC</h1>
                            <p className="text-white text-sm md:text-base">Make your ride easier</p>
                        </div>
                    </div>

                    {/* SEDAN */}
                    <div
                        className="relative rounded-lg top-card group bg-cover bg-center"
                        style={{ backgroundImage: `url(${travel2})` }}
                    >
                        <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/10"></div>
                        <div className="relative z-10 text-center">
                            <FaCarSide className="top-i mx-auto" />
                            <h1 className="top-h1">SEDAN</h1>
                            <p className="text-white text-sm md:text-base">Make your ride easier</p>
                        </div>
                    </div>

                    {/* SUV */}
                    <div
                        className="relative rounded-lg top-card group bg-cover bg-center"
                        style={{ backgroundImage: `url(${travel2})` }}
                    >
                        <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/10"></div>
                        <div className="relative z-10 text-center">
                            <FaCarAlt className="top-i mx-auto" />
                            <h1 className="top-h1">SUV</h1>
                            <p className="text-white text-sm md:text-base">Make your ride easier</p>
                        </div>
                    </div>

                    {/* HONDA */}
                    <div
                        className="relative rounded-lg top-card group bg-cover bg-center"
                        style={{ backgroundImage: `url(${travel2})` }}
                    >
                        <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/10"></div>
                        <div className="relative z-10 text-center">
                            <RiMotorbikeFill className="top-i mx-auto" />
                            <h1 className="top-h1">HONDA</h1>
                            <p className="text-white text-sm md:text-base">Make your ride easier</p>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default TopCategories;
