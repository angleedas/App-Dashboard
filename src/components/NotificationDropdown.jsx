 function NotificationDropdown() {
  return (
    <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-4 w-60 text-sm 
      border border-gray-200 max-h-60 overflow-y-auto">
      <p className="font-semibold border-b pb-2 mb-2">🔔 Notifications</p>
      <p className="hover:bg-gray-100 p-1 rounded">New user signed up!</p>
      <p className="hover:bg-gray-100 p-1 rounded">Server running fine 👍</p>
      <p className="hover:bg-gray-100 p-1 rounded">Backup completed!</p>
    </div>
  );
}

export default NotificationDropdown;
