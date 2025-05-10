"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import Table, { ColumnsType } from "antd/es/table";
import React from "react";

// Define the type for the data
interface PayData {
  payPeriod: string;
  totalHours: number;
  grossPay: string;
  taxesAndDeductions: string;
  netPay: string;
  status: string;
}

const PayrollPage = () => {
  // Define the table columns
  const columns: ColumnsType<PayData> = [
    {
      title: "Pay Period",
      dataIndex: "payPeriod",
      key: "payPeriod",
    },
    {
      title: "Total Hours",
      dataIndex: "totalHours",
      key: "totalHours",
    },
    {
      title: "Gross Pay",
      dataIndex: "grossPay",
      key: "grossPay",
    },
    {
      title: "Taxes & Deductions",
      dataIndex: "taxesAndDeductions",
      key: "taxesAndDeductions",
    },
    {
      title: "Net Pay",
      dataIndex: "netPay",
      key: "netPay",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
       return <p className={` text-center rounded-full py-1 ${status === "Paid" ? "bg-[#E7F8EB] text-green-500" : "bg-[#FBF7E5] text-[#D9B800]"}`}>{status}</p>
      },
    },
  ];

  // Sample data
  const data: PayData[] = [
    {
      payPeriod: "01/02/2025 to 14/02/2025",
      totalHours: 82,
      grossPay: "$2,500",
      taxesAndDeductions: "$300",
      netPay: "$2,200",
      status: "Processing",
    },
    {
      payPeriod: "15/02/2025 to 28/02/2025",
      totalHours: 79,
      grossPay: "$2,500",
      taxesAndDeductions: "$300",
      netPay: "$2,200",
      status: "Paid",
    },
    {
      payPeriod: "12/02/2025 to 11/03/2025",
      totalHours: 81,
      grossPay: "$2,500",
      taxesAndDeductions: "$300",
      netPay: "$2,200",
      status: "Paid",
    },
    {
      payPeriod: "28/02/2025 to 11/03/2025",
      totalHours: 82,
      grossPay: "$2,500",
      taxesAndDeductions: "$300",
      netPay: "$2,200",
      status: "Paid",
    },
    {
      payPeriod: "24/02/2025 to 11/03/2025",
      totalHours: 84,
      grossPay: "$2,500",
      taxesAndDeductions: "$300",
      netPay: "$2,200",
      status: "Paid",
    },
    {
      payPeriod: "4/02/2025 to 11/03/2025",
      totalHours: 75,
      grossPay: "$2,500",
      taxesAndDeductions: "$300",
      netPay: "$2,200",
      status: "Paid",
    },
    {
      payPeriod: "2/02/2025 to 11/03/2025",
      totalHours: 80,
      grossPay: "$2,500",
      taxesAndDeductions: "$300",
      netPay: "$2,200",
      status: "Paid",
    },
  ];

  return (
    <div className="p-4 rounded-md min-h-[87vh] bg-white">
      <BackButton title="Payroll" />

      <div className="pt-5">
        <Table
          columns={columns}
          dataSource={data}
          rowKey="payPeriod"
          pagination={false}
        />
      </div>
    </div>
  );
};

export default PayrollPage;
