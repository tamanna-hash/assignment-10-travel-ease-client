import React, { use, useEffect, useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../provider/AuthContext';
import Loading from './Loading';

const AllVehicles = () => {
    const [vehicles, SetVehicles] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = use(AuthContext)
    const axiosInstance = useAxios()
    useEffect(() => {
        if (!user || !user.accessToken) return;
        axiosInstance.get('/all-vehicles')
            .then(data => {
                SetVehicles(data.data)
            })
    }, [axiosInstance, user])
    const handleSearch = (e) => {
        e.preventDefault()
        const search_text = e.target.search.value;
        setLoading(true)
        axiosInstance.get(`/search?search=${search_text}`)
            .then(data => {
                SetVehicles(data.data)
                setLoading(false)
            })
    }
    const [sortOrder, setSortOrder] = useState("");

    // Fetch vehicles whenever sortOrder changes
    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const url = sortOrder ? `/all-vehicles?sort=${sortOrder}` : "/all-vehicles";
                const res = await axiosInstance.get(url);
                SetVehicles(res.data);
                setLoading(false)
            } catch (err) {
                console.error(err);
            }
        };
        fetchVehicles();
    }, [sortOrder, axiosInstance]);
    if (loading || !user) (
        <Loading></Loading>
    )
    return (
        <>
            <div className=' max-w-[1200px] mx-auto'>
                <div className='my-9'>
                    <p className='text-center text-cyan-700 satisfy md:text-lg'>Travel smarter, travel easier</p>
                    <h1 className='section-title'>Our All Vehicles</h1>
                </div>
                <div className='flex justify-between items-center '>
                    <form onSubmit={handleSearch} className='justify-center flex '>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" name='search' required placeholder="Search by vehicle name" />
                        </label>
                        <button type='submit' className='btn px-4 py-2 w-1/2 font-bold text-white bg-linear-to-r from-cyan-900 via-cyan-700 to-cyan-600  hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-500 transition-transform'>
                            {loading ? 'searching' : 'search'}</button>
                    </form>
                    <div className="">
                        <label htmlFor="sort" className="mr-2 font-semibold">Sort by price:</label>
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
                <h1 className='text-lg mt-4 font-semibold'><span className='font-bold'>In our collection:</span> {vehicles.length} vehicles are available</h1>
                <div className='grid grid-cols-1 mt-7 md:mt-12 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                    {vehicles.map(vehicle =>
                        <VehicleCard key={vehicle.id} vehicle={vehicle}></VehicleCard>
                    )}
                </div>
            </div>
        </>
    );
};

export default AllVehicles;