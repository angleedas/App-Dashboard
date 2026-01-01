 import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import usersData from "../data/users";

function Users() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredUsers = usersData.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar open={menuOpen} toggleSidebar={() => setMenuOpen(!menuOpen)} />

      <div className="flex-1 md:ml-64">
        <Navbar toggleSidebar={() => setMenuOpen(!menuOpen)} />

        <div className="p-4 mt-16">
          <input
            className="border p-2 rounded mb-4 w-full max-w-md"
            placeholder="Search user..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[450px] bg-white rounded shadow text-sm">
              <thead className="bg-gray-100 font-semibold">
                <tr>
                  <th className="p-2">ID</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((u) => (
                  <tr key={u.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{u.id}</td>
                    <td className="p-2">{u.name}</td>
                    <td className="p-2">{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Users;
