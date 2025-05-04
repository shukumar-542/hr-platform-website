import React from 'react'
import { Table, Tag } from 'antd';

// Define the type for your data
interface DataType {
  trainingTopic: string;
  assignedDate: string;
  status: 'In Progress' | 'Completed' | 'Upcoming' | 'Overdue';
}


const Training = () => {

    const columns = [
        {
          title: 'Training Topic',
          dataIndex: 'trainingTopic',
          key: 'trainingTopic',
        },
        {
          title: 'Assigned Date',
          dataIndex: 'assignedDate',
          key: 'assignedDate',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (status: 'In Progress' | 'Completed' | 'Upcoming' | 'Overdue') => {
            
            return (
              <p className={` text-center rounded-full  py-2 ${
                status === "In Progress"
                  ? "text-[#7700D9] bg-[#F1E5FB] "
                  : status === "Completed"
                  ? "text-[#18C33D] bg-[#E7F8EB]"
                  : status === "Upcoming" ? "text-[#D9B800] bg-[#FBF7E5]" : "text-[#D80027] bg-[#F8E7E7]"
              }`}>{status}</p>
            );
          },
        },
      ];
      
      const data: DataType[] = [
        {
          trainingTopic: 'Seizure Management',
          assignedDate: '12/03/25',
          status: 'In Progress',
        },
        {
          trainingTopic: 'Principles of Caregiving (DCW)',
          assignedDate: '16/03/25',
          status: 'Completed',
        },
        {
          trainingTopic: 'Annual Safety Training',
          assignedDate: '17/03/25',
          status: 'Upcoming',
        },
        {
          trainingTopic: 'Confidentiality & Member Rights',
          assignedDate: '18/03/25',
          status: 'Completed',
        },
        {
          trainingTopic: 'Principles of Caregiving (DCW)',
          assignedDate: '19/03/25',
          status: 'Upcoming',
        },
        {
          trainingTopic: 'Annual Safety Training',
          assignedDate: '13/03/25',
          status: 'Completed',
        },
        {
          trainingTopic: 'Seizure Management',
          assignedDate: '14/03/25',
          status: 'Overdue',
        },
      ];
      

  return (
    <div className="border border-[#E1E1E1] shadow-2xs rounded-md p-5 md:p-10 space-y-8 ">
        <p className="text-xl font-semibold">Upcoming & Required Training</p>

        <Table columns={columns} dataSource={data} rowKey="assignedDate" pagination={false} />
    </div>
  )
}

export default Training