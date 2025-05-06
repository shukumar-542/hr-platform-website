"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

// Define the data type for the table
interface EmployeeData {
    key: string;
    slNo: string;
    employeeName: string;
    jobTitle: string;
    tanningRequired: string;
    completed: string;
    details: string;
  }

const CertificationPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };


  const router = useRouter();

  const handleDetailsClick = (id :  string) => {
    router.push(`/certifications/${id}`);
  };
    // Data for the table
    const data: EmployeeData[] = [
        { key: '1', slNo: '#1233', employeeName: 'Annette Black', jobTitle: 'Financial Analyst', tanningRequired: '04', completed: '02', details: 'View' },
        { key: '2', slNo: '#1233', employeeName: 'Ronald Richards', jobTitle: 'Marketing Manager', tanningRequired: '01', completed: '00', details: 'View' },
        { key: '3', slNo: '#1233', employeeName: 'Eleanor Pena', jobTitle: 'Software Engineer', tanningRequired: '03', completed: '01', details: 'View' },
        { key: '4', slNo: '#1233', employeeName: 'Ronald Richards', jobTitle: 'Photographer', tanningRequired: '02', completed: '02', details: 'View' },
        { key: '5', slNo: '#1233', employeeName: 'Dianne Russell', jobTitle: 'Assistant Manager', tanningRequired: '05', completed: '03', details: 'View' },
        { key: '6', slNo: '#1233', employeeName: 'Ronald Richards', jobTitle: 'Graphic Designer', tanningRequired: '01', completed: '01', details: 'View' },
        { key: '7', slNo: '#1233', employeeName: 'Albert Flores', jobTitle: 'Civil Engineer', tanningRequired: '04', completed: '03', details: 'View' },
        { key: '8', slNo: '#1233', employeeName: 'Ronald Richards', jobTitle: 'Driver', tanningRequired: '01', completed: '01', details: 'View' },
        { key: '9', slNo: '#1233', employeeName: 'Jerome Bell', jobTitle: 'IT Executive', tanningRequired: '02', completed: '02', details: 'View' },
        { key: '10', slNo: '#1233', employeeName: 'Ronald Richards', jobTitle: 'Videographer', tanningRequired: '04', completed: '01', details: 'View' },
      ];

        // Define columns for the table
  const columns = [
    { title: 'SL No.', dataIndex: 'slNo', key: 'slNo' },
    { title: 'Employee Name', dataIndex: 'employeeName', key: 'employeeName' },
    { title: 'Job Title', dataIndex: 'jobTitle', key: 'jobTitle' },
    { title: 'Tanning Required', dataIndex: 'tanningRequired', key: 'tanningRequired' },
    { title: 'Completed', dataIndex: 'completed', key: 'completed' },
    {
      title: 'Details',
      key: 'details',
      render: (_: any, record: EmployeeData) => (
        <button  onClick={() => handleDetailsClick(record?.key)} className="bg-[#03346E] text-white p-1 rounded-sm cursor-pointer"><IoEyeOutline size={20} /></button>
      ),
    },
  ];


  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <div className="flex justify-between items-center mb-4">
        <BackButton title="Training Management" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />

    </div>
  );
};

export default CertificationPage;
