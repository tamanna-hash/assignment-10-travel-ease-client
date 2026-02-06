// import React, { use, useEffect, useState } from "react";
// import VehicleCard from "../components/VehicleCard";
// import useAxios from "../hooks/useAxios";
// import { AuthContext } from "../provider/AuthContext";
// import Loading from "./Loading";
// import VehicleCardSkeleton from "./VehicleCardSkeleton";

// const AllVehicles = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedRating, setSelectedRating] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const itemsPerPage = 8;

//   // const { user } = use(AuthContext);
//   const axiosInstance = useAxios();
//   useEffect(() => {
//     const fetchVehicles = async () => {
//       try {
//         setLoading(true);

//         const res = await axiosInstance.get("/all-vehicles", {
//           params: {
//             search: debouncedSearch || undefined,
//             category: selectedCategory || undefined,
//             rating: selectedRating || undefined,
//             sort: sortOrder || undefined,
//           },
//         });

//         setVehicles(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVehicles();
//   }, [
//     debouncedSearch,
//     selectedCategory,
//     selectedRating,
//     sortOrder,
//     axiosInstance,
//   ]);
  
//   const handleReset = () => {
//     setSearchText("");
//     setDebouncedSearch("");
//     setSelectedCategory("");
//     setSelectedRating("");
//     setSortOrder("");
//   };

//   // const handleSearch = (e) => {
//   //   e.preventDefault();
//   //   const text = e.target.search.value;
//   //   setSearchText(text);
//   // };
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(searchText);
//     }, 500); // 0.5s delay

//     return () => clearTimeout(timer);
//   }, [searchText]);

//   // useEffect(() => {
//   //   // if (!user || !user.accessToken) return;
//   //   axiosInstance.get("/all-vehicles").then((data) => {
//   //     SetVehicles(data.data);
//   //   });
//   // }, [axiosInstance]);
//   // const handleSearch = (e) => {
//   //   e.preventDefault();
//   //   const search_text = e.target.search.value;
//   //   setLoading(true);
//   //   axiosInstance.get(`/search?search=${search_text}`).then((data) => {
//   //     SetVehicles(data.data);
//   //     setLoading(false);
//   //   });
//   // };

