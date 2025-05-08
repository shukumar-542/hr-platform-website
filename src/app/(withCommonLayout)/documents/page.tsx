"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import { Space, Table } from "antd";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

interface DataType {
  documentName: string;
  expirationDate: string;
  dueDate: string;
  status: "Uploaded" | "Expiring Soon" | "Missing";
  action: string;
}

const DocumentPage = () => {
  const columns = [
    {
      title: "Document Name",
      dataIndex: "documentName",
      key: "documentName",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueData",
    },
    {
      title: "Expiration Date",
      dataIndex: "expirationDate",
      key: "expirationDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: "Uploaded" | "Expiring Soon" | "Missing") => {
        return (
          <p
            className={` text-center rounded-full max-w-36  py-2 ${
              status === "Uploaded"
                ? "text-[#18C33D] bg-[#E7F8EB]"
                : status === "Expiring Soon"
                ? "text-[#D9B800] bg-[#FBF7E5]"
                : "text-[#D80027] bg-[#F8E7E7]"
            }`}
          >
            {status}
          </p>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Space size="middle">
          <button className="bg-[#03346E] text-white p-1 rounded-sm cursor-pointer">
            <IoEyeOutline size={22} />
          </button>
          <button className="bg-red-500 text-white p-1 rounded-sm cursor-pointer">
            <CiEdit size={22} />
          </button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      documentName: "Driver's License & Insurance",
      expirationDate: "25/09/28",
      dueDate: "24/09/28",
      status: "Uploaded",
      action: "view/edit",
    },
    {
      documentName: "Fingerprint Clearance Card",
      expirationDate: "15/10/26",
      dueDate: "24/09/28",

      status: "Expiring Soon",
      action: "view/edit",
    },
    {
      documentName: "CPR Certificate",
      expirationDate: "02/12/25",
      dueDate: "24/09/28",

      status: "Missing",
      action: "view/edit",
    },
    {
      documentName: "I-9 Form",
      expirationDate: "N/A",
      status: "Uploaded",
      dueDate: "24/09/28",

      action: "view/edit",
    },
  ];
  return (
    <div className="p-4 bg-white rounded-md min-h-[87vh]">
      <BackButton title="Documents" />

      <div className="pt-5">
        <Table
          columns={columns}
          dataSource={data}
          rowKey="documentName"
          pagination={false}
        />
      </div>
    </div>
  );
};

export default DocumentPage;
