"use client";
import { useSearchParams } from "next/navigation";
import React, {useEffect, useState } from "react";

export default function ClassPage({ params }) {
  const { classes: className } = React.use(params);

  const searchParams = useSearchParams();
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  console.log(start,end);

  const [attendanceData, setAttendanceData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get?class=${className}&start=${start}&end=${end}`);
    const data = await res.json();
    console.log(data);
    setAttendanceData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
        {console.log(className)}
        Attendance for Class: {className}
      </h1>
      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full bg-white border border-blue-700 rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-2 sm:px-4 lg:px-6 text-left text-xs sm:text-sm lg:text-base font-medium uppercase tracking-wider border-b border-blue-700">
                PRN
              </th>
              <th className="py-3 px-2 sm:px-4 lg:px-6 text-left text-xs sm:text-sm lg:text-base font-medium uppercase tracking-wider border-b border-blue-700">
                Name
              </th>
              <th className="py-3 px-2 sm:px-4 lg:px-6 text-left text-xs sm:text-sm lg:text-base font-medium uppercase tracking-wider border-b border-blue-700">
                Date
              </th>
              <th className="py-3 px-2 sm:px-4 lg:px-6 text-left text-xs sm:text-sm lg:text-base font-medium uppercase tracking-wider border-b border-blue-700">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.length > 0 ? (
              attendanceData.map((stud) => {
                const fullDate = new Date(stud.date);
                const date = fullDate.toISOString().split('T')[0]; 
                const time = fullDate.toTimeString().split(' ')[0]; 

                return(
                <tr
                  key={stud._id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="py-3 px-2 sm:px-4 lg:px-6 border-b border-blue-700 text-xs sm:text-sm lg:text-base text-gray-700">
                    {stud.prn}
                  </td>
                  <td className="py-3 px-2 sm:px-4 lg:px-6 border-b border-blue-700 text-xs sm:text-sm lg:text-base text-gray-700">
                    {stud.name}
                  </td>
                  <td className="py-3 px-2 sm:px-4 lg:px-6 border-b border-blue-700 text-xs sm:text-sm lg:text-base text-gray-700">
                    {date}
                  </td>
                  <td className="py-3 px-2 sm:px-4 lg:px-6 border-b border-blue-700 text-xs sm:text-sm lg:text-base text-gray-700">
                    {time}
                  </td>
                </tr>
              )})
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-6 px-4 text-center text-gray-600 border-b border-blue-700 text-xs sm:text-sm lg:text-base"
                >
                  No students found for this class.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
