"use client"
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { StaticImageData } from "next/image";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { MdCheck } from "react-icons/md";

interface TimeOffData {
  key: string;
  employee: string;
  image: {
    src: string;
  };
  requestDate: string;
  leaveType: string;
  duration: string;
  status: string;
  from: string;
}

const TimeOffRequest = ({
  timeOffTableData,
}: {
  timeOffTableData: TimeOffData[];
}) => {
  const columns: ColumnsType<TimeOffData> = [
    {
      title: "SL No",
      dataIndex: "key",
      key: "key",
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
        title: "Request Date",
        dataIndex: "requestDate",
        key: "requestDate",
      },
    {
        title: "Leave Type",
        dataIndex: "leaveType",
        key: "leaveType",
      },
    {
        title: "Duration",
        dataIndex: "duration",
        key: "duration",
      },
    {
        title: "From",
        dataIndex: "from",
        key: "from",
      },
      {
        title : 'Status',
        dataIndex : "status",
        key : 'status',
        render  : (_ , record)=>{
            return(
                <p className="bg-[#D9B8001A] text-[#D9B800] py-1  text-center rounded-2xl">{record?.status}</p>
            )
        }
      },
      {
        title : 'Approved or Declined',
        dataIndex : 'approvedOrDeclined',
        key : "approvedOrDeclined",
        render : (_, record)=>{
            return(
                <div className="flex gap-2 ">
                    <button className="bg-[#03346E] text-white p-2 rounded-md shadow-2xl"><MdCheck size={20} /></button>
                    <button className="bg-red-600 text-white p-2 rounded-md shadow-2xl"><IoCloseOutline size={20} /></button>
                </div>
            )
        }
      },
      {
        title : 'Details',
        dataIndex : 'details',
        key : "details",
        render : (_, record)=>{
            return(
                <div className="flex gap-2">
                    <button className="bg-[#03346E] text-white p-2 rounded-md shadow-2xl"><LuEye size={20} /></button>
                </div>
            )
        }
      }
  ];

  return (
    <div className="p-4 overflow-x-auto">
      <Table dataSource={timeOffTableData} columns={columns} pagination={false} scroll={{ x : "max-content"}} />
    </div>
  );
};

export default TimeOffRequest;
