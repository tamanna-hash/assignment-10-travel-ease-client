import { Link, Outlet } from "react-router";
import MenuItem from "../components/MenuItem";
import { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { FaChartBar, FaUser } from "react-icons/fa";
import { PuffLoader } from "react-spinners";
import toast from "react-hot-toast";
import { PiSignOutBold } from "react-icons/pi";
const DashboardLayout = () => {
  const { loading, signoutUserFunc, user } = use(AuthContext);
  const handleLogOut = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("You Logged Out successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="drawer lg:drawer-open">
        {/* Drawer toggle checkbox */}
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        {/* Drawer content */}
        <div className="drawer-content flex flex-col min-h-screen">
          {/* Dashboard Navbar */}
          <nav className="navbar w-full bg-cyan-900 text-white shadow-md sticky top-0 ">
            <label
              htmlFor="dashboard-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost lg:hidden"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block h-5 w-5"
              >
                <path d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <div className="navbar-start px-4 text-lg font-semibold">Dashboard</div>

            <div className="navbar-end">
              {loading ? (
                <PuffLoader size={24} />
              ) : (
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full ring ring-amber-400 ring-offset-2">
                      <img src={user.photoURL} alt="avatar" />
                    </div>
                  </div>
                  <ul
                    className="menu nav-li dropdown-content mt-3 p-4 w-48
              bg-black/70 backdrop-blur-lg rounded-xl shadow-xl text-white"
                  >
                    <li>
                      <Link
                        to="/dashboard/profile"
                        className="flex items-center gap-2"
                      >
                        <FaUser className="text-white" />
                        Profile
                      </Link>
                    </li>

                    <li>
                      <Link to="/dashboard" className="flex items-center gap-2">
                        <FaChartBar className="text-white" />
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="flex items-center gap-2 w-full"
                      >
                        <PiSignOutBold className="text-white" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1 p-6 bg-base-300">
            <Outlet />
          </main>
        </div>

        {/* Drawer sidebar */}
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <aside className="flex min-h-full pt-17 md:pt-0 flex-col w-64 lg:w-64 bg-cyan-900 text-white">
            <MenuItem />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