//   // Fetch vehicles whenever sortOrder changes
//   // useEffect(() => {
//   //   const fetchVehicles = async () => {
//   //     try {
//   //       const url = sortOrder
//   //         ? `/all-vehicles?sort=${sortOrder}`
//   //         : "/all-vehicles";
//   //       const res = await axiosInstance.get(url);
//   //       SetVehicles(res.data);
//   //       setLoading(false);
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   };
//   //   fetchVehicles();
//   // }, [sortOrder, axiosInstance]);
//   if (loading)
//     return (
//       <>
//         <div className="min-h-screen md:mt-20 lg:mt-40 mt-10 flex justify-center items-center">
//           <div className=" grid grid-cols-1 mt-7 md:mt-12 md:grid-cols-3 lg:grid-cols-4 gap-2  justify-between">
//             {[...Array(6)].map((_) => (
//               <VehicleCardSkeleton></VehicleCardSkeleton>
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   return (
//     <>
//       <title>TravelEase-AllVehicles</title>
//       <div className=" max-w-[1200px] bg-base-100 mx-auto">
//         <div className="my-9">
//           <p className="text-center text-cyan-700 satisfy md:text-lg">
//             Travel smarter, travel easier
//           </p>
//           <h1 className="section-title">Our All Vehicles</h1>
//         </div>
//         <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center ">
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="flex flex-wrap items-center justify-center gap-3 w-full"
//           >
//             {/* Search */}
//             <div className="flex items-center w-full md:w-1/4 px-3 py-2 rounded-lg border border-gray-300 focus-within:border-cyan-600 bg-white">
//               <svg
//                 className="h-5 w-5 text-gray-400"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="m21 21-4.3-4.3" />
//               </svg>
//               <input
//                 type="search"
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 placeholder="Search by vehicle name"
//                 className="w-full ml-2 outline-none bg-transparent text-sm"
//               />
//             </div>

//             {/* Category */}
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="w-full md:w-1/6 px-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-cyan-600"
//             >
//               <option value="">All Categories</option>
//               <option value="Sedan">Sedan</option>
//               <option value="SUV">SUV</option>
//               <option value="Electric">Electric</option>
//               <option value="Van">Van</option>
//               <option value="Honda">Honda</option>
//             </select>

//             {/* Rating */}
//             <select
//               value={selectedRating}
//               onChange={(e) => setSelectedRating(e.target.value)}
//               className="w-full md:w-1/6 px-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-cyan-600"
//             >
//               <option value="">All Ratings</option>
//               <option value="5">★★★★★ & up</option>
//               <option value="4">★★★★☆ & up</option>
//               <option value="3">★★★☆☆ & up</option>
//               <option value="2">★★☆☆☆ & up</option>
//               <option value="1">★☆☆☆☆ & up</option>
//             </select>
//             {/* sort */}
//             <div className="">
//               <label htmlFor="sort" className="mr-1">
//                 Sort by price:
//               </label>
//               <select
//                 id="sort"
//                 value={sortOrder}
//                 onChange={(e) => setSortOrder(e.target.value)}
//                 className="border border-cyan-600 rounded p-1"
//               >
//                 <option value="">Default</option>
//                 <option value="asc">Low to High</option>
//                 <option value="desc">High to Low</option>
//               </select>
//             </div>
//             {/* Reset */}
//             <button
//               type="button"
//               onClick={handleReset}
//               className="w-full md:w-1/8 px-4 py-2 rounded-lg border border-cyan-600 text-cyan-700 font-semibold hover:bg-cyan-50 transition"
//             >
//               Reset
//             </button>
//           </form>
//         </div>
//         <div className="grid grid-cols-1 mt-7 md:mt-12 md:grid-cols-3 lg:grid-cols-4 gap-2  justify-between">
//           {vehicles.length > 0 ? (
//             vehicles.map((vehicle) => (
//               <VehicleCard key={vehicle.id} vehicle={vehicle}></VehicleCard>
//             ))
//           ) : (
//             <h1 className="text-2xl text-center font-semibold">
//               No Vehicles Are Found
//             </h1>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllVehicles;
import React, { useEffect, useState } from "react";
import VehicleCard from "../components/VehicleCard";
import useAxios from "../hooks/useAxios";
import VehicleCardSkeleton from "./VehicleCardSkeleton";

const AllVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(false);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;

  const axiosInstance = useAxios();

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText]);

  // reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, selectedCategory, selectedRating, sortOrder]);

  // fetch vehicles
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get("/all-vehicles", {
          params: {
            search: debouncedSearch || undefined,
            category: selectedCategory || undefined,
            rating: selectedRating || undefined,
            sort: sortOrder || undefined,
            page: currentPage,
            limit: itemsPerPage,
          },
        });

        setVehicles(res.data.vehicles);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [
    debouncedSearch,
    selectedCategory,
    selectedRating,
    sortOrder,
    currentPage,
    axiosInstance,
  ]);

  const handleReset = () => {
    setSearchText("");
    setDebouncedSearch("");
    setSelectedCategory("");
    setSelectedRating("");
    setSortOrder("");
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <VehicleCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <title>TravelEase - All Vehicles</title>

      <div className="max-w-[1200px] mx-auto px-3">
        {/* Header */}
        <div className="my-10 text-center">
          <p className="text-cyan-700 satisfy md:text-lg">
            Travel smarter, travel easier
          </p>
          <h1 className="section-title">Our All Vehicles</h1>
        </div>

        {/* Filters */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-wrap gap-3 items-center justify-center mb-8"
        >
          {/* Search */}
          <div className="flex items-center w-full md:w-1/4 px-3 py-2 rounded-lg border bg-base">
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by vehicle name"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/6 bg-base-100 px-3 py-2 rounded-lg border text-sm"
          >
            <option value="">All Categories</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Electric">Electric</option>
            <option value="Van">Van</option>
            <option value="Honda">Honda</option>
          </select>

          {/* Rating */}
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="w-full md:w-1/6 bg-base-100 px-3 py-2 rounded-lg border text-sm"
          >
            <option value="">All Ratings</option>
            <option value="5">★★★★★ & up</option>
            <option value="4">★★★★☆ & up</option>
            <option value="3">★★★☆☆ & up</option>
          </select>

          {/* Sort */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-3 py-2 bg-base-100 rounded-lg border text-sm"
          >
            <option value="">Default Price</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>

          {/* Reset */}
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 border border-cyan-600 text-cyan-700 rounded-lg hover:bg-cyan-50"
          >
            Reset
          </button>
        </form>

        {/* Vehicles */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vehicles.length > 0 ? (
            vehicles.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} />
            ))
          ) : (
            <p className="text-center col-span-full text-lg font-semibold">
              No Vehicles Found
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-40"
            >
              Prev
            </button>

            {[...Array(totalPages).keys()].map((num) => {
              const page = num + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === page
                      ? "bg-cyan-600 text-white"
                      : "hover:bg-cyan-50"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AllVehicles;

