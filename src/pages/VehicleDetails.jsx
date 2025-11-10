import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useAxios from '../hooks/useAxios';

const VehicleDetails = () => {
    const { id } = useParams();
    const axiosInstance = useAxios()
    const[vehicle,setVehicle]=useState({})
    //  console.log(vehicle);
    useEffect(()=>{
        axiosInstance.get(`/all-vehicles/${id}`)
        .then(data=>{
            setVehicle(data.data)
        })
        
    },[])
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
                                to={`/update-model/${vehicle._id}`}
                                className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
                            >
                                Update Model
                            </Link>
                            <button
                                // onClick={handleDownload}
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