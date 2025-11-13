import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import useAxios from '../hooks/useAxios';
import MyVehicleCard from '../components/MyVehicleCard';
import Loading from './Loading';

const MyVehicles = () => {
    const { user } = use(AuthContext)
    const [myVehicles, SetMyVehicles] = useState([])
    const [loading, setLoading] = useState(true)
    const axiosInstance = useAxios()
    useEffect(() => {
        axiosInstance.get(`/my-vehicles?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(data => {
                SetMyVehicles(data.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [axiosInstance, user])
    if (loading || !user) (
        <Loading></Loading>
    )
    return (
        <>
            <div className=' max-w-[1200px] mx-auto'>
                <h1 className='section-title jost my-7 md:my-8'>My Vehicles:</h1>
                 <p className='md:text-lg font-semibold'><span>({myVehicles.length})</span> Apps Found</p>
                <div className='grid my-9 md:my-12'>
                    {myVehicles.map(vehicle => <MyVehicleCard key={vehicle._id} vehicle={vehicle}></MyVehicleCard>)}
                </div>
            </div>
        </>
    );
};

export default MyVehicles;