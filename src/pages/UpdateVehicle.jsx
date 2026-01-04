// import React, { use, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import { AuthContext } from "../provider/AuthContext";
// import useAxios from "../hooks/useAxios";
// import Loading from "./Loading";
// import toast from "react-hot-toast";

// const UpdateVehicle = () => {
//   const { id } = useParams();
//   const { user } = use(AuthContext);
//   const axiosInstance = useAxios();
//   const [vehicle, setVehicle] = useState({});
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!user || !user.accessToken) return;
//     axiosInstance
//       .get(`/all-vehicles/${id}`, {
//         headers: {
//           authorization: `Bearer ${user.accessToken}`,
//         },
//       })
//       .then((res) => {
//         setVehicle(res.data);
//       })
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, [id, user, axiosInstance]);

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const formData = {
//       vehicleName: e.target.vehicleName.value,
//       owner: e.target.owner.value,
//       category: e.target.category.value,
//       pricePerDay: parseInt(e.target.price.value),
//       location: e.target.location.value,
//       availability: e.target.availability.value,
//       description: e.target.description.value,
//       coverImage: e.target.coverImage.value,
//     };
//     axiosInstance.put(`/all-vehicles/${vehicle._id}`, formData).then((data) => {
//       toast.success("successfully updated");
//       navigate("/myVehicles");
//     });
//   };

//   if (loading || !user) {
//     return <Loading></Loading>;
//   }

//   return (
//     <>
//       <title>TravelEase-UpdateVehicles</title>
//       <div className="bg-[#f4f7fd] py-4 flex justify-center min-h-screen items-center">
//         <div className="card bg-cyan-900/15 border border-cyan-900/30 p-4 w-full max-w-sm shrink-0 shadow-2xl py-5">
//           <h2 className="font-semibold md:text-2xl text-center">
//             Update vehicle
//           </h2>
//           <form onSubmit={handleUpdate} className="card-body">
//             <fieldset className="fieldset">
//               {/* vehicle Name  */}
//               <label className="label">Vehicle Name</label>
//               <input
//                 name="vehicleName"
//                 type="text"
//                 className="input"
//                 placeholder="Vehicle Name"
//                 defaultValue={vehicle.vehicleName}
//                 required
//               />
//               {/*owner Name  */}
//               <label className="label">Owner Name</label>
//               <input
//                 name="owner"
//                 type="text"
//                 className="input"
//                 placeholder="Owner Name"
//                 defaultValue={vehicle.owner}
//                 required
//               />

//               {/* Category  */}
//               <label className="label">Category</label>
//               <input
//                 name="category"
//                 type="text"
//                 className="input"
//                 placeholder="category"
//                 defaultValue={vehicle.category}
//                 required
//               />
//               {/* Price per day*/}
//               <label className="label">Price per day</label>
//               <input
//                 name="price"
//                 type="text"
//                 className="input"
//                 placeholder="price"
//                 defaultValue={vehicle.pricePerDay}
//                 required
//               />
//               {/* Location  */}
//               <label className="label">Location</label>
//               <input
//                 name="location"
//                 type="text"
//                 className="input"
//                 placeholder="location"
//                 defaultValue={vehicle.location}
//                 required
//               />

//               {/* availability */}
//               <label className="label">Availability</label>
//               <input
//                 name="availability"
//                 type="text"
//                 className="input"
//                 placeholder="availability"
//                 defaultValue={vehicle.availability}
//                 required
//               />

//               {/* description */}
//               <label className="label font-medium">Description</label>
//               <textarea
//                 name="description"
//                 required
//                 rows="3"
//                 className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200"
//                 placeholder="Enter description"
//                 defaultValue={vehicle.description}
//               ></textarea>

//               {/* Photo URl  */}
//               <label className="label">Cover Image </label>
//               <input
//                 name="coverImage"
//                 type="text"
//                 className="input"
//                 placeholder="Photo URl"
//                 defaultValue={vehicle.coverImage}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="btn px-4 py-2 font-bold text-white hover:bg-linear-to-r bg-cyan-700  hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-500 transition-transform"
//               >
//                 Update Vehicle
//               </button>
//             </fieldset>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpdateVehicle;
import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import useAxios from "../hooks/useAxios";
import Loading from "./Loading";
import toast from "react-hot-toast";

const UpdateVehicle = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.accessToken) return;

    axiosInstance
      .get(`/all-vehicles/${id}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setVehicle(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id, user, axiosInstance]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = {
      vehicleName: e.target.vehicleName.value,
      owner: e.target.owner.value,
      category: e.target.category.value,
      pricePerDay: parseInt(e.target.price.value),
      location: e.target.location.value,
      availability: e.target.availability.value,
      description: e.target.description.value,
      coverImage: e.target.coverImage.value,
    };

    axiosInstance.put(`/all-vehicles/${vehicle._id}`, formData).then(() => {
      toast.success("Successfully updated");
      navigate("/dashboard/myVehicles");
    });
  };

  if (loading || !user) return <Loading />;

  return (
    <>
      <title>TravelEase - Update Vehicle</title>

      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-cyan-100 via-white to-amber-200 px-4">
        <div className="w-full max-w-xl rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-cyan-900/10">
          {/* Header */}
          <div className="px-6 py-5 border-b border-cyan-900/10">
            <h2 className="text-2xl font-semibold text-cyan-900 text-center">
              Update Vehicle
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              Modify vehicle details and keep your listing up to date
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleUpdate} className="p-6 space-y-5 bg-base-100">
            {/* Vehicle Name */}
            <div>
              <label className="label font-medium">Vehicle Name</label>
              <input
                name="vehicleName"
                type="text"
                className="input input-bordered w-full"
                defaultValue={vehicle.vehicleName}
                required
              />
            </div>

            {/* Owner */}
            <div>
              <label className="label font-medium">Owner Name</label>
              <input
                name="owner"
                type="text"
                className="input input-bordered w-full"
                defaultValue={vehicle.owner}
                required
              />
            </div>

            {/* Category + Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label font-medium">Category</label>
                <input
                  name="category"
                  type="text"
                  className="input input-bordered w-full"
                  defaultValue={vehicle.category}
                  required
                />
              </div>

              <div>
                <label className="label font-medium">Price per day</label>
                <input
                  name="price"
                  type="text"
                  className="input input-bordered w-full"
                  defaultValue={vehicle.pricePerDay}
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="label font-medium">Location</label>
              <input
                name="location"
                type="text"
                className="input input-bordered w-full"
                defaultValue={vehicle.location}
                required
              />
            </div>

            {/* Availability */}
            <div>
              <label className="label font-medium">Availability</label>
              <input
                name="availability"
                type="text"
                className="input input-bordered w-full"
                defaultValue={vehicle.availability}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                rows="3"
                className="textarea textarea-bordered w-full"
                defaultValue={vehicle.description}
                required
              />
            </div>

            {/* Cover Image */}
            <div>
              <label className="label font-medium">Cover Image URL</label>
              <input
                name="coverImage"
                type="text"
                className="input input-bordered w-full"
                defaultValue={vehicle.coverImage}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full bg-cyan-900 hover:bg-cyan-800 text-white font-semibold tracking-wide rounded-xl mt-4"
            >
              Update Vehicle
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateVehicle;
