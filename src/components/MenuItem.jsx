import { FaPlusCircle, FaCar, FaClipboardList } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import {
  FaCreditCard,
  FaHome,
  FaIdCard,
  FaRegHeart,
  FaUserTie,
} from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const MenuItem = () => {
  return (
    <ul className="menu sidebar-dashboard p-4 w-64 bg-cyan-900 text-white gap-2">
      {/* Member Dashboard */}
      <li>
        <Link to={"/"} className="text-xl font-bold text-white">
          Travel<span className="text-amber-400 -ml-2">Ease</span>
        </Link>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 tooltip tooltip-right"
          data-tip="Member Overview"
        >
          <FaHome className="text-lg" />
          <span className="truncate">Member Dashboard</span>
        </NavLink>
      </li>

      {/* Add Vehicle */}
      <li>
        <NavLink
          to="/dashboard/addVehicle"
          className="flex items-center gap-3 tooltip tooltip-right"
          data-tip="Add a new vehicle"
        >
          <FaPlusCircle className="text-lg" />
          <span className="truncate">Add Vehicle</span>
        </NavLink>
      </li>

      {/* My Vehicles */}
      <li>
        <NavLink
          to="/dashboard/myVehicles"
          className="flex items-center gap-3 tooltip tooltip-right"
          data-tip="Manage your vehicles"
        >
          <FaCar className="text-lg" />
          <span className="truncate">My Vehicles</span>
        </NavLink>
      </li>

      {/* My Bookings */}
      <li>
        <NavLink
          to="/dashboard/myBookings"
          className="flex items-center gap-3 tooltip tooltip-right"
          data-tip="View your bookings"
        >
          <FaClipboardList className="text-lg" />
          <span className="truncate">My Bookings</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuItem;
