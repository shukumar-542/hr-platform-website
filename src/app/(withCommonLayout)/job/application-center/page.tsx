import { BackButton } from "@/components/BackButton/BackButton";
import { Table } from "antd";
import React from "react";

interface Application {
  appliedDate: string;
  jobTitle: string;
  department: string;
  status: string;
}

const ApplicationCenterPage = () => {
  const data: Application[] = [
    {
      appliedDate: "12/05/25",
      jobTitle: "Group Home Supervisor",
      department: "Residential",
      status: "Applied",
    },
    {
      appliedDate: "06/05/25",
      jobTitle: "Scheduling Assistant",
      department: "Admin",
      status: "Interview Scheduled",
    },
    {
      appliedDate: "03/05/25",
      jobTitle: "Financial Analyst",
      department: "Finance",
      status: "Under Review",
    },
  ];

  const columns = [
    {
      title: "Applied Date",
      dataIndex: "appliedDate",
      key: "appliedDate",
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  // Application history

  const applicationHistoryData: Application[] = [
    {
      appliedDate: '12/05/25',
      jobTitle: 'Group Home Supervisor',
      department: 'Residential',
      status: 'Hired',
    },
    {
      appliedDate: '06/05/25',
      jobTitle: 'Scheduling Assistant',
      department: 'Admin',
      status: 'Rejected',
    },
    {
      appliedDate: '03/05/25',
      jobTitle: 'Financial Analyst',
      department: 'Finance',
      status: 'Rejected',
    },
    {
      appliedDate: '05/05/25',
      jobTitle: 'Financial Analyst',
      department: 'Finance',
      status: 'Applied',
    },
   
  ];
  const ApplicationHistoryColumns = [
    {
      title: 'Applied Date',
      dataIndex: 'appliedDate',
      key: 'appliedDate',
    },
    {
      title: 'Job Title',
      dataIndex: 'jobTitle',
      key: 'jobTitle',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];
  
  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <BackButton title="Application Center" />
      <div className="border border-[#E1E1E1]  rounded-md p-6 shadow-sm mt-5">
        <p className="text-xl font-semibold">Submitted Applications</p>
        <Table
          dataSource={data}
          columns={columns}
          rowKey="appliedDate"
          pagination={false}
        />
      </div>
      <div className="border border-[#E1E1E1]  rounded-md p-6 shadow-sm mt-5">
        <p className="text-xl font-semibold">Submitted Applications</p>
        <Table
          dataSource={applicationHistoryData}
          columns={ApplicationHistoryColumns}
          rowKey="appliedDate"
          pagination={false}
        />
      </div>
    </div>
  );
};

export default ApplicationCenterPage;
