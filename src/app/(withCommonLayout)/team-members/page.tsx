"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Modal, Table } from "antd";
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
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
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
          <button onClick={()=> setOpenEditModal(true)} className="bg-red-500 text-white p-2 rounded-sm cursor-pointer">
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
          <button
            onClick={() => setOpenDetailsModal(true)}
            className="bg-[#03346E] text-white p-2 rounded-sm cursor-pointer"
          >
            <IoEyeOutline size={20} />
          </button>
        );
      },
    },
  ];

  // Edit modal data
  const [selectedTrainings, setSelectedTrainings] = useState<string[]>([
    "Compliance & Ethics Training",
    "Leadership & Team Management",
    "Time Management & Productivity",
    "HR & Payroll Compliance Training",
    "Diversity, Equity, & Inclusion (DEI) Training",
    "Cybersecurity Awareness Training",
    "Conflict Resolution & Workplace Mediation",
    "Payroll Compliance Training",
  ]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>,
    training: string) => {
    if (event.target.checked) {
      setSelectedTrainings([...selectedTrainings, training]);
    } else {
      setSelectedTrainings(
        selectedTrainings.filter((item) => item !== training)
      );
    }
  };

  const availableTrainings = [
    'Workplace Safety & Emergency Procedures',
    'Compliance & Ethics Training',
    'Leadership & Team Management',
    'Time Management & Productivity',
    'HR & Payroll Compliance Training',
    'Customer Service & Communication Skills',
    'Diversity, Equity, & Inclusion (DEI) Training',
    'Cybersecurity Awareness Training',
    'Conflict Resolution & Workplace Mediation',
    'Software & Technology Training',
    'Payroll Compliance Training',
    'Annual Safety Training',
  ];

  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <div className="flex justify-between items-center mb-4">
        <BackButton title="Teams Members" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div> 

      <Table columns={columns} dataSource={data} pagination={false} />

      {/* Team Member details modal */}
      <Modal
        open={openDetailsModal}
        onCancel={() => setOpenDetailsModal(false)}
        centered
        footer={false}
      >
        <h1 className="text-center text-xl font-semibold">Details</h1>
        <div className="p-6 font-sans">
          <div className="mb-4 flex justify-between items-center">
            <strong className="font-medium">Team Member Name:</strong>
            <div>Annette Black</div>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <strong className="font-medium">Job Title:</strong>
            <div>Financial Analyst</div>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <strong className="font-medium">Department:</strong>
            <div>Finance</div>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <strong className="font-medium">Employment Status:</strong>
            <div>Full-Time</div>
          </div>

          <div className="mb-4">
            <strong className="font-medium">Enrolled Training:</strong>
            <ul className="list-disc pl-5">
              <li>Compliance & Ethics Training</li>
              <li>Workplace Safety & Emergency Procedures</li>
              <li>Leadership & Team Management</li>
              <li>HR & Payroll Compliance Training</li>
              <li>Conflict Resolution & Workplace Mediation</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* Enroll training edit modal */}
      <Modal
        open={openEditModal}
        onCancel={() => setOpenEditModal(false)}
        centered
        footer={false}
      >
          <div className="p-6 font-sans max-w-xl mx-auto">
      <div className="space-y-4">
        {availableTrainings.map((training) => (
          <div key={training} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedTrainings.includes(training)}
              onChange={(e) => handleCheckboxChange(e, training)}
              className="mr-2 accent-[#03346E]"
            />
            <label className="text-lg">{training}</label>
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-5 mt-6">
        <button
          className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 w-full"
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-[#03346E] text-white rounded-md w-full"
        >
          Save
        </button>
      </div>
    </div>
      </Modal>
    </div>
  );
};

export default TeamMembersPage;
