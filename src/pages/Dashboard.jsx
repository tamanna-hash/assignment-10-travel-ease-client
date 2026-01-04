import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../provider/AuthContext";
import Loading from "./Loading";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#A569BD"];

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState(null);

  const userEmail = user?.email;

  useEffect(() => {
    if (!userEmail) return;

    const fetchData = async () => {
      try {
        const vehiclesRes = await axiosInstance.get(
          `/my-vehicles?email=${userEmail}`,
          {
            headers: { authorization: `Bearer ${user.accessToken}` },
          }
        );
        setVehicles(vehiclesRes.data);

        const bookingsRes = await axiosInstance.get(
          `/my-bookings?email=${userEmail}`,
          {
            headers: { authorization: `Bearer ${user.accessToken}` },
          }
        );
        setBookings(bookingsRes.data.bookings);

        const statsRes = await axiosInstance.get(
          `/dashboard-stats?email=${userEmail}`,
          {
            headers: { authorization: `Bearer ${user.accessToken}` },
          }
        );
        setStats(statsRes.data.stats);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [userEmail, axiosInstance, user]);
  console.log(stats, vehicles);
  if (!stats || !vehicles || !user) return <Loading />;

  // Category Pie Chart
  const categoryData = stats?.categoryCounts
    ? Object.entries(stats.categoryCounts).map(([key, value]) => ({
        name: key,
        value,
      }))
    : [];

  // Price Distribution Bar Chart
  const priceData = stats?.priceDistribution || [];

  return (
    <div className="p-6 space-y-8 bg-base-100 min-h-screen">
      {/* ========== Summary Cards ========== */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-sky-300 text-white rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold">{stats.totalVehicles}</h2>
          <p>Total Vehicles Added</p>
        </div>
        <div className="bg-purple-300 text-white rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold">${stats.totalRevenue}</h2>
          <p>Estimated Revenue</p>
        </div>
      </div>

      {/* ========== Category Pie Chart ========== */}
      <div className="bg-base-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Vehicles by Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* ========== Price Distribution Bar Chart ========== */}
      <div className="bg-base-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Price Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={priceData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#A855F7" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
