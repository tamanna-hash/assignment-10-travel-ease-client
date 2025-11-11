import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import VehicleCard from '../components/VehicleCard';

const Home = () => {
    const[vehicles,setVehicles]=useState([])
    const axiosInstance=useAxios()
    useEffect(()=>{
        axiosInstance.get('latest-vehicles')
        .then(data=>{
            setVehicles(data.data)
        })
    },[axiosInstance])
    return (
        <>
            <div className=' max-w-[1200px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                    {vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle}></VehicleCard>)}
                </div>
            </div>
        </>
    );
};

export default Home;