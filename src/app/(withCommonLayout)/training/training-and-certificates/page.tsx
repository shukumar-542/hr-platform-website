"use client";
import { BackButton } from '@/components/BackButton/BackButton';
import SearchBar from '@/components/SearchBar/SearchBar';
import React, { useState } from 'react';
import { Table } from 'antd';
import { CiEdit } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';

interface Training {
  slNo: string;
  trainingTitle: string;
  trainingType: string;
  completedOn: string;
  expirationDate: string;
  status: "Uploaded" | "Expiring Soon" | "Expired";
}

const TrainingAndCertificatesPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setSearchValue(e.target.value);
  };

  const data: Training[] = [
    {
      slNo: '#1231',
      trainingTitle: 'Annual Safety Training',
      trainingType: 'Online',
      completedOn: '12/03/25',
      expirationDate: '12/03/25',
      status: 'Uploaded',
    },
    {
      slNo: '#1232',
      trainingTitle: 'HIPAA Training',
      trainingType: 'Onsite',
      completedOn: '12/03/25',
      expirationDate: '12/03/25',
      status: 'Uploaded',
    },
    {
      slNo: '#1233',
      trainingTitle: 'Annual Safety Training',
      trainingType: 'Online',
      completedOn: '12/03/25',
      expirationDate: '12/03/25',
      status: 'Expiring Soon',
    },
    {
      slNo: '#1234',
      trainingTitle: 'HIPAA Training',
      trainingType: 'Onsite',
      completedOn: '12/03/25',
      expirationDate: '12/03/25',
      status: 'Uploaded',
    },
    {
      slNo: '#1235',
      trainingTitle: 'Annual Safety Training',
      trainingType: 'Online',
      completedOn: '12/03/25',
      expirationDate: '12/03/25',
      status: 'Expired',
    },
  ];

  const columns = [
    {
      title: 'SL No.',
      dataIndex: 'slNo',
      key: 'slNo',
    },
    {
      title: 'Training Title',
      dataIndex: 'trainingTitle',
      key: 'trainingTitle',
    },
    {
      title: 'Training Type',
      dataIndex: 'trainingType',
      key: 'trainingType',
    },
    {
      title: 'Completed On',
      dataIndex: 'completedOn',
      key: 'completedOn',
    },
    {
      title: 'Expiration Date',
      dataIndex: 'expirationDate',
      key: 'expirationDate',
    },
    {
      title: 'Status',
      key: 'status',
      render: (_: any, record: Training) => {
        const status = record.status;
        let color = '';
        if (status === 'Uploaded') {
          color = 'green';
        } else if (status === 'Expiring Soon') {
          color = 'orange';
        } else if (status === 'Expired') {
          color = 'red';
        }

        return (
          <p
            className={`text-center rounded-full max-w-36 py-2 ${
              color === 'green'
                ? 'text-[#18C33D] bg-[#E7F8EB]'
                : color === 'orange'
                ? 'text-[#D9B800] bg-[#FBF7E5]'
                : color === 'red'
                ? 'text-[#D80027] bg-[#F8E7E7]'
                : ''
            }`}
          >
            {status}
          </p>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <div className="flex items-center gap-2 text-white">
          <button className="rounded-xs p-1 cursor-pointer bg-[#03346E]">
            <IoEyeOutline size={20} />
          </button>
          <button className="rounded-xs p-1 cursor-pointer bg-red-500">
            <CiEdit size={20} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <div className="md:flex items-center justify-between">
        <BackButton title="Training Certification" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="slNo"
        pagination={false}
      />
    </div>
  );
};

export default TrainingAndCertificatesPage;
