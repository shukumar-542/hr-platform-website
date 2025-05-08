"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import { Select } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
const { Option } = Select;

// Define the type for the data
interface AttendanceData {
  date: string;
  clockIn: string;
  clockOut: string;
  breakTime: string;
  location: string;
  totalHours: string;
  overtime: string;
  status: string;
}

const AttendancePage = () => {
  const [month, setMonth] = useState("January, 2025");

  // Define the table columns
  const columns: ColumnsType<AttendanceData> = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Clock In",
      dataIndex: "clockIn",
      key: "clockIn",
    },
    {
      title: "Clock Out",
      dataIndex: "clockOut",
      key: "clockOut",
    },
    {
      title: "Break Time",
      dataIndex: "breakTime",
      key: "breakTime",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Total Hours",
      dataIndex: "totalHours",
      key: "totalHours",
    },
    {
      title: "Overtime",
      dataIndex: "overtime",
      key: "overtime",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        return (
          <p
            className={` text-center rounded-full px-2 py-1 ${
              status === "Present"
                ? "text-[#18C33D] bg-[#E7F8EB]"
                : status === "Late"
                ? "text-[#D9B800] bg-[#FBF7E5]"
                : status === "Leave" ? "bg-[#F3E7F8] text-[#9018C3]" : "text-[#D80027] bg-[#F8E7E7]"
            }`}
          >
            {status}
          </p>
        );
      },
    },
  ];

  // Sample data
  const data: AttendanceData[] = [
    {
      date: "01/02/25",
      clockIn: "9:00 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "Los Angeles, USA",
      totalHours: "8h 33m",
      overtime: "1 Hour",
      status: "Present",
    },
    {
      date: "02/02/25",
      clockIn: "9:00 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "San Diego, USA",
      totalHours: "8h 33m",
      overtime: "------",
      status: "Present",
    },
    {
      date: "03/02/25",
      clockIn: "10:12 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "Monterrey, MX",
      totalHours: "8h 33m",
      overtime: "1 Hour",
      status: "Late",
    },
    {
      date: "04/02/25",
      clockIn: "9:00 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "Guadalajara, MX",
      totalHours: "8h 33m",
      overtime: "------",
      status: "Present",
    },
    {
      date: "05/02/25",
      clockIn: "9:00 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "Guadalajara, MX",
      totalHours: "8h 33m",
      overtime: "1 Hour",
      status: "Late",
    },
    {
      date: "06/02/25",
      clockIn: "------",
      clockOut: "------",
      breakTime: "------",
      location: "------",
      totalHours: "------",
      overtime: "------",
      status: "Absent",
    },
    {
      date: "07/02/25",
      clockIn: "9:00 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "Los Angeles, USA",
      totalHours: "8h 33m",
      overtime: "------",
      status: "Leave",
    },
  ];

  const handleMonthChange = () => {};
  return (
    <div className="bg-white rounded-md p-4  min-h-[87vh]">
      <div className="flex  items-center justify-between">
        <BackButton title="Attendance" />
        <Select
          defaultValue={month}
          style={{ width: 200 }}
          onChange={handleMonthChange}
        >
          <Option value="January, 2025">January, 2025</Option>
          <Option value="February, 2025">February, 2025</Option>
          <Option value="March, 2025">March, 2025</Option>
          {/* Add more months as needed */}
        </Select>
      </div>
      <div className="mt-5">
        {" "}
        <Table
          columns={columns}
          dataSource={data}
          rowKey="date"
          pagination={false}
        />
      </div>
    </div>
  );
};

export default AttendancePage;
