"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AttendanceForm({ params }) {
  const { classes: className } = React.use(params);

  // Set default dates
  const defaultStartDate = new Date("2025-01-01").toISOString().split("T")[0];
  const defaultEndDate = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const start = new Date(startDate).toISOString();
  const end = new Date(endDate).toISOString();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (start > end) {
      alert("Start Date cannot be after End Date.");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-6 text-center">
          Check Attendance for <span className="text-blue-600">{className}</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          {/* End Date */}
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div>
            <Link
              href={{
                pathname: `/../${className}`,
                query: { start, end },
              }}
            >
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
