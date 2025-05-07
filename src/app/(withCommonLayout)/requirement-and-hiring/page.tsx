"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Table, Tag } from "antd";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { UserOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import img1 from "../../../assets/emp1.png";
import img2 from "../../../assets/emp2.png";
import Image, { StaticImageData } from "next/image";
import AddJobOpeningModal from "@/components/AddJobOpeningModal/AddJobOpeningModal";
import Link from "next/link";

interface Candidate {
  key: string;
  sl: string;
  position: string;
  candidates: number;
  createdOn: string;
  hiringLead: {
    name: string;
    avatar: string | StaticImageData;
  };
  status: "Open" | "Close";
}

const data: Candidate[] = [
  {
    key: "1",
    sl: "#1233",
    position: "Financial Analyst",
    candidates: 5,
    createdOn: "Jan 21, 2025",
    hiringLead: {
      name: "Annette Black",
      avatar: img1,
    },
    status: "Close",
  },
  {
    key: "2",
    sl: "#1233",
    position: "Marketing Manager",
    candidates: 4,
    createdOn: "Jan 3, 2025",
    hiringLead: {
      name: "Ronald Richards",
      avatar: img2,
    },
    status: "Open",
  },
  // Add rest of the data similarly...
];
const RequirementAndHiring = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setSearchValue(e.target.value);
  };

  const columns: ColumnsType<Candidate> = [
    {
      title: "SL No.",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "Position Name",
      dataIndex: "position",
      key: "position",
      render: (text) => (
        <Link href={"/requirement-and-hiring/:id"}>
          <span className="text-[#03346E] cursor-pointer">{text}</span>
        </Link>
      ),
    },
    {
      title: "Candidates",
      dataIndex: "candidates",
      key: "candidates",
      render: (count) => (
        <div className="flex items-center gap-1 text-[#03346E]">
          <UserOutlined />
          {count}
        </div>
      ),
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      key: "createdOn",
    },
    {
      title: "Hiring Lead",
      dataIndex: "hiringLead",
      key: "hiringLead",
      render: (lead) => (
        <div className="flex items-center gap-2">
          <Image
            src={lead.avatar}
            alt={lead.name}
            width={32}
            height={32}
            className="rounded-md"
          />
          <span>{lead.name}</span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <p
          className={` text-center inline-block px-4 py-1 rounded-full ${
            status === "Open"
              ? "bg-[#E7F8EB] text-[#18C33D]"
              : "bg-[#F8E7E7] text-[#D80027]"
          }`}
        >
          {status}
        </p>
      ),
    },
  ];
  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <div className="md:flex  items-center justify-between">
        <BackButton title="Job Opening" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-[#03346E] text-white px-4 py-2 mt-2 rounded-sm cursor-pointer flex items-center  gap-2"
      >
        <AiOutlinePlus />
        Add Job Opening
      </button>

      <div className="p-2 overflow-x-auto">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="mt-6"
          scroll={{x  :"max-content"}}
        />
      </div>

      <AddJobOpeningModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default RequirementAndHiring;
