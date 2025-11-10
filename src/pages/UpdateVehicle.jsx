import React from 'react';

const UpdateVehicle = () => {
    return (
        <>
            <div className="bg-[#f4f7fd] py-4 flex justify-center min-h-screen items-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className="font-semibold md:text-2xl text-center">
                        Add vehicle
                    </h2>
                    <form className="card-body">
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
                            <label className="label">Owner Name</label>
                            <input
                                name="ownerName"
                                type="text"
                                className="input"
                                placeholder="Owner Name"
                                required
                            />

                            {/* Category  */}
                            <label className="label">Category</label>
                            <input
                                name="category"
                                type="text"
                                className="input"
                                placeholder="ategory"
                                required
                            />
                            {/* Price per day*/}
                            <label className="label">Price per day</label>
                            <input
                                name="price"
                                type="text"
                                className="input"
                                placeholder="price"
                                required
                            />
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
                                name="photo"
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
                                required
                            />

                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateVehicle;