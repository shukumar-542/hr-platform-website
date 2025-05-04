import React from "react";
import { Table, Tag, Space, Row, Col, Card } from "antd";

interface LeaveBalance {
  leaveType: string;
  totalLeave: string;
  taken: string;
  available: string;
}

interface LeaveRequest {
  requestDate: string;
  leaveType: string;
  duration: string;
  from: string;
  status: "Pending" | "Approved" | "Rejected";
}
const TimeOffDetails = () => {
  const leaveBalanceData: LeaveBalance[] = [
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

  const leaveRequestData: LeaveRequest[] = [
    {
      requestDate: "12/02/25",
      leaveType: "Sick Leave",
      duration: "2 Days",
      from: "12/02/2025-14/02/2025",
      status: "Pending",
    },
    {
      requestDate: "18/02/25",
      leaveType: "Casual Leave",
      duration: "4 Days",
      from: "12/02/2025-14/02/2025",
      status: "Approved",
    },
    {
      requestDate: "22/02/25",
      leaveType: "Unpaid Leave",
      duration: "1 Day",
      from: "12/02/2025-14/02/2025",
      status: "Pending",
    },
    {
      requestDate: "03/03/25",
      leaveType: "Sick Leave",
      duration: "2 Days",
      from: "12/02/2025-14/02/2025",
      status: "Rejected",
    },
    {
      requestDate: "12/03/25",
      leaveType: "Casual Leave",
      duration: "3 Days",
      from: "12/02/2025-14/02/2025",
      status: "Approved",
    },
  ];

  const leaveBalanceColumns = [
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

  const leaveRequestColumns = [
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "";
        if (status === "Pending") color = "yellow";
        else if (status === "Approved") color = "green";
        else color = "red";

        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];
  return (
    <div className="border border-[#E1E1E1] shadow-2xs rounded-md p-5 md:p-10 space-y-8 ">
      <h2 className="text-xl font-semibold"> Leave Balance Summary</h2>
      <Table
        dataSource={leaveBalanceData}
        columns={leaveBalanceColumns}
        pagination={false}
      />

      <h2 className="text-xl font-semibold my-10">Leave History & Requests</h2>
      <Table
        dataSource={leaveRequestData}
        columns={leaveRequestColumns}
        pagination={false}
      />
    </div>
  );
};

export default TimeOffDetails;
