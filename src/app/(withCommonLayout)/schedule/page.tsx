"use client"
import { BackButton } from "@/components/BackButton/BackButton";
import ScheduleTable from "@/components/ScheduleTable/ScheduleTable";
import React, { useState } from "react";

interface Shift {
    id: string;
    employeeName: string;
    time: [string, string];
    color: string;
    position: string;
    jobSite: string;
    task: string;
    notes?: string;
  }

const SchedulePage = () => {
   
  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <div className="flex justify-between">
        <BackButton title="Schedule" />
        <button className="bg-[#03346E] text-white px-3 py-2 rounded-sm">Publish</button>
      </div>

      <ScheduleTable />


    </div>
  );
};

export default SchedulePage;
