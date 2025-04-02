"use client"
import React from "react";
import { Table, Avatar, Badge, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import img from '../../assets/emp1.png'
import img2 from '../../assets/emp2.png'
import img3 from '../../assets/emp3.png'
import Image, { StaticImageData } from "next/image";

interface EmployeeData {
    key: string;
    employee: string;
    image: StaticImageData;
    shift: string;
    clockIn: string;
    clockOut: string;
    status: string;
  }
const TimeAndAttendance = () => {


    const columns: ColumnsType<EmployeeData> = [
        {
          title: "Employee",
          dataIndex: "employee",
          key: "employee",
          render: (_, record) => (
            <div className="flex items-center gap-2">
              <img src={record.image.src} className="h-12 w-12 rounded-md" alt={record.employee} />
              <span>{record.employee}</span>
            </div>
          ),
        },
        {
          title: "Shift",
          dataIndex: "shift",
          key: "shift",
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
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: (status: string) => (
            <Badge status={status === "Present" ? "success" : "warning"} text={status} />
          ),
        },
        {
          title: "Details",
          key: "details",
          render: () => (
            <button className="bg-[#03346E] text-white px-2 py-1 rounded-md shadow-md cursor-pointer text-xl "><EyeOutlined size={25} /></button>
          ),
        },
      ];
      
    const data = [
        {
          key: "1",
          employee: "Annette Black",
          image: img,
          shift: "Morning",
          clockIn: "9:02 AM",
          clockOut: "4:04 PM",
          status: "Present",
        },
        {
          key: "2",
          employee: "Eleanor Pena",
          image: img2,
          shift: "Evening",
          clockIn: "5:40 PM",
          clockOut: "9:05 PM",
          status: "Late",
        },
        {
          key: "3",
          employee: "Albert Flores",
          image: img3,
          shift: "Morning",
          clockIn: "9:05 AM",
          clockOut: "4:01 PM",
          status: "Present",
        },
      ];


  return (
    <div className="bg-white shadow-2xl rounded-md p-2">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Time & Attendance</p>
        <p className="text-[#03346E] font-semibold cursor-pointer">View All</p>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default TimeAndAttendance;
