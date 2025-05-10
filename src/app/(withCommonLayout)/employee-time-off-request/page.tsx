"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import { Button, DatePicker, Form, Input, Modal, Select, Table, Tag } from "antd";
import React, { useState } from "react";
const { Option } = Select;
interface Leave {
  leaveType: string;
  totalLeave: string;
  taken: string;
  available: string;
}

interface LeaveRequest {
  requestDate: string;
  leaveType: string;
  from: string;
  duration: string;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
}

const EmployeeTimeOffPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();
  const data: Leave[] = [
    {
      leaveType: "Casual Leave",
      totalLeave: "12 Days",
      taken: "2 Days",
      available: "10 Days",
    },
    {
      leaveType: "Sick Leave",
      totalLeave: "10 Days",
      taken: "4 Days",
      available: "6 Days",
    },
    {
      leaveType: "Unpaid Leave",
      totalLeave: "60 Days",
      taken: "15 Days",
      available: "45 Days",
    },
  ];

  const columns = [
    {
      title: "Leave Type",
      dataIndex: "leaveType",
      key: "leaveType",
    },
    {
      title: "Total Leave",
      dataIndex: "totalLeave",
      key: "totalLeave",
    },
    {
      title: "Taken",
      dataIndex: "taken",
      key: "taken",
    },
    {
      title: "Available",
      dataIndex: "available",
      key: "available",
    },
  ];

  //   Leave request Data

  const LeaveRequestData: LeaveRequest[] = [
    {
      requestDate: "12/02/25",
      leaveType: "Sick Leave",
      from: "12/02/2025-14/02/2025",
      duration: "2 Days",
      reason: "Sick",
      status: "Pending",
    },
    {
      requestDate: "18/02/25",
      leaveType: "Casual Leave",
      from: "13/02/2025-15/02/2025",
      duration: "4 Days",
      reason: "Exam",
      status: "Approved",
    },
    {
      requestDate: "22/02/25",
      leaveType: "Unpaid Leave",
      from: "16/02/2025-17/02/2025",
      duration: "1 Day",
      reason: "Sick",
      status: "Approved",
    },
    {
      requestDate: "03/03/25",
      leaveType: "Sick Leave",
      from: "18/02/2025-19/02/2025",
      duration: "2 Days",
      reason: "Exam",
      status: "Rejected",
    },
    {
      requestDate: "12/03/25",
      leaveType: "Casual Leave",
      from: "20/02/2025-21/02/2025",
      duration: "3 Days",
      reason: "Sick",
      status: "Approved",
    },
  ];

  const LeaveRequestColumns = [
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
      title: "From",
      dataIndex: "from",
      key: "from",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Status",
      key: "status",
      render: (_: any, record: LeaveRequest) => {
        return (
          <p
            className={`text-center rounded-full max-w-36 py-2 ${
              record?.status === "Approved"
                ? "text-[#18C33D] bg-[#E7F8EB]"
                : record?.status === "Pending"
                ? "text-[#D9B800] bg-[#FBF7E5]"
                : "text-[#D80027] bg-[#F8E7E7]"
            }`}
          >
            {record?.status}
          </p>
        );
      },
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <div className="flex justify-between items-center">
        <BackButton title="Time off Request" />
        <button
          onClick={() => setOpenModal(true)}
          className="bg-[#03346E] px-4 py-2 rounded-sm text-white"
        >
          Apply
        </button>
      </div>
      <div className="border border-[#E1E1E1] rounded-md  p-5 mt-5">
        <p className="text-xl font-medium">Leave Balance</p>
        <Table
          dataSource={data}
          columns={columns}
          rowKey="leaveType"
          pagination={false}
        />
      </div>
      <div className="border border-[#E1E1E1] rounded-md  p-5 mt-5">
        <p className="text-xl font-medium">Leave History & Requests</p>
        <Table
          dataSource={LeaveRequestData}
          columns={LeaveRequestColumns}
          rowKey="leaveType"
          pagination={false}
        />
      </div>

      <Modal
        centered
        footer={false}
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <Form
          form={form}
          layout="vertical"
        //   onFinish={onFinish}
        >
          <Form.Item
            label="Leave Type"
            name="leaveType"
            rules={[{ required: true, message: "Please select a leave type!" }]}
          >
            <Select placeholder="Select Leave Type">
              <Option value="Sick Leave">Sick Leave</Option>
              <Option value="Casual Leave">Casual Leave</Option>
              <Option value="Unpaid Leave">Unpaid Leave</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="From"
            name="from"
            rules={[
              { required: true, message: "Please select the start date!" },
            ]}
          >
            <DatePicker
              format="MM/DD/YYYY"
              style={{ width: "100%" }}
            //   defaultValue={moment()}
            />
          </Form.Item>

          <Form.Item
            label="To"
            name="to"
            rules={[{ required: true, message: "Please select the end date!" }]}
          >
            <DatePicker
              format="MM/DD/YYYY"
              style={{ width: "100%" }}
            //   defaultValue={moment()}
            />
          </Form.Item>

          <Form.Item
            label="Reason"
            name="reason"
            rules={[{ required: true, message: "Please provide a reason!" }]}
          >
            <Input placeholder="Enter the reason" />
          </Form.Item>

          <div
            className="form-actions"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button htmlType="button" onClick={() => form.resetFields()}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Apply
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default EmployeeTimeOffPage;
