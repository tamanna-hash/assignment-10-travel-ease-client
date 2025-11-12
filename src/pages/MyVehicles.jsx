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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                    {myVehicles.map(vehicle => <MyVehicleCard key={vehicle._id} vehicle={vehicle}></MyVehicleCard>)}
                </div>
            </div>
        </>
    );
};

export default MyVehicles;