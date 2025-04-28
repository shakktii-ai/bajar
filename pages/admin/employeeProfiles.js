import React from 'react'
import Image from "next/image";
import { Edit } from "lucide-react";
function EmployeeProfiles() {
  return (
    <div className="flex-1 p-8 bg-[#6c57ec] bg-opacity-20 m-20 rounded-xl">
<div className="max-w-xs p-4 bg-white border border-gray-200 rounded-2xl shadow-md text-center relative">
      <div className="flex  items-center ">

        <Image
          src="/BOT.png" // Replace with actual profile image
          width={60}
          height={60}
          alt="Profile Picture"
          className="rounded-full border-2 border-white shadow"
        />
        <div className='ml-10'>
        <h1 className="text-lg text-start font-semibold">Rohit Sharma</h1>
        <h2 className="text-sm text-start text-gray-600 font-bold">HR Manager</h2>
        <div className="text-xs text-start text-gray-500">@rosharma</div>
        </div>
      </div>
        <hr class="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="mt-3 text-sm font-medium text-gray-600">Recruitment & Hiring Fundamentals (score)</div>
      <div className="mt-1 w-full h-2 bg-gray-200 rounded-full relative">
        <div className="h-2 bg-green-500 rounded-full" style={{ width: "85%" }}></div>
      </div>
      <div className="text-xs text-gray-500 text-right mt-1">85%</div>
      <div className="flex justify-between mt-4">
        <button className="w-1/2 mr-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">Detail Report</button>
        <button className="w-1/2 flex items-center gap-1 px-4 py-2 bg-[#c3baf7] text-white rounded-lg hover:bg-purple-600">
          <Edit size={16} /> Edit
        </button>
      </div>
    </div>

    </div>
  )
}

export default EmployeeProfiles