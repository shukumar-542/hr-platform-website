"use client";
import React from "react";
import img from "@/assets/profileHome.png";
import Image from "next/image";
import manager from "@/assets/manager.png";
import { FcCalendar } from "react-icons/fc";
import Link from "next/link";

const EmployeeDashboard = () => {
  return (
    <div>
      <div className="bg-white flex items-center gap-3 p-2 rounded-sm">
        <Image
          src={img}
          height={200}
          width={200}
          className="h-10 w-10 rounded-full"
          alt="img"
        />
        <p className="text-xl font-semibold">Good Morning , Robert</p>
      </div>

      {/* Employee attendance and time summary section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 md:col-span-4 bg-white rounded-md p-4">
          <div className="flex justify-between items-center">
            <p>8 April, 2025, Tuesday.</p>
            <p>
              Clocked in: <span className="font-semibold"> 9:02 AM</span>
            </p>
          </div>
          <div className="relative"></div>
        </div>

        {/* Training and application summery */}
        <div className="col-span-12 md:col-span-4 space-y-4 ">
          <div className="bg-white p-4 rounded-md">
            <p className="text-xl font-semibold">Training Summery</p>
            <div className="flex justify-between py-5">
              <div className="flex flex-col justify-center items-center">
                <p className="bg-[#DAC800] text-center p-2 rounded-full h-10 w-10 text-white font-semibold">
                  12
                </p>
                <p className="font-semibold">Total Training</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="bg-[#0D9900] text-center p-2 rounded-full h-10 w-10 text-white font-semibold">
                  8
                </p>
                <p className="font-semibold">Completed</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="bg-[#D80027] text-center p-2 rounded-full h-10 w-10 text-white font-semibold">
                  4
                </p>
                <p className="font-semibold">Training Left</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md">
            <p className="text-xl font-semibold">Job Application Summery</p>
            <div className="flex justify-between py-5">
              <div className="flex flex-col justify-center items-center">
                <p className="bg-[#DAC800] text-center p-2 rounded-full h-10 w-10 text-white font-semibold">
                  24
                </p>
                <p className="font-semibold">Applied</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="bg-[#0D9900] text-center p-2 rounded-full h-10 w-10 text-white font-semibold">
                  7
                </p>
                <p className="font-semibold">Interviewed</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="bg-[#D80027] text-center p-2 rounded-full h-10 w-10 text-white font-semibold">
                  17
                </p>
                <p className="font-semibold">Rejected</p>
              </div>
            </div>
          </div>
        </div>
        {/* Managers and time off section */}
        <div className="col-span-12 md:col-span-4">
          <div className="bg-white p-4 rounded-md flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src={manager}
                className="h-10 w-10  "
                height={200}
                width={200}
                alt="img"
              />
              <p className="text-xl font-semibold">My Manager</p>
            </div>
            <div className="flex  items-center gap-2">
              <Image
                src={img}
                className="h-10 w-10 rounded-full "
                height={200}
                width={200}
                alt="img"
              />
              <p className="text-xl font-semibold">Annette Black</p>
            </div>
          </div>
          {/* Time off section */}
          <div className="bg-white rounded-md p-4 pb-16 mt-5">
            <div className="flex justify-between items-center   ">
              <div className="flex items-center gap-2">
                <FcCalendar />
                <p>My Time Off :</p>
              </div>
              <Link href={"/employee-time-off-request"}>
                <button className="cursor-pointer text-[#03346E] font-medium">
                  View & Apply
                </button>
              </Link>
            </div>
            <p className="mt-5">You have total 33 annual days left </p>
            <p className="font-medium mt-4">Leave Balance Summary</p>
            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="font-medium">Total Leave</p>
                <p className="text-sm mt-2">45 Days</p>
              </div>
              <div>
                <p className="font-medium">Taken</p>
                <p className="text-sm mt-2">12 days</p>
              </div>
              <div>
                <p className="font-medium">Available</p>
                <p className="text-sm mt-2">33 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
