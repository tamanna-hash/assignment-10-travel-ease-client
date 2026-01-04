import React, { use, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import VehicleCard from "../components/VehicleCard";
import { AuthContext } from "../provider/AuthContext";
import Loading from "./Loading";
import Banner from "../components/Banner";
import TopCategories from "../components/TopCategories";
import State from "../components/State";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "./About";
import HowItWork from "../components/HowItWork";
import Newsletter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/Faq";
import CTA from "../components/CTA";
const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [topVehicles, setTopVehicles] = useState([]);
  const { user, loading, setLoading } = use(AuthContext);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance.get("/latest-vehicles").then((data) => {
      setVehicles(data.data);
      setLoading(false);
    });
    axiosInstance
      .get("/top-vehicles")
      .then((data) => {
        setTopVehicles(data.data);
      })

      .catch((err) => console.log(err));
  }, [axiosInstance, user, setLoading]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="jost">
        <Banner></Banner>
        <div className=" max-w-[1200px] mx-auto">
          <HowItWork />
          <WhyChooseUs />
          <TopCategories />

          {/* latest vehicles */}
          <div className="my-9 md:mt-12 mx-2 md:mx-0">
            <p className="text-center text-cyan-700 satisfy md:text-lg">
              Your adventure starts here
            </p>
            <h1 className="section-title md:mb-12 ">Our Latest Vehicles</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-between">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
              ))}
            </div>
          </div>
          {/* top-rated-vehicles */}
          <h1 className="section-title my-9 md:my-12">Top Rated Vehicles</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:mb-12 justify-between">
            {topVehicles.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
            ))}
          </div>
          <Testimonials />
          <FAQ />
          <Newsletter />
          <CTA />
          {/* <TopCategories />
          <WhyChooseUs />
          <HowItWork/>
          <CTA/>
          <Newsletter/>
          <Testimonials/>
          <FAQ/> */}
          {/* <State></State> */}
        </div>
      </div>
    </>
  );
};

export default Home;
