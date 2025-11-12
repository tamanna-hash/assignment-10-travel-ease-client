import React, { use, useEffect, useState } from 'react';
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
            <div className=' max-w-[1200px] mx-auto'>
                {myVehicles.length === 0 ?
                <h1 className='text-4xl'>oops nothing booked yet</h1>:
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                        {myVehicles.map(vehicle => <BookingCard key={vehicle._id} vehicle={vehicle}></BookingCard>)}
                    </div>
                     }
            </div>
        </>
    );
};

export default MyBookings;