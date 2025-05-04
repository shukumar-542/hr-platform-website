import React from 'react'
import img from '@/assets/emp1.png'
import Image from 'next/image'
const RightSidebar = () => {
  return (
    <div className="border border-[#E1E1E1] shadow-xl rounded-md p-2 md:p-10 w-full space-y-10">
      <div className="">
        <p className="text-sm text-gray-500">Email</p>
        <p className="font-semibold">smithjons@gmail.com</p>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">Phone Number</p>
        <p className="font-semibold">3365778687979</p>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">Location</p>
        <p className="font-semibold">Elgin St. Celina, Delaware 10299</p>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">Hire Date</p>
        <p className="font-semibold">15 January, 2025</p>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">Employment Status</p>
        <p className="font-semibold">Full-Time</p>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">Manager</p>
        <div className="flex items-center gap-2">
          <Image src={img} alt="Manager" className="w-6 h-6 rounded-full" />
          <p className="font-semibold">Annette Black</p>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
