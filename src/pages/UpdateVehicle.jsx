import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import useAxios from '../hooks/useAxios';
import Loading from './Loading';
import toast from 'react-hot-toast';

const UpdateVehicle = () => {
    const { id } = useParams();
    const { user } = use(AuthContext)
    const axiosInstance = useAxios()
    const [vehicle, setVehicle] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (!user || !user.accessToken) return;
        axiosInstance.get(`/all-vehicles/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            }
        })
            .then(res => {
                setVehicle(res.data)
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [id, user, axiosInstance]);

    const handleUpdate = (e) => {
        e.preventDefault()
        const formData = {
            vehicleName: e.target.vehicleName.value,
            owner: e.target.owner.value,
            category: e.target.category.value,
            pricePerDay:parseInt( e.target.price.value),
            location: e.target.location.value,
            availability: e.target.availability.value,
            description: e.target.description.value,
            coverImage: e.target.coverImage.value,
            
        }
        axiosInstance.put(`/all-vehicles/${vehicle._id}`,formData)
        .then(data=>{
            toast.success('successfully updated')
        })
    }


    if (loading || !user) {
        return (
            <Loading></Loading>
        );
    }

    return (
        <>
            <div className="bg-[#f4f7fd] py-4 flex justify-center min-h-screen items-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className="font-semibold md:text-2xl text-center">
                        Update vehicle
                    </h2>
                    <form onSubmit={handleUpdate} className="card-body">
                        <fieldset className="fieldset">
                            {/* vehicle Name  */}
                            <label className="label">Vehicle Name</label>
                            <input
                                name="vehicleName"
                                type="text"
                                className="input"
                                placeholder="Vehicle Name"
                                defaultValue={vehicle.vehicleName}
                                required
                            />
                            {/*owner Name  */}
                            <label className="label">Owner Name</label>
                            <input
                                name="owner"
                                type="text"
                                className="input"
                                placeholder="Owner Name"
                                 defaultValue={vehicle.owner}
                                required
                            />

                            {/* Category  */}
                            <label className="label">Category</label>
                            <input
                                name="category"
                                type="text"
                                className="input"
                                placeholder="category"
                                 defaultValue={vehicle.category}
                                required
                            />
                            {/* Price per day*/}
                            <label className="label">Price per day</label>
                            <input
                                name="price"
                                type="text"
                                className="input"
                                placeholder="price"
                                 defaultValue={vehicle.pricePerDay}
                                required
                            />
                            {/* Location  */}
                            <label className="label">Location</label>
                            <input
                                name="location"
                                type="text"
                                className="input"
                                placeholder="location"
                                 defaultValue={vehicle.location}
                                required
                            />

                            {/* availability */}
                            <label className="label">Availability</label>
                            <input
                                name="availability"
                                type="text"
                                className="input"
                                placeholder="availability"
                                 defaultValue={vehicle.availability}
                                required
                            />

                            {/* description */}
                            <label className="label font-medium">Description</label>
                            <textarea
                                name="description"
                                required
                                rows="3"
                                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200"
                                placeholder="Enter description"
                                 defaultValue={vehicle.description}
                            ></textarea>

                            {/* Photo URl  */}
                            <label className="label">Cover Image </label>
                            <input
                                name="coverImage"
                                type="text"
                                className="input"
                                placeholder="Photo URl"
                                 defaultValue={vehicle.coverImage}
                                required
                            />
                            <button type="submit" className="btn text-xs md:text-base bg-blue-100 mt-4 hover:scale-102">
                                Update Vehicle
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateVehicle;