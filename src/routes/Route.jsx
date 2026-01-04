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
import UpdateVehicle from "../pages/UpdateVehicle";
import PrivateRoute from "../provider/PrivateRoute";
import VehicleDetails from "../pages/VehicleDetails";
import BookingDetails from "../pages/BookingDetails";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Profile from "../pages/Profile";
import DashboardLayout from "../layouts/DashboardLayout";
import Contact from "../pages/Contact";
import TravelPolicy from "../pages/TravelPolicy";
import TermsOfUse from "../pages/TermsOfUse";
import TravelCookiePolicy from "../pages/TravelCookiePolicy";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allVehicles",
        element: <AllVehicles />,
      },
      {
        path: "/vehicle-details/:id",
        element: <VehicleDetails />,
      },
      {
        path: "/booking-details/:id",
        element: <BookingDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/traveleasePolicy",
        element: <TravelPolicy />,
      },
      {
        path: "/Terms-of-use",
        element: <TermsOfUse />,
      },
      {
        path: "/cookie-policy",
        element: <TravelCookiePolicy />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index:true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "addVehicle",
        element: (
          <PrivateRoute>
            <AddVehicle />
          </PrivateRoute>
        ),
      },
      {
        path: "update-vehicle/:id",
        element: (
          <PrivateRoute>
            <UpdateVehicle />
          </PrivateRoute>
        ),
      },
      {
        path: "myVehicles",
        element: (
          <PrivateRoute>
            <MyVehicles />
          </PrivateRoute>
        ),
      },
      {
        path: "myBookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
