"use client";
import React from "react";
import { Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import img1 from "../../assets/emp1.png";
import img2 from "../../assets/emp2.png";
import img3 from "../../assets/emp3.png";

interface CertificationData {
  key: string;
  employee: string;
  image: any;
  certification: string;
  expiryDate: string;
  status: string;
}

const ExpiringCertifications = () => {
  const columns = [
    {
      title: "Employee",
      dataIndex: "employee",
      key: "employee",
      render: (_: any, record: CertificationData) => (
        <div className="flex items-center gap-2">
          <img src={record.image.src} className="h-12 w-12" alt="img" />
          <span>{record.employee}</span>
        </div>
      ),
    },
    {
      title: "Certification",
      dataIndex: "certification",
      key: "certification",
    },
    {
      title: "Expiry Date",
      dataIndex: "expiryDate",
      key: "expiryDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md font-medium">
          {status}
        </span>
      ),
    },
    {
      title: "Details",
      key: "details",
      render: () => (
        <button className="bg-[#03346E] text-white px-2 py-1 rounded-md shadow-md cursor-pointer text-xl">
          <EyeOutlined />
        </button>
      ),
    },
  ];

  const data: CertificationData[] = [
    {
      key: "1",
      employee: "Annette Black",
      image: img1,
      certification: "CPR & First Aid",
      expiryDate: "12/03/25",
      status: "Expiring Soon",
    },
    {
      key: "2",
      employee: "Eleanor Pena",
      image: img2,
      certification: "HIPAA Training",
      expiryDate: "12/03/25",
      status: "Expiring Soon",
    },
    {
      key: "3",
      employee: "Albert Flores",
      image: img3,
      certification: "CPR & First Aid",
      expiryDate: "12/03/25",
      status: "Expiring Soon",
    },
  ];
  return (
    <div className="bg-white shadow-2xl p-3 rounded-md ">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Expiring Certifications</p>
        <p className="text-[#03346E] font-semibold cursor-pointer">View All</p>
      </div>
      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default ExpiringCertifications;
