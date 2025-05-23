"use client";
import React from "react";
import { Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import img from "../../assets/emp1.png";
import img2 from "../../assets/emp2.png";
import img3 from "../../assets/emp3.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface EmployeeData {
  key: string;
  employee: string;
  image: StaticImageData;
  shift: string;
  clockIn: string;
  clockOut: string;
  status: string;
}
const TimeAndAttendance = ({ data }: { data: EmployeeData[] }) => {
  const columns: ColumnsType<EmployeeData> = [
    {
      title: "Employee",
      dataIndex: "employee",
      key: "employee",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <img
            src={record.image.src}
            className="h-12 w-12 rounded-md"
            alt={record.employee}
          />
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
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium inline-block w-20 text-center  ${
            status === "Present"
              ? "bg-[#E7F8EB] text-[#18C33D]"
              : status === "Late"
              ? "bg-[#FBF7E5] text-[#D9B800]"
              : "bg-[#F3E7F8] text-[#9018C3]"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Details",
      key: "details",
      render: () => (
        <Link href={"/time-tracking-attendance"}>
          <button className="bg-[#03346E] text-white px-2 py-1 rounded-md shadow-md cursor-pointer text-xl ">
            <EyeOutlined size={25} />
          </button>
        </Link>
      ),
    },
  ];

  return (
    <div className="p-2 overflow-x-auto">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default TimeAndAttendance;
