"use client";
import React from "react";
import img from "@/assets/emp1.png";
import { BackButton } from "@/components/BackButton/BackButton";
import Image from "next/image";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import PersonalDetails from "@/components/PersonalDetails/PersonalDetails";
import RightSidebar from "@/components/RightSidebar/RightSidebar";
import JobDetails from "@/components/JobDetails/JobDetails";

const EmployeeDetailsPage = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <p className="">Personal</p>,
      children: <PersonalDetails />,
    },
    {
      key: "2",
      label: "Job",
      children: <JobDetails/>,
    },
    {
      key: "3",
      label: "Time Off",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Payroll",
      children: "Content of Tab Pane 3",
    },
    {
      key: "5",
      label: "Document",
      children: "Content of Tab Pane 3",
    },
    {
      key: "6",
      label: "Training",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <div className="bg-white p-4 pb-14 rounded-md">
      <BackButton title="Employee Details" />
      <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-4 py-5">
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={img}
              height={400}
              width={400}
              alt="img"
              className="rounded-full h-[60px] w-[60px]"
            />
          </div>
          <div>
            <p className="font-semibold text-xl">James Williams</p>
            <p>Marketing Manager</p>
          </div>
        </div>
        <button className="bg-[#03346E] px-5 py-2 rounded-sm text-white">
          Edit Details
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  md:gap-6">
        <div className="col-span-2">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        <div className="mt-5 md:mt-0">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsPage;
