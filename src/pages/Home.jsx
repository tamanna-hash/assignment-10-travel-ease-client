import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import VehicleCard from '../components/VehicleCard';
import { AuthContext } from '../provider/AuthContext';
import Loading from './Loading';
import Banner from '../components/Banner';
import TopCategories from '../components/TopCategories';
import About from '../components/About';
const Home = () => {
    const [vehicles, setVehicles] = useState([])
    const [topVehicles, setTopVehicles] = useState([])
    // const [myBooking, setMyBooking] = useState([])
    const { user, loading, setLoading } = use(AuthContext)
    const axiosInstance = useAxios()
    useEffect(() => {
        if (!user || !user.accessToken) return;
        axiosInstance.get('/latest-vehicles')
            .then(data => {
                setVehicles(data.data)
                setLoading(false)
            })
        axiosInstance.get('/top-vehicles')
            .then(data => {
                setTopVehicles(data.data)

            })
            // axiosInstance.get(`/my-bookings?email=${user.email}`, {
            //     headers: {
            //         authorization: `Bearer ${user.accessToken}`
            //     }
            // })
            // .then(data => {
            //     // setMyBooking(data.data)

            // })
            .catch(err => console.log(err))

    }, [axiosInstance, user, setLoading])
    if (loading) {
        return (
            <Loading></Loading>
        );
    }
    return (
        <>
            <div className='jost'>
                <Banner></Banner>
                <div className=' max-w-[1200px] mx-auto'>
                    <div className='my-9 md:mt-20'>
                        <p className='text-center text-cyan-700 satisfy md:text-lg'>Your adventure starts here</p>
                        <h1 className='section-title md:mb-20 '>Our Latest Vehicles</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                            {vehicles.map(vehicle => <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>)}
                        </div>
                    </div>
                    <h1 className='section-title my-9 md:my-20'>Top Rated Vehicles</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                        {topVehicles.map(vehicle => <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>)}
                    </div>
                    <TopCategories />
                    <h1 className='section-title my-9 md:my-20'>About
                        <span className="md:text-3xl satisfy ml-5 font-bold ">Travel<span className='text-amber-400'>Ease</span> </span>
                    </h1>
                    <About />
                </div>
            </div>
        </>
    );
};

export default Home;