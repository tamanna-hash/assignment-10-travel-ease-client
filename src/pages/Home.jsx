import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import VehicleCard from '../components/VehicleCard';
import { AuthContext } from '../provider/AuthContext';
import Loading from './Loading';

const Home = () => {
    const [vehicles, setVehicles] = useState([])
    const [topVehicles, setTopVehicles] = useState([])
    const [myBooking, setMyBooking] = useState([])
    const { user, loading, setLoading } = use(AuthContext)
    const axiosInstance = useAxios()
    useEffect(() => {
        if (!user || !user.accessToken) return;
        axiosInstance.get('/latest-vehicles')
            .then(data => {
                setVehicles(data.data)
            })
        axiosInstance.get('/top-vehicles')
            .then(data => {
                setTopVehicles(data.data)
            })
        axiosInstance.get(`/my-bookings?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(data => {
                setMyBooking(data.data)
                setLoading(false)
            })

    }, [axiosInstance, user, setLoading])
    if (loading || !user) {
        return (
            <Loading></Loading>
        );
    }
    return (
        <>
            <div><h1>my bookings: {myBooking.length}</h1></div>
            <div className=' max-w-[1200px] mx-auto'>
                <h1 className='text-center text-2xl'>Latest Vehicles</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                    {vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle}></VehicleCard>)}
                </div>
                <h1 className='text-3xl text-center'>Top Rated Vehicles</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                    {topVehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle}></VehicleCard>)}
                </div>
            </div>
        </>
    );
};

export default Home;