"use client";
import React, { useEffect, useRef, useState } from "react";
import img from "@/assets/profileHome.png";
import Image from "next/image";
import clock from "@/assets/clock.png";
import { Button, Space } from "antd";

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
          <div className="relative">
           
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 " >
          <div className="bg-white p-4 rounded-md">
            <p className="text-xl font-semibold">Training Summery</p>
            <div className="flex justify-between py-5">
              <div className="flex flex-col justify-center items-center">
                <p className="bg-[#DAC800] text-center p-2 rounded-full h-10 w-10 text-white font-semibold">12</p>
                <p className="font-semibold">Total Training</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="bg-[#0D9900] text-center p-2 rounded-full h-10 w-10 text-white font-semibold">8</p>
                <p className="font-semibold">Completed</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="bg-[#D80027] text-center p-2 rounded-full h-10 w-10 text-white font-semibold">4</p>
                <p className="font-semibold">Training Left</p>
              </div>
              
            </div>
          </div>
          <div>
            <p>Job Application Summery</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4"></div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
