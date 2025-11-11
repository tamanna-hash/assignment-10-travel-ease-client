import React, { use, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../provider/AuthContext';
import Loading from './Loading';
import VehicleCard from '../components/VehicleCard';

const MyBookings = () => {
    const { user } = use(AuthContext)
    const [myVehicles, SetMyVehicles] = useState([])
    const [loading, setLoading] = useState(true)
    const axiosInstance = useAxios()
    useEffect(() => {
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                    {myVehicles.map(vehicle => <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>)}
                </div>
            </div>
        </>
    );
};

export default MyBookings;