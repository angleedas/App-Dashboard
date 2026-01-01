 import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Navbar from "/src/components/Navbar";
import Sidebar from "/src/components/Sidebar";
import { useState } from "react";

// Sales data with 'name' and 'sales'
const salesData = [
  { name: "Jan", sales: 120 },
  { name: "Feb", sales: 180 },
  { name: "Mar", sales: 90 },
  { name: "Apr", sales: 220 },
  { name: "May", sales: 160 },
  { name: "Jun", sales: 200 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border shadow rounded">
        <p><strong>Month:</strong> {label}</p>
        <p><strong>Sales:</strong> {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar open={menuOpen} toggleSidebar={() => setMenuOpen(!menuOpen)} />

      <div className="flex-1 md:ml-64">
        <Navbar toggleSidebar={() => setMenuOpen(!menuOpen)} />

        <div className="p-4 mt-16">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          {/* Chart */}
          <div className="w-full min-h-[300px] bg-white p-4 rounded shadow mb-6 mt-20 sm:mt-4">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={salesData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#4F46E5"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow flex-1 min-w-[150px]">
              <h3 className="text-gray-600">Total Users</h3>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="bg-white p-4 rounded shadow flex-1 min-w-[150px]">
              <h3 className="text-gray-600">Total Sales</h3>
              <p className="text-2xl font-bold">$12,345</p>
            </div>
            <div className="bg-white p-4 rounded shadow flex-1 min-w-[150px]">
              <h3 className="text-gray-600">Revenue</h3>
              <p className="text-2xl font-bold">$8,765</p>
            </div>
            <div className="bg-white p-4 rounded shadow flex-1 min-w-[150px]">
              <h3 className="text-gray-600">Profit</h3>
              <p className="text-2xl font-bold">12%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
