"use client"
import { BackButton } from '@/components/BackButton/BackButton'
import React from 'react'
import img from '@/assets/emp2.png'
import Image from 'next/image'
import { Space, Table} from 'antd';
import { IoEyeOutline } from 'react-icons/io5';

// Define the data type for the table
interface TrainingData {
    key: string;
    topic: string;
    assignedDate: string;
    location: string;
    certificate: string;
    status: string;
  }

const CertificationDetailsPage = () => {

      // Sample data for the table
  const data: TrainingData[] = [
    { key: '1', topic: 'Seizure Management', assignedDate: '12/03/25', location: 'Online', certificate: 'View', status: 'In Progress' },
    { key: '2', topic: 'Principles of Caregiving (DCW)', assignedDate: '12/03/25', location: 'Onsite', certificate: 'View', status: 'Completed' },
    { key: '3', topic: 'Annual Safety Training', assignedDate: '12/03/25', location: 'Online', certificate: 'View', status: 'Upcoming' },
    { key: '4', topic: 'Confidentiality & Member Rights', assignedDate: '12/03/25', location: 'Onsite', certificate: 'View', status: 'Completed' },
    { key: '5', topic: 'Principles of Caregiving (DCW)', assignedDate: '12/03/25', location: 'Onsite', certificate: 'View', status: 'Upcoming' },
    { key: '6', topic: 'Annual Safety Training', assignedDate: '12/03/25', location: 'Online', certificate: 'View', status: 'Completed' },
    { key: '7', topic: 'Seizure Management', assignedDate: '12/03/25', location: 'Online', certificate: 'View', status: 'Overdue' },
  ];

  // Define columns for the table
  const columns = [
    { title: 'Training Topic', dataIndex: 'topic', key: 'topic' },
    { title: 'Assigned Date', dataIndex: 'assignedDate', key: 'assignedDate' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
    {
      title: 'Certificate',
      key: 'certificate',
      render: (_: any, record: TrainingData) => (
        <Space size="middle">
          <button className='bg-[#03346E] text-white p-1 rounded-sm cursor-pointer'><IoEyeOutline size={20}/></button>
        </Space>
      ),
    },
    {
      title: 'Status',
      key: 'status',
      render: (_: any, record: TrainingData) => {
       
        return <p className={` inline-block px-4 py-2 rounded-full  ${record?.status === "In Progress" ? "text-[#7700D9] bg-[#F1E5FB]" : record?.status === "Upcoming" ? "text-[#D9B800] bg-[#FBF7E5]" : record?.status==="Completed" ?  "text-[#18C33D] bg-[#E7F8EB]" :  "bg-[#F8E7E7] text-[#D80027]"}`}>{record?.status}</p>;
      },
    },
  ];
  return (
    <div className='bg-white rounded-md p-4 min-h-[87vh]'>
        <BackButton title='Details'/>
        <div className=' border-b border-[#DFDFDF] pb-5 mb-8'>
            <div className='flex items-center gap-2 mt-5'>
                <div>
                    <Image src={img} height={500} width={500} className='w-14 h-14 rounded-full' alt='img' />
                </div>
                <div>
                    <p className='text-xl font-semibold'>James Williams</p>
                    <p>Marketing Manager</p>
                </div>
            </div>
        </div>

        {/* User Training Details */}
        <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default CertificationDetailsPage