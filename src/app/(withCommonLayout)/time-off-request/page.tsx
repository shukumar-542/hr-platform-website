"use client"
import React from "react";
import emp1 from "../../../assets/emp1.png";
import emp2 from "../../../assets/emp2.png";
import TimeOffRequest from "@/components/TimeOffRequest/TimeOffRequest";
import { BackButton } from "@/components/BackButton/BackButton";
const TimeOffRequestPage = () => {
  //   ========= Time off request table data ==== //
  const timeOffTableData = [
    {
      key: "#123",
      employee: "Annette Black",
      image: emp1,
      requestDate: "12/03/25",
      leaveType: "Sick Leave",
      duration: "2 Days",
      status: "Pending",
      from: "12/03/25-14/02/25",
    },
    {
      key: "#124",
      employee: "Ranaid Richoards",
      image: emp2,
      requestDate: "12/03/25",
      leaveType: "Sick Leave",
      duration: "2 Days",
      status: "Pending",
      from: "12/03/25-14/02/25",
    },
  ];
  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
        <BackButton title="Time-off Request" />
      <TimeOffRequest timeOffTableData={timeOffTableData} />
    </div>
  );
};

export default TimeOffRequestPage;
