"use client"
import { BackButton } from '@/components/BackButton/BackButton'
import { Table } from 'antd';
import React from 'react'
import { IoEyeOutline } from 'react-icons/io5';

interface Training {
    trainingTitle: string;
    category: string;
    trainingType: string;
    location: string;
    startDate: string;
    endDate: string;
  }
interface TrainingHistory {
    trainingTitle: string;
    category: string;
    trainingType: string;
    location: string;
    startDate: string;
    complete: string;
  }

const TrainingAndResourcePage = () => {
    const data: Training[] = [
        {
          trainingTitle: 'Prevention & Support',
          category: 'Soft Skills',
          trainingType: 'Online',
          location: '---------',
          startDate: '12/05/25',
          endDate: '12/05/25',
        },
        {
          trainingTitle: 'Seizure Management',
          category: 'Job Skills',
          trainingType: 'Onsite',
          location: 'New York, USA',
          startDate: '06/05/25',
          endDate: '06/05/25',
        },
        {
          trainingTitle: 'HIPAA Training',
          category: 'Soft Skills',
          trainingType: 'Online',
          location: '---------',
          startDate: '03/05/25',
          endDate: '03/05/25',
        },
      ];
      
      const columns = [
        {
          title: 'Training Title',
          dataIndex: 'trainingTitle',
          key: 'trainingTitle',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Training Type',
          dataIndex: 'trainingType',
          key: 'trainingType',
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
        },
        {
          title: 'Start Date',
          dataIndex: 'startDate',
          key: 'startDate',
        },
        {
          title: 'End Date',
          dataIndex: 'endDate',
          key: 'endDate',
        },
        {
          title: 'Resources',
          key: 'resources',
          render: () => (
           <button className='bg-[#03346E] text-white p-2 rounded-sm'><IoEyeOutline size={22} /></button>
          ),
        },
      ];

    //   Training History

    const historyData: TrainingHistory[] = [
        {
          trainingTitle: 'Prevention & Support',
          category: 'Soft Skills',
          trainingType: 'Online',
          location: '---------',
          startDate: '12/05/25',
          complete: '12/05/25',
        },
        {
          trainingTitle: 'Seizure Management',
          category: 'Job Skills',
          trainingType: 'Onsite',
          location: 'New York, USA',
          startDate: '06/05/25',
          complete: '06/05/25',
        },
        {
          trainingTitle: 'HIPAA Training',
          category: 'Soft Skills',
          trainingType: 'Online',
          location: '---------',
          startDate: '03/05/25',
          complete: '03/05/25',
        },
      ];
      
      const historyColumns = [
        {
          title: 'Training Title',
          dataIndex: 'trainingTitle',
          key: 'trainingTitle',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Training Type',
          dataIndex: 'trainingType',
          key: 'trainingType',
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
        },
        {
          title: 'Start Date',
          dataIndex: 'startDate',
          key: 'startDate',
        },
        {
          title: 'Completed On',
          dataIndex: 'complete',
          key: 'complete',
        },
        {
          title: 'Resources',
          key: 'resources',
          render: () => (
           <button className='bg-[#03346E] text-white p-2 rounded-sm'><IoEyeOutline size={22} /></button>
          ),
        },
      ];


  return (
    <div className='bg-white rounded-md p-4 min-h-[87vh]'>
        <BackButton title='Training & Resource' />

        <div className='border border-[#E1E1E1] rounded-md shadow-xs mt-5'>
            <p className='font-semibold p-4'>Active Training</p>
            <Table dataSource={data} columns={columns} rowKey="trainingTitle" pagination={false} />
        </div>
        <div className='border border-[#E1E1E1] rounded-md shadow-xs mt-5'>
            <p className='font-semibold p-4'> Training History</p>
            <Table dataSource={historyData} columns={historyColumns} rowKey="trainingTitle" pagination={false} />
        </div>
    </div>
  )
}

export default TrainingAndResourcePage