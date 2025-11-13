import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import useAxios from '../hooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { formatISO } from 'date-fns';

const AddVehicle = () => {
    const { user } = use(AuthContext)
    const axiosInstance = useAxios()
    const navigate = useNavigate()
    const handleAddVehicle = (e) => {
        e.preventDefault()

        const formData = {
            vehicleName: e.target.vehicleName.value,
            owner: e.target.owner.value,
            category: e.target.category.value,
            pricePerDay: parseInt(e.target.price.value),
            location: e.target.location.value,
            availability: e.target.availability.value,
            description: e.target.description.value,
            coverImage: e.target.coverImage.value,
            userEmail: user.email,
            createdAt: formatISO(new Date()),
        }
        axiosInstance.post('/all-vehicles', formData, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(data => {
            navigate('/allVehicles')
            Swal.fire({
                title: "Successfully Added",
                icon: "success",
                draggable: true
            });
        })
    }
return (
    <>
        <div className="py-4 bg-[#f4f7fd] flex justify-center min-h-screen items-center ">
            <div className="card bg-cyan-900/15 border border-cyan-900/30 p-4 w-full max-w-sm shrink-0 shadow-xl">
                <h2 className="font-semibold md:text-2xl text-center">
                    Add vehicle
                </h2>
                <form onSubmit={handleAddVehicle} className="card-body">
                    <fieldset className="fieldset">
                        {/* vehicle Name  */}
                        <label className="label">Vehicle Name</label>
                        <input
                            name="vehicleName"
                            type="text"
                            className="input"
                            placeholder="Vehicle Name"
                            required
                        />
                        {/*owner Name  */}
                        <label className="label">Owner</label>
                        <input
                            name="owner"
                            type="text"
                            className="input"
                            placeholder="Owner"
                            required
                        />

                        <div className='flex'>
                            {/* Category  */}
                            <div>
                                <label className="label">Category</label>
                                <select
                                    defaultValue={""}
                                    name="category"
                                    required
                                    className="select w-full focus:border-0 focus:outline-gray-200"
                                >
                                    <option value="" disabled>
                                        Select category
                                    </option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Van">Van</option>
                                    <option value="Honda">Honda</option>
                                </select>
                            </div>
                            {/* Price per day*/}
                            <div>
                                <label className="label">Price per day</label>
                                <input
                                    name="price"
                                    type="text"
                                    className="input"
                                    placeholder="price"
                                    required
                                />
                            </div>
                        </div>
                        {/* Location  */}
                        <label className="label">Location</label>
                        <input
                            name="location"
                            type="text"
                            className="input"
                            placeholder="location"
                            required
                        />

                        {/* availability */}
                        <label className="label">Availability</label>
                        <input
                            name="availability"
                            type="text"
                            className="input"
                            placeholder="availability"
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
                        ></textarea>

                        {/* Photo URl  */}
                        <label className="label">Cover Image </label>
                        <input
                            name="coverImage"
                            type="text"
                            className="input"
                            placeholder="Photo URl"
                            required
                        />
                        {/* email  */}
                        <label className="label">User Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                            defaultValue={user.email}
                            required
                        />
                        <button type="submit" className="btn px-4 py-2 font-bold text-white hover:bg-linear-to-r bg-cyan-700  hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-500 transition-transform mt-4">
                            Add Vehicle
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    </>
);
};

export default AddVehicle;