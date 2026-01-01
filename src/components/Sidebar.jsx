 import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaUser, FaChartLine } from "react-icons/fa";

export default function Sidebar({ open, toggleSidebar }) {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/" },
    { name: "Users", icon: <FaUser />, path: "/users" },
    { name: "Analytics", icon: <FaChartLine />, path: "/analytics" },
  ];

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
      >
        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-gray-900 text-white transition-all duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <h1 className="text-2xl font-bold p-4 border-b border-gray-700">Dashboard</h1>

        <nav className="p-4 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex gap-2 items-center p-2 rounded
              hover:bg-gray-700 transition
              ${location.pathname === item.path ? "bg-gray-700" : ""}`}
              onClick={() => toggleSidebar(false)}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
