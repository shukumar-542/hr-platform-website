"use client";
import React from "react";
import img from "@/assets/profileHome.png";
import Image from "next/image";
import manager from "@/assets/manager.png";
import { FcCalendar } from "react-icons/fc";
import Link from "next/link";
import clock from "@/assets/clock.png";

const EmployeeDashboard = () => {
  const progress = 38.12;

  const timeSlots = ["7A", "8A", "9A", "10A", "11A", "12P", "1P", "2P"];

  const schedule = [
    {
      date: "Task",
      tasks: [
        {
          start: "15:00",
          end: "23:00",
          role: "Care Staff",
          location: "Farm House 2",
          color: "#E2FFE7",
        },
      ],
    },
  ];

  // Get index of start time based on 7AM being index 0
  const getColumnIndex = (hourStr: string) => {
    const hour = parseInt(hourStr.split(":")[0], 10);
    return hour < 7 ? hour + 8 - 7 : hour - 7;
  };

  // Get span of task, including overnight handling
  const getSpan = (start: string, end: string) => {
    const startIdx = getColumnIndex(start);
    const endIdx = getColumnIndex(end);
    return endIdx > startIdx ? endIdx - startIdx : 8 - startIdx + endIdx;
  };

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
        <div className="col-span-12 md:col-span-4 bg-white rounded-md p-6">
          <div className="flex justify-between items-center">
            <p>8 April, 2025, Tuesday.</p>
            <p>
              Clocked in: <span className="font-semibold"> 9:02 AM</span>
            </p>
          </div>
          {/* Clock  */}
          <div className="flex items-center justify-between h-full">
            <button className="bg-[#0A7900] rounded-sm text-white px-2 py-1 cursor-pointer">
              Clock In
            </button>
            <div className="flex flex-col justify-center items-center">
              <div
                className="relative h-52 w-52 rounded-full"
                style={{
                  background: `conic-gradient(#EC7C25 ${progress}%, #03346E ${progress}% 100%)`,
                }}
              >
                <div className="absolute top-[12.5%] left-[12.5%] h-[75%] w-[75%] bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={clock}
                    alt="clock"
                    className="w-32 h-32 object-contain"
                  />
                  <p className="absolute text-[#03346E] font-bold text-sm">
                    4 H 35 Min
                  </p>
                </div>
              </div>
              <div>
                <button className="mt-5 bg-[#A1A1A1] rounded-sm px-4 py-2 cursor-pointer">
                  Break Time
                </button>
              </div>
            </div>
            <button className="bg-red-600 rounded-sm text-white px-2 py-1 cursor-pointer">
              Clock Out
            </button>
          </div>
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
          <div className="bg-white p-12 rounded-md">
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
          <div className="bg-white rounded-md p-4 pb-32 mt-5">
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

      {/* Today's Tasks */}
      <div className="mt-5 bg-white p-4 rounded-md">
        <div className="flex  justify-between items-center">
          <p className="font-medium">Today's Tasks</p>
          <Link href={"/schedule"}>
            <p className="text-[#03346E] font-medium">All Tasks</p>
          </Link>
        </div>
        <div className="grid grid-cols-[100px_repeat(8,minmax(40px,1fr))] border border-[#EBEBEB] text-sm w-full mt-5">
          <div className="border-[#EBEBEB] border p-2 font-medium">
            <p className="text-center">Date</p>
            <p className="text-center text-xs">25 Feb 2025</p>
          </div>
          {timeSlots.map((slot, idx) => (
            <div
              key={idx}
              className="border-[#EBEBEB] border p-2 flex justify-center items-center"
            >
              {slot}
            </div>
          ))}
         
        </div>
        <div className="flex">
              <p className="p-8 border border-[#EBEBEB]">Tasks</p>
            <div className="bg-[#E2FBFF] w-full flex items-center justify-between px-10  border border-[#EBEBEB]">
              <div>
                <p>Direct Care Staff</p>
                <p>7 : 00 AM - 3 PM</p>
              </div>
              <div >
                <p className="text-center">Shift Task</p>
                <p>Project Update Meeting</p>
              </div>
              <div>
                <p>Shift Notes</p>
                <p className="text-center">------</p>
              </div>
              <p>Location: Farm House 2</p>
            </div>
          
          </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
