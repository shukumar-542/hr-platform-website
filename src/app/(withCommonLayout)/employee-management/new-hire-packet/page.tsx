"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import { DatePicker, Form, Input, Modal, Space, Table } from "antd";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Task {
  key: string;
  slNo: string;
  taskName: string;
  dueDate: string;
}

const HirePacketPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const data: Task[] = [
    {
      key: "1",
      slNo: "#1233",
      taskName: "Upload Birth Certificate",
      dueDate: "1/28/17",
    },
    {
      key: "2",
      slNo: "#1233",
      taskName: "Upload CPR Certificate",
      dueDate: "6/21/19",
    },
    {
      key: "3",
      slNo: "#1233",
      taskName: "Upload Driver's License",
      dueDate: "9/4/12",
    },
    {
      key: "4",
      slNo: "#1233",
      taskName: "Upload Fingerprint Clearance Card",
      dueDate: "8/16/13",
    },
    {
      key: "5",
      slNo: "#1233",
      taskName: "Upload Social Security Card",
      dueDate: "5/7/16",
    },
    { key: "6", slNo: "#1233", taskName: "Upload NOC", dueDate: "4/21/12" },
    {
      key: "7",
      slNo: "#1233",
      taskName: "Upload Experience Certificate",
      dueDate: "4/4/18",
    },
    {
      key: "8",
      slNo: "#1233",
      taskName: "Upload Medical Certificate",
      dueDate: "5/27/15",
    },
    {
      key: "9",
      slNo: "#1233",
      taskName: "Upload CR Certificate",
      dueDate: "11/7/16",
    },
    {
      key: "10",
      slNo: "#1233",
      taskName: "Upload HP Certificate",
      dueDate: "5/27/15",
    },
  ];

  const columns = [
    {
      title: "SL No.",
      dataIndex: "slNo",
      key: "slNo",
    },
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <button className="bg-[#03346E] text-white p-1 rounded-sm">
            <CiEdit size={22} />
          </button>
          <button className="bg-red-500 text-white p-1 rounded-sm">
            <RiDeleteBin6Line size={22} />
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center pb-5">
        <BackButton title="Employee" />
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center cursor-pointer gap-2 bg-[#03346E] text-white px-4 py-2 rounded-sm"
        >
          <FaPlus />
          Add New
        </button>
      </div>
      <Table dataSource={data} columns={columns} pagination={false} />

      <Modal
        centered
        onCancel={() => setOpenModal(false)}
        open={openModal}
        footer={false}
      >
        <h1 className="text-xl font-semibold text-center">Add New Task</h1>
        <Form layout="vertical">
          <Form.Item label="Task Name">
            <Input placeholder="Enter task name" />
          </Form.Item>
          <Form.Item label="Due Date" className="w-full">
            <DatePicker className="w-full" />
          </Form.Item>
          <div className="flex  justify-between gap-2">
            <button className="bg-[#03346E] text-white px-8 w-full py-2 rounded-sm cursor-pointer">
              Save
            </button>
            <button
              type="button"
              className="border w-full cursor-pointer border-[#EAE9F0] px-5 text-[#03346E] rounded-sm"
            >
              Cancel
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default HirePacketPage;
