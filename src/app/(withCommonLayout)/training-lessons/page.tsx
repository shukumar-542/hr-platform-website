"use client"
import { BackButton } from '@/components/BackButton/BackButton'
import SearchBar from '@/components/SearchBar/SearchBar'
import {  Space, Table } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { GoUpload } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';

// Define the data type for the table
interface TrainingData {
  key: string;
  slNo: string;
  trainingTitle: string;
  category: string;
  trainingType: string;
  lessons: string;
  uploadLessons: string;
}

const TrainingLesionPage = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleLessonDetails = (id : string)=>{
    router.push(`/training-lessons/${id}`)
  }

    // Sample data for the table
    const data: TrainingData[] = [
      { key: '1', slNo: '#1233', trainingTitle: 'Annual Safety Training', category: 'Soft Skills', trainingType: 'Online', lessons: 'View', uploadLessons: 'Upload' },
      { key: '2', slNo: '#1233', trainingTitle: 'HIPAA Training', category: 'Job Skills', trainingType: 'Onsite', lessons: 'View', uploadLessons: 'Upload' },
      { key: '3', slNo: '#1233', trainingTitle: 'Annual Safety Training', category: 'Safety', trainingType: 'Online', lessons: 'View', uploadLessons: 'Upload' },
      { key: '4', slNo: '#1233', trainingTitle: 'HIPAA Training', category: 'Job Skills', trainingType: 'Onsite', lessons: 'View', uploadLessons: 'Upload' },
      { key: '5', slNo: '#1233', trainingTitle: 'Annual Safety Training', category: 'Soft Skills', trainingType: 'Online', lessons: 'View', uploadLessons: 'Upload' },
      { key: '6', slNo: '#1233', trainingTitle: 'HIPAA Training', category: 'Job Skills', trainingType: 'Onsite', lessons: 'View', uploadLessons: 'Upload' },
      { key: '7', slNo: '#1233', trainingTitle: 'Annual Safety Training', category: 'Soft Skills', trainingType: 'Online', lessons: 'View', uploadLessons: 'Upload' },
      { key: '8', slNo: '#1233', trainingTitle: 'HIPAA Training', category: 'Job Skills', trainingType: 'Onsite', lessons: 'View', uploadLessons: 'Upload' },
      { key: '9', slNo: '#1233', trainingTitle: 'Annual Safety Training', category: 'Soft Skills', trainingType: 'Online', lessons: 'View', uploadLessons: 'Upload' },
      { key: '10', slNo: '#1233', trainingTitle: 'HIPAA Training', category: 'Job Skills', trainingType: 'Onsite', lessons: 'View', uploadLessons: 'Upload' },
    ];
  
    // Define columns for the table
    const columns = [
      { title: 'SL No.', dataIndex: 'slNo', key: 'slNo' },
      { title: 'Training Title', dataIndex: 'trainingTitle', key: 'trainingTitle' },
      { title: 'Category', dataIndex: 'category', key: 'category' },
      { title: 'Training Type', dataIndex: 'trainingType', key: 'trainingType' },
      {
        title: 'Lessons',
        key: 'lessons',
        render: (_: any, record: TrainingData) => (
          <Space size="middle">
            <button onClick={()=> handleLessonDetails(record.key)} className='bg-[#03346E] rounded-sm p-1 text-white cursor-pointer'><IoEyeOutline size={20} /></button>
          </Space>
        ),
      },
      {
        title: 'Upload Lessons',
        key: 'uploadLessons',
        render: (_: any, record: TrainingData) => (
          <Space size="middle">
            <button  className='bg-red-500 rounded-sm p-1 text-white cursor-pointer'><GoUpload  size={20}/></button>
          </Space>
        ),
      },
    ];
  

  return (
    <div className='bg-white rounded-md p-4 min-h-[87vh]'>
       <div className="flex justify-between items-center mb-4">
        <BackButton title="Training Management" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default TrainingLesionPage