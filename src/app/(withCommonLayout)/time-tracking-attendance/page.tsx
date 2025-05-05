import { BackButton } from "@/components/BackButton/BackButton";
import TimeSheet from "@/components/TimeSheet/TimeSheet";
import React from "react";

const TimeTrackingPage = () => {
  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <div className="pb-5">
        <BackButton title="Time Tracking & Attendance" />
      </div>
      <TimeSheet />
    </div>
  );
};

export default TimeTrackingPage;
