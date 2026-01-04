import React, { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { FaStar } from "react-icons/fa";

const VehicleDetails = () => {
  const { id } = useParams();
  const [isBooked, setIsBooked] = useState(false);
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosInstance
      .get(`/all-vehicles/${id}`)
      .then((res) => {
        setVehicle(res.data);
        console.log(res);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id, axiosInstance]);
  useEffect(() => {
    if (!user?.email || !vehicle?._id) return;
    axiosInstance
      .get(`/my-bookings/check?email=${user?.email}&vehicleId=${vehicle._id}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      })
      .then((res) => {
        setIsBooked(res.data.isBooked);
      })
      .catch((err) => console.error(err));
  }, [user?.email, vehicle?._id, axiosInstance, user?.accessToken]);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleRequestRide = () => {
    if (!user) {
      return navigate("/auth/login");
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const requestVehicle = {
          vehicleId: vehicle._id,
          vehicleName: vehicle.vehicleName,
          owner: vehicle.owner,
          category: vehicle.category,
          pricePerDay: vehicle.pricePerDay,
          location: vehicle.location,
          availability: vehicle.availability,
          description: vehicle.description,
          coverImage: vehicle.coverImage,
          userEmail: vehicle.userEmail,
          createdAt: new Date(),
          bookingBy: user.email,
          rate: vehicle.rate,
        };
        axiosInstance
          .post(`/my-bookings/${vehicle._id}`, requestVehicle)
          .then(
            Swal.fire({
              title: "Booked",
              text: "successfully booked",
              icon: "success",
            })
          )
          .catch((err) => console.log(err));
      }
    });
  };
  const handleBack = () => {
    navigate("/allVehicles");
  };
  return (
    <>
      <title>TravelEase-VehicleDetails</title>
      <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
            <div className="shrink-0 w-full md:w-1/2">
              <img
                src={vehicle?.coverImage}
                alt=""
                className="w-full object-cover rounded-xl shadow-md"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
              <h2 className="card-title md:text-2xl">{vehicle?.vehicleName}</h2>
              <div className="badge badge-outline badge-accent font-semibold ">
                Category: {vehicle?.category}
              </div>
              <div>
                <span className=" font-semibold">Owner:</span> {vehicle?.owner}
              </div>
              <div>
                {" "}
                <span className="font-semibold">Location:</span>{" "}
                {vehicle?.location}
              </div>
              <div>
                {" "}
                <span className="font-semibold">Price per day:</span>{" "}
                {vehicle?.pricePerDay}৳
              </div>
              <p className="gap-2 items-center">
                <span className="font-semibold"></span>
                <span className="font-semibold">Availability:</span>
                {vehicle?.availability}
              </p>
              <p className="flex items-center">
                <span className="flex items-center">
                  <span className="font-semibold">Rate:</span>
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={` ${
                        index < vehicle?.rating
                          ? "text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </span>
              </p>
              <p className=" ">
                <span className="font-semibold">Description:</span>{" "}
                {vehicle?.description}
              </p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleRequestRide}
                  disabled={isBooked}
                  className={`btn px-4 py-2 font-bold text-white
                     ${
                       isBooked
                         ? "bg-gray-400 cursor-not-allowed"
                         : "bg-cyan-700 hover:bg-linear-to-r hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-500"
                     }`}
                >
                  {isBooked ? "Already Requested" : "Request Ride"}
                </button>
                <button
                  onClick={handleBack}
                  className="btn px-4 py-2 font-bold text-white hover:bg-linear-to-r bg-cyan-700  hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-500 transition-transform"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
