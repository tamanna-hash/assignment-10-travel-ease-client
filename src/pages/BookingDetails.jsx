import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../provider/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loading from './Loading';
import { FaStar } from 'react-icons/fa';

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
    const handleBack = () => {
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
                        <h2 className="card-title md:text-2xl">{vehicle.vehicleName}</h2>
                        <div className="badge badge-outline badge-accent font-semibold ">
                            Category: {vehicle.category}</div>
                        <div><span className=" font-semibold">Owner:</span> {vehicle.owner}</div>
                        <div> <span className='font-semibold'>Location:</span>  {vehicle.location}</div>
                        <div> <span className='font-semibold'>Price per day:</span>  {vehicle.pricePerDay}$</div>
                        <p className='gap-2 items-center'><span className='font-semibold'></span>
                            <span className='font-semibold'>Availability:</span>{vehicle.availability}
                        </p>
                        <p className="flex items-center"><span className='font-semibold'>Rate:</span>
                            {vehicle.rating}<FaStar className="text-amber-400 text-xl" />
                        </p>
                        <p className=" ">
                            <span className='font-semibold'>Description:</span> {vehicle.description}
                        </p>

                        <div className="flex gap-3 mt-6">

                            <button onClick={handleBack}
                                className="btn px-4 py-2 font-bold text-white hover:bg-linear-to-r bg-cyan-700  hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-500 transition-transform"
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