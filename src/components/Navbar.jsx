 import { useState } from "react";
import NotificationDropdown from "./NotificationDropdown";
import { useAuth } from "../context/AuthContext";
import { FaBars, FaBell } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow flex items-center justify-between px-4 z-40 md:ml-64">
      
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded hover:bg-gray-200"
      >
        <FaBars size={22} />
      </button>

      {/* Title */}
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* Right Icons */}
      <div className="flex items-center gap-4 relative">

        {/* Notification Button */}
        <button
          onClick={() => setNotifOpen(!notifOpen)}
          className="relative p-2 hover:bg-gray-100 rounded"
        >
          <FaBell size={20} />
          <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </button>

        {notifOpen && (
          <NotificationDropdown />
        )}

        {/* Logout */}
        <button
          onClick={logout}
          className="text-red-500 font-bold border px-3 py-1 rounded hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
