import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
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
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";

const COLORS = ["#06B6D4", "#8B5CF6", "#F59E0B", "#EF4444", "#10B981", "#F97316"];

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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

  // Mock data for additional charts (you can replace with real data)
  const monthlyData = [
    { month: 'Jan', bookings: 12, revenue: 2400 },
    { month: 'Feb', bookings: 19, revenue: 3800 },
    { month: 'Mar', bookings: 15, revenue: 3000 },
    { month: 'Apr', bookings: 25, revenue: 5000 },
    { month: 'May', bookings: 22, revenue: 4400 },
    { month: 'Jun', bookings: 30, revenue: 6000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      {/* ========== Header Section ========== */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 jost">
              Welcome back, {user?.displayName || user?.email?.split('@')[0] || 'User'}! 👋
            </h1>
            <p className="text-gray-600 mt-2">Here's what's happening with your vehicle rental business</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Summary Cards ========== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-100 text-sm font-medium">Total Vehicles</p>
              <h3 className="text-3xl font-bold mt-1">{stats.totalVehicles}</h3>
              <p className="text-cyan-100 text-xs mt-1">+12% from last month</p>
            </div>
            <div className="bg-white/20 rounded-full p-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1.05l.5 2.5H3.5a.5.5 0 000 1h1.294l.458 2.292A1.5 1.5 0 006.75 14h6.5a1.5 1.5 0 001.498-1.208L15.206 10.5H16.5a.5.5 0 000-1h-1.05l.5-2.5H17a1 1 0 001-1V5a1 1 0 00-1-1H3z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Total Revenue</p>
              <h3 className="text-3xl font-bold mt-1">${stats.totalRevenue}</h3>
              <p className="text-purple-100 text-xs mt-1">+8% from last month</p>
            </div>
            <div className="bg-white/20 rounded-full p-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Active Bookings</p>
              <h3 className="text-3xl font-bold mt-1">{bookings?.length || 0}</h3>
              <p className="text-emerald-100 text-xs mt-1">+15% from last month</p>
            </div>
            <div className="bg-white/20 rounded-full p-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Avg. Rating</p>
              <h3 className="text-3xl font-bold mt-1">4.8</h3>
              <p className="text-orange-100 text-xs mt-1">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="bg-white/20 rounded-full p-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Charts Section ========== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Category Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Vehicle Categories</h2>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {categoryData.length} Categories
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={40}
                paddingAngle={5}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {categoryData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Price Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Price Distribution</h2>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
              Price Ranges
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={priceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              />
              <Bar 
                dataKey="count" 
                fill="url(#colorGradient)"
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="#A855F7" stopOpacity={0.6}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ========== Monthly Performance ========== */}
      <div className="bg-white rounded-2xl p-6 shadow-xl mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Monthly Performance</h2>
          <div className="flex space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Bookings</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Revenue</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="bookings"
              stroke="#06B6D4"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorBookings)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8B5CF6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* ========== Quick Actions ========== */}
      <div className="bg-white rounded-2xl p-6 shadow-xl">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => navigate('/dashboard/addVehicle')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-medium">Add Vehicle</span>
          </button>
          
          <button 
            onClick={() => navigate('/dashboard/myBookings')}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-sm font-medium">My Bookings</span>
          </button>
          
          <button 
            onClick={() => navigate('/dashboard/myVehicles')}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1.05l.5 2.5H3.5a.5.5 0 000 1h1.294l.458 2.292A1.5 1.5 0 006.75 14h6.5a1.5 1.5 0 001.498-1.208L15.206 10.5H16.5a.5.5 0 000-1h-1.05l.5-2.5H17a1 1 0 001-1V5a1 1 0 00-1-1H3z"/>
            </svg>
            <span className="text-sm font-medium">My Vehicles</span>
          </button>
          
          <button 
            onClick={() => navigate('/dashboard/profile')}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
