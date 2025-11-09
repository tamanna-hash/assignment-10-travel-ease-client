import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Loading from "../pages/Loading";
import Home from "../pages/Home";
import AllVehicles from "../pages/AllVehicles";
import AddVehicle from "../pages/AddVehicle";
import MyVehicles from "../pages/MyVehicles";
import MyBookings from "../pages/MyBookings";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    hydrateFallbackElement:<Loading></Loading>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'/allVehicles',
            element:<AllVehicles/>
        },
        {
            path:'/addVehicle',
            element:<AddVehicle/>
        },
        {
            path:'/myVehicles',
            element:<MyVehicles/>
        },
        {
            path:'/myBookings',
            element:<MyBookings/>
        },
    ]
  },
   {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        hydrateFallbackElement: <Loading />,
        children: [
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Register/>
            },
         
        ]
    },
]);