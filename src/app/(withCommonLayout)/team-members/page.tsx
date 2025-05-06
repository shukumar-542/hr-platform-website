"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Table } from "antd";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import img from "@/assets/emp2.png";
import Image, { StaticImageData } from "next/image";
import { ColumnsType } from "antd/es/table";
interface DataType {
  key: string;
  teamMemberName: string;
  image: string | StaticImageData;
  jobTitle: string;
  department: string;
  employmentStatus: string;
}

const TeamMembersPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const data: DataType[] = [
    {
      key: "1",
      teamMemberName: "Annette Black",
      jobTitle: "Financial Analyst",
      department: "Sales",
      employmentStatus: "Full-Time",
      image: img,
    },
    {
      key: "2",
      teamMemberName: "Ronald Richards",
      jobTitle: "Marketing Manager",
      department: "Finance",
      employmentStatus: "Part-Time",
      image: img,
    },
    {
      key: "3",
      teamMemberName: "Eleanor Pena",
      jobTitle: "Software Engineer",
      department: "IT",
      employmentStatus: "Full-Time",
      image: img,
    },
    {
      key: "4",
      teamMemberName: "Ronald Richards",
      jobTitle: "Photographer",
      department: "Operation",
      employmentStatus: "Part-Time",
      image: img,
    },
    {
      key: "5",
      teamMemberName: "Dianne Russell",
      jobTitle: "Assistant Manager",
      department: "Sales",
      employmentStatus: "Full-Time",
      image: img,
    },
    {
      key: "6",
      teamMemberName: "Ronald Richards",
      jobTitle: "Graphic Designer",
      department: "Finance",
      employmentStatus: "Contractual",
      image: img,
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "ID No.",
      dataIndex: "key",
      render: (text: string) => `#${text}`,
    },
    {
      title: "Team Member Name",
      dataIndex: "teamMemberName",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <Image src={record.image} width={32} height={32} alt="avatar" />
          {text}
        </div>
      ),
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Employment Status",
      dataIndex: "employmentStatus",
    },
    {
      title: "Enroll To Training",
      dataIndex: "enrollToTraining",
      render: () => {
        return (
          <button className="bg-red-500 text-white p-2 rounded-sm cursor-pointer">
            <CiEdit size={20} />
          </button>
        );
      },
    },
    {
      title: "Details",
      dataIndex: "details",
      render: () => {
        return (
          <button className="bg-[#03346E] text-white p-2 rounded-sm cursor-pointer">
            <IoEyeOutline size={20} />
          </button>
        );
      },
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <div className="flex justify-between items-center mb-4">
        <BackButton title="Teams Members" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>

      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default TeamMembersPage;
