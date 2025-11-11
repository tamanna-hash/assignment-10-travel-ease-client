import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../provider/AuthContext';
import toast from 'react-hot-toast';

const VehicleDetails = () => {
    const { id } = useParams();
    const { user } = use(AuthContext)
    const axiosInstance = useAxios()
    const [vehicle, setVehicle] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (!user || !user.accessToken) return;
        axiosInstance.get(`/all-vehicles/${id}`, {
            headers: {
                authorization:  `Bearer ${user.accessToken}`,
            }
        })
            .then(res => {
                setVehicle(res.data)
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [id, user, axiosInstance]);
    if (loading || !user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    const handleRequestRide=()=>{
        const requestVehicle = {
            vehicleName:vehicle.vehicleName,
            owner:vehicle.owner,
            category:vehicle.category,
            pricePerDay:vehicle.pricePerDay,
            location:vehicle.location,
            availability:vehicle.availability,
            description:vehicle.description,
            coverImage:vehicle.coverImage,
            userEmail:vehicle.userEmail,
            createdAt: new Date(),
            bookingBy:user.email
        }
        axiosInstance.post('/my-bookings',requestVehicle)
        .then(res=>{
            toast.success('successfully booked')
        })
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
                        </div>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            {vehicle.description}
                        </p>

                        <div className="flex gap-3 mt-6">
                            <Link
                                to={`/update-vehicle/${vehicle._id}`}
                                className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
                            >
                                Update Model
                            </Link>
                            <button
                                onClick={handleRequestRide}
                                className="btn btn-secondary rounded-full"
                            >
                                Request Ride
                            </button>
                            <button
                                // onClick={handleDlete}
                                className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails;