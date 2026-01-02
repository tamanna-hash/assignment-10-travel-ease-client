import React, { use, useEffect, useState } from "react";
import VehicleCard from "../components/VehicleCard";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../provider/AuthContext";
import Loading from "./Loading";
import VehicleCardSkeleton from "./VehicleCardSkeleton";

const AllVehicles = () => {
  const [vehicles, SetVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();
  useEffect(() => {
    if (!user || !user.accessToken) return;
    axiosInstance.get("/all-vehicles").then((data) => {
      SetVehicles(data.data);
    });
  }, [axiosInstance, user]);
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoading(true);
    axiosInstance.get(`/search?search=${search_text}`).then((data) => {
      SetVehicles(data.data);
      setLoading(false);
    });
  };
  const [sortOrder, setSortOrder] = useState("");

  // Fetch vehicles whenever sortOrder changes
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const url = sortOrder
          ? `/all-vehicles?sort=${sortOrder}`
          : "/all-vehicles";
        const res = await axiosInstance.get(url);
        SetVehicles(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVehicles();
  }, [sortOrder, axiosInstance]);
  if (loading)
    return (
      <>
        <div className="min-h-screen md:mt-20 lg:mt-40 mt-10 flex justify-center items-center">
          <div className=" grid grid-cols-1 mt-7 md:mt-12 md:grid-cols-3 lg:grid-cols-4 gap-2  justify-between">
          {[...Array(6)].map((_) => (
            <VehicleCardSkeleton></VehicleCardSkeleton>
          ))}
        </div>
        </div>
      </>
    );
  return (
    <>
      <title>TravelEase-AllVehicles</title>
      <div className=" max-w-[1200px] bg-base-100 mx-auto">
        <div className="my-9">
          <p className="text-center text-cyan-700 satisfy md:text-lg">
            Travel smarter, travel easier
          </p>
          <h1 className="section-title">Our All Vehicles</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center ">
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center w-full md:w-1/2"
          >
            {/* Input */}
            <div className="flex items-center w-2/3 px-3 py-2 rounded-lg border border-gray-300 focus-within:border-cyan-600 transition">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                name="search"
                required
                placeholder="Search by vehicle name"
                className="w-full ml-2 outline-none bg-transparent text-sm"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-1/3 px-2 py-2 rounded-lg font-semibold text-white
                bg-linear-to-r from-cyan-800 to-cyan-600
               hover:from-cyan-700 hover:to-cyan-500
               transition"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
          <div className="">
            <label htmlFor="sort" className="mr-2 font-semibold">
              Sort by price:
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-cyan-800 rounded p-1"
            >
              <option value="">Default</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>
        <h1 className="text-lg mt-4 font-semibold mx-4">
          <span className="font-bold">In our collection:</span>{" "}
          {vehicles?.length || "loading...."} vehicles are available
        </h1>
        <div className="grid grid-cols-1 mt-7 md:mt-12 md:grid-cols-3 lg:grid-cols-4 gap-2  justify-between">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle}></VehicleCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllVehicles;
