"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Button } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import img from "../../../assets/emp1.png";
import img2 from "../../../assets/emp2.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useRouter } from "next/navigation";
interface Employee {
  key: string;
  employeeName: string;
  jobTitle: string;
  houseBusiness: string;
  department: string;
  employmentStatus: string;
  hireDate: string;
  imageUrl: string | StaticImageData;
}

const EmployeeManagementPage = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const data: Employee[] = [
    {
      key: "1",
      employeeName: "Annette Black",
      jobTitle: "Financial Analyst",
      houseBusiness: "Bullhead House 1",
      department: "Sales",
      employmentStatus: "Full-Time",
      hireDate: "1/28/17",
      imageUrl: img,
    },
    {
      key: "2",
      employeeName: "Ronald Richards",
      jobTitle: "Marketing Manager",
      houseBusiness: "Bullhead House 2",
      department: "Finance",
      employmentStatus: "Part-Time",
      hireDate: "6/21/19",
      imageUrl: img2,
    },
    // Add the rest of the data here...
  ];

  const columns: ColumnsType<Employee> = [
    {
      title: "Employee Name",
      dataIndex: "employeeName",
      key: "employeeName",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={record.imageUrl} width={32} height={32} alt="avatar" />
          {text}
        </div>
      ),
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "House/Business",
      dataIndex: "houseBusiness",
      key: "houseBusiness",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Employment Status",
      dataIndex: "employmentStatus",
      key: "employmentStatus",
    },
    {
      title: "Hire Date",
      dataIndex: "hireDate",
      key: "hireDate",
    },
    {
      title: "Details",
      key: "details",
      render: () => (
        <button
          onClick={() => router.push("/employee-management/employee-details")}
          className="bg-[#03346E] text-white p-1 rounded-sm cursor-pointer"
        >
          <MdOutlineRemoveRedEye size={20} />
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md h-[87vh]">
      <div className="md:flex justify-between items-center">
        <BackButton title="Employee" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>
      <button
        onClick={() => router.push("/employee-management/add-new-employee")}
        className="bg-[#03346E] text-white px-4 py-2 mt-2 rounded-sm cursor-pointer flex items-center  gap-2"
      >
        <AiOutlinePlus />
        New Employee
      </button>

      <div className=" overflow-x-auto mt-2">
        <Table columns={columns} dataSource={data} pagination={false} scroll={{x : "max-content"}} />
      </div>
    </div>
  );
};

export default EmployeeManagementPage;
