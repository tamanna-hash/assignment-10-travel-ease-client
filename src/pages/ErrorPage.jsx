import React from "react";
import { Link, useNavigate } from "react-router";
import error404 from "../assets/err.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ErrorPage = () => {
  const navigate=useNavigate() 
  const handleNavigate=()=>{
    navigate(-1)
  }
   return (
    <>
      <title>Error-404</title>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <div>
          <img src={error404} alt="" className="h-40 w-40 md:h-80 md:w-full" />
        </div>
        <h1 className="text-3xl font-bold mt-4 mb-4">Oops, page not found!</h1>
        <p className="text-sm text-gray-500 pb-3">
          The page you are looking for is not available.
        </p>
        <button onClick={handleNavigate} className="px-4 py-2 bg-cyan-900 text-white rounded">
          Go Back !
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
