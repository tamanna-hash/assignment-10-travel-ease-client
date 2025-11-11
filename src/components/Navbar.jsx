import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import logo from '../assets/logo.jpg'
import toast from 'react-hot-toast';
import { PuffLoader } from 'react-spinners';
const Navbar = () => {
    const { user, signoutUserFunc, loading } = use(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }
    const handleLogOut = () => {
        signoutUserFunc()
            .then(() => {
                toast.success("You Logged Out successfully");
            })
            .catch((error) => {
                toast.error(error);
            });
    };
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allVehicles'>All Vehicles</NavLink></li>
        <li><NavLink to='/addVehicle'>Add Vehicle</NavLink></li>
        <li><NavLink to='/myVehicles'>My Vehicles</NavLink></li>
        <li><NavLink to='/myBookings'>My Bookings</NavLink></li>
    </>
    return (
        <div className='bg-[#E5EEFF]'>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="md:h-5 md:w-5 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2">
                            {links}
                        </ul>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                        <img src={logo} alt="" className=' md:w-10 md:h-10 h-5 w-5 rounded-[50%] animate__animated animate__bounce' />
                        <Link to='/' className="md:text-xl fredoka font-bold text-blue-400">TravelEase</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div>
                    <input
                        onChange={(e) => handleTheme(e.target.checked)}
                        type="checkbox"
                        defaultChecked={localStorage.getItem('theme') === "dark"}
                        className="toggle" />
                </div>
                <div className="navbar-end">
                    {loading ? <PuffLoader /> : user ? (
                        <div className="login-btn flex gap-2 md:gap-5">
                            <div className="tooltip tooltip-bottom ">
                                <div className="tooltip-content bg-blue-100">
                                    <div className=" text-blue-950 text-lg">{user.displayName}</div>
                                </div>
                                <div>
                                    <img
                                        className="md:w-12 md:h-12 h-8 w-8 rounded-[50%]"
                                        src={`${user && user.photoURL}`}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-xs md:btn-md md:px-5  hover:bg-blue-200  bg-blue-100 text-blue-500 ">
                                LogOut
                            </button>
                        </div>

                    ) : (
                        <>
                            <button className="btn btn-xs md:btn-md md:px-5  hover:bg-blue-200  bg-blue-100 font-semibold text-blue-500 ">
                                <Link to='/auth/login'>Login</Link>
                            </button>
                            <button className="btn btn-xs md:btn-md md:px-5  hover:bg-blue-200  bg-blue-100 font-semibold text-blue-500 ">
                                <Link to='/auth/register'>Register</Link>
                            </button>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Navbar;