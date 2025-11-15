import React, { use, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../provider/AuthContext';
import Loading from './Loading';
import BookingCard from '../components/BookingCard';

const MyBookings = () => {
    const { user } = use(AuthContext)
    const [myVehicles, SetMyVehicles] = useState([])
    const [loading, setLoading] = useState(true)
    const axiosInstance = useAxios()
    useEffect(() => {
        if (!user || !user.accessToken) return;
        axiosInstance.get(`/my-bookings?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(data => {
                SetMyVehicles(data.data)
                setLoading(false)
            })
    }, [axiosInstance, user])
    if (loading || !user) (
        <Loading></Loading>
    )
    return (
        <>
        <title>TravelEase-MyBookings</title>
            <div className=' max-w-[1200px] mx-auto'>
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
                    <h1 className='section-title jost my-7 md:my-12'>My Bookings:</h1> 
                    {myVehicles.length === 0 ?
                        <h1 className='jost section-title'>Booked Ride Will Be Shown Below</h1> :
                        <div className='grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-12 justify-center md:justify-between'>
                            {myVehicles.map(vehicle => <BookingCard key={vehicle._id} vehicle={vehicle}></BookingCard>)}
                        </div>
                    }
                </motion.div>
            </div>
        </>
    );
};

export default MyBookings;