"use client"
import React from 'react'
import { BackButton } from '@/components/BackButton/BackButton'
import user from '@/assets/emp3.png'
import Image from 'next/image'
import { Select, Tabs } from 'antd'
import CandidateDetails from '@/components/CandidateDetails/CandidateDetails'
import CandidateResume from '@/components/CandidateResume/CandidateResume'
import CandidatesCoverLetter from '@/components/CandidatesCoverLetter/CandidatesCoverLetter'
const CandidatesDetailsPage = () => {
  const statusOptions = [
    { label: "New", value: "New" },
    { label: "Reviewed", value: "Reviewed" },
    { label: "Interviewed", value: "Interviewed" },
  ];


  const items = [
    {
      key: "1",
      label: <p className="">Resume</p>,
      children: <CandidateResume/>,
    },
    {
      key: "2",
      label: "Cover Letter",
      children: <CandidatesCoverLetter/>,
    },
  
   
  ];

  const onChange = (key: string) => {
    console.log(key);
  };



  return (
    <div className='bg-white p-4 rounded-md  min-h-[87vh]'>
      <BackButton title='Candidates Details' />

      <div className='flex md:flex-row flex-col items-center justify-between mt-5'>
        <div className='flex items-center gap-2'>
          <Image src={user} height={100} width={100} alt='img' className='rounded-full w-14 h-14' />
          <div>
            <p className='text-xl font-semibold'>James Willams</p>
            <p>Applied on 22 January, 2025</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row item-center md:items-end md:gap-5 mt-10 md:mt-0'>
          <button className='bg-[#03346E] px-4 py-1 text-white rounded-sm'>Hire</button>
          <div>
            <p className='mb-2'>Status</p>
            <Select defaultValue={"New"}
             style={{ width: 200 }}
            options={statusOptions}
              />
          </div>
        </div>
      </div>


      {/* Resume and cover letter details */}

      <div className="grid grid-cols-1 lg:grid-cols-3  md:gap-6 mt-10">
        <div className="col-span-2">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        <div className=" md:mt-12 bg-[#F7F7F7] shadow-xl">
          <CandidateDetails/>
        </div>
      </div>

    </div>
  )
}

export default CandidatesDetailsPage