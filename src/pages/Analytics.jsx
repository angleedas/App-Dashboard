import React from "react";

export default function Analytics() {
  return (
    <div className="p-4 sm:ml-64 mt-16">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Analytics Overview</h1>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="font-semibold mb-2">User Engagement</h3>
        <p className="text-gray-600">
          Here you can track user behavior, traffic insights and performance.
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="font-semibold mb-2">Sales Growth Report</h3>
        <p className="text-gray-600">
          Latest insights on revenue, conversions & business progress.
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Future Suggestions</h3>
        <p className="text-gray-600">
          Improve UI, boost engagement, and follow analytics-driven decisions.
        </p>
      </div>
    </div>
  );
}
