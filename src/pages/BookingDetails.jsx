import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../provider/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loading from './Loading';

const VehicleDetails = () => {
    const { id } = useParams();
    const { user } = use(AuthContext)
    const axiosInstance = useAxios()
    const [vehicle, setVehicle] = useState({})
    const [loading, setLoading] = useState(true)
    // const [refetch, setRefetch] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        ////for booking-details
        if (!user || !user.accessToken) return;
        axiosInstance.get(`/all-bookings/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            }
        })
            .then(res => {
                setVehicle(res.data)
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }, [id, user, axiosInstance]);
    if (loading || !user) {
        return (
            <Loading></Loading>
        );
    }
    const handleBack=()=>{
        navigate('/myBookings')
    }
    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
                    <div className="shrink-0 w-full md:w-1/2">
                        <img
                            src={vehicle.coverImage}
                            alt=""
                            className="w-full object-cover rounded-xl shadow-md"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {vehicle.vehicleName}
                        </h1>

                        <div className="flex gap-3">
                            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                                {vehicle.category}
                            </div>

                            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                                Owner: {vehicle.owner}
                            </div>
                            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                                Booked: {vehicle.booked}
                            </div>
                            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                                Price: {vehicle.pricePerDay}
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            {vehicle.description}
                        </p>

                        <div className="flex gap-3 mt-6">
                            <button  onClick={handleBack} 
                                className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails;