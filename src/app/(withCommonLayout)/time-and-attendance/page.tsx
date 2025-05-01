"use client"
import TimeAndAttendance from "@/components/TimeAndAttendance/TimeAndAttendance";
import React, { useState } from "react";
import emp1 from '../../../assets/emp1.png'
import emp2 from '../../../assets/emp2.png'
import emp3 from '../../../assets/emp3.png'
import { BackButton } from "@/components/BackButton/BackButton";
import SearchBar from "@/components/SearchBar/SearchBar";

const TimeAndAttendancePage = () => {
  const [searchValue, setSearchValue] = useState('');

  // Handle search functionality

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(e.target.value); // Do your filtering here
  };
  const data = [
    {
      key: "1",
      employee: "Annette Black",
      image: emp1,
      shift: "Morning",
      clockIn: "9:02 AM",
      clockOut: "4:04 PM",
      status: "Present",
    },
    {
      key: "2",
      employee: "Eleanor Pena",
      image: emp2,
      shift: "Evening",
      clockIn: "5:40 PM",
      clockOut: "9:05 PM",
      status: "Late",
    },
    {
      key: "3",
      employee: "Albert Flores",
      image: emp3,
      shift: "Morning",
      clockIn: "9:05 AM",
      clockOut: "4:01 PM",
      status: "Present",
    },
    {
      key: "4",
      employee: "Albert Flores",
      image: emp3,
      shift: "Morning",
      clockIn: "9:05 AM",
      clockOut: "4:01 PM",
      status: "Leave",
    },
  ];
  return (
    <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
          <BackButton title={"Time & Attendance"} />
          <SearchBar handleSearch={handleSearch} value={searchValue} />
        </div>
      <TimeAndAttendance data={data} />
    </div>
  );
};

export default TimeAndAttendancePage;
