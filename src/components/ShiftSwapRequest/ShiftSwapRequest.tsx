"use client";

import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MdCheck } from "react-icons/md";

// Define type for each row of shift data
interface ShiftData {
  key: string;
  slNo: string;
  date: string;
  employee: string;
  image: {
    src: string;
  };
  currentShift: string;
  requestedSwap: string;
  status: string;
}

const ShiftSwapRequest = ({ shiftData }: { shiftData: ShiftData[] }) => {
  const columns: ColumnsType<ShiftData> = [
    {
      title: "SL No.",
      dataIndex: "slNo",
      key: "slNo",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
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
      title: "Current Shift",
      dataIndex: "currentShift",
      key: "currentShift",
    },
    {
      title: "Requested Swap",
      dataIndex: "requestedSwap",
      key: "requestedSwap",
    },
    {
      title: "Approved or Declined",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <div className="flex justify-center gap-2 ">
          <button className="bg-[#03346E] text-white p-2 rounded-md shadow-2xl">
            <MdCheck size={20} />
          </button>
          <button className="bg-red-600 text-white p-2 rounded-md shadow-2xl">
            <IoCloseOutline size={20} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={shiftData} pagination={false} />
    </div>
  );
};

export default ShiftSwapRequest;
