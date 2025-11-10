import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import useAxios from '../hooks/useAxios';

const AllVehicles = () => {
    const [vehicles, SetVehicles] = useState([])
    const axiosInstance = useAxios()
    useEffect(() => {
        axiosInstance.get('/all-vehicles')
            .then(data => {
                SetVehicles(data.data)
            })
    }, [])
    return (
        <>
            <div className=' max-w-[1200px] mx-auto'>
                <h1>{vehicles.length}</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                    {vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle}></VehicleCard>)}
                </div>
            </div>
        </>
    );
};

export default AllVehicles;