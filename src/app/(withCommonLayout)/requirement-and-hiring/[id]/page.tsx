"use client"
import { BackButton } from "@/components/BackButton/BackButton";
import React from "react";
import img from "@/assets/emp1.png";
import Image from "next/image";
import { Table } from "antd";
import Link from "next/link";
import { ColumnsType } from "antd/es/table";

interface Candidate {
  id: string;
  name: string;
  location: string;
  appliedOn: string;
  status: string;
}

const JobDetailsPage = () => {
  const candidates: Candidate[] = [
    {
      id: "#1234",
      name: "Annette Black",
      location: "Royal Ln. Mesa, New Jersey",
      appliedOn: "Jan 21, 2025",
      status: "New",
    },
    {
      id: "#1233",
      name: "Ronald Richards",
      location: "Preston Rd. Inglewood, Maine",
      appliedOn: "Jan 3, 2025",
      status: "Reviewed",
    },
    {
      id: "#1235",
      name: "Eleanor Pena",
      location: "Thornridge Cir. Shiloh, Hawaii",
      appliedOn: "Feb 4, 2025",
      status: "New",
    },
    {
      id: "#1238",
      name: "Albert Flores",
      location: "Thornridge Cir. Syracuse, Connecticut",
      appliedOn: "Jan 21, 2025",
      status: "Reviewed",
    },
    {
      id: "#1237",
      name: "Dianne Russell",
      location: "Washington Ave. Manchester, Kentucky",
      appliedOn: "Mar 21, 2025",
      status: "Interviewed",
    },
  ];

  const columns : ColumnsType<Candidate> = [
    {
      title: "SL. No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Candidate Name",
      dataIndex: "name",
      key: "name",
      render: (text: any, record: Candidate) => {
        return (
          <Link href={`/requirement-and-hiring/:[id]/:[userId]`}>
            <span className="text-[#03346E] cursor-pointer">{text}</span>
          </Link>
        );
      }
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Applied On",
      dataIndex: "appliedOn",
      key: "appliedOn",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <div className="bg-white p-5 rounded-md min-h-[87vh]">
      <BackButton title="Job Details" />
      {/* Project Info and team lead details */}
      <div className="border-b border-[#DFDFDF] pb-8">
        <p className="text-2xl font-semibold mt-5">Financial Analyst</p>
        <p className=" text-[#333333]">
          4517 Washington Ave. Manchester, Kentucky
        </p>

        <div className="flex items-center justify-between  mt-5">
          <button className="border border-[#B1C0D2] text-[#03346E] px-2 py-1 rounded-sm">
            Edit Job Opening
          </button>
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center  gap-2 border-r  border-[#DFDFDF] pr-10">
              <Image
                src={img}
                height={100}
                width={100}
                alt="img"
                className="rounded-full h-14 w-14"
              />
              <div>
                <p>Hiring Lead</p>
                <p className="font-semibold">Annette Black</p>
              </div>
            </div>
            <div>
              <p>Status</p>
              <p className="font-semibold">Open</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Details and employee type  */}

      <div className="flex justify-between mt-10 gap-5">
        <div className="space-y-2 border-r border-[#DFDFDF] pr-5 w-full">
          <p className="text-xl font-semibold">Details</p>
          <p>
            Please call the property owner to make an appointment, take some
            picture and videos of the property location. Please call the
            property owner to make an appointment, take some picture and videos
            of the property location. Please call the property owner to make an
            appointment, take some picture and videos of the property location.
          </p>
          <p>
            Please call the property owner to make an appointment, take some
            picture and videos of the property location. Please call the
            property owner to make an appointment, take some picture and videos
            of the property location. Please call the property owner to make an
            appointment, take some picture and videos of the property location.
            Please call the property owner to make an appointment, take some
            picture and videos of the property location. Please call the
            property owner to make an appointment, take some picture and videos
            of the property location.{" "}
          </p>
        </div>
        <div className="w-full space-y-8 ">
          <p className="flex justify-between items-center ">
            <span>Employee Type</span>{" "}
            <span className="font-semibold">Full time</span>
          </p>
          <p className="flex justify-between items-center ">
            <span>Department:</span>{" "}
            <span className="font-semibold">Finance</span>
          </p>
          <p className="flex justify-between items-center ">
            <span>Minimum Experience:</span>{" "}
            <span className="font-semibold">2 Years</span>
          </p>
          <p className="flex justify-between items-center ">
            <span>Compensation</span>{" "}
            <span className="font-semibold">10$-20$/hour</span>
          </p>
        </div>
      </div>

      {/* Candidates details */}
      <div className="pt-10">
        <p className="text-xl font-semibold mb-5">Candidates</p>
        <Table
          dataSource={candidates}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
      </div>
    </div>
  );
};

export default JobDetailsPage;
