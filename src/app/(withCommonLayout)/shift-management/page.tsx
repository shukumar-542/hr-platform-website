"use client"
import { BackButton } from '@/components/BackButton/BackButton'
import SearchBar from '@/components/SearchBar/SearchBar'
import { Form, Input, Modal } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineModeEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
interface Shift {
    key: string;
    shiftId: string;
    shiftName: string;
    startTime: string;
    endTime: string;
  }

const ShiftManagementPage = () => {
     const [searchValue, setSearchValue] = useState("");
     const [openModal, setOpenModal] = useState(false);
    
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setSearchValue(e.target.value);
      };


      const data: Shift[] = [
        {
          key: "1",
          shiftId: "#1233",
          shiftName: "Morning Shift",
          startTime: "7:00 AM",
          endTime: "3:00 PM",
        },
        {
          key: "2",
          shiftId: "#1233",
          shiftName: "Evening Shift",
          startTime: "3:00 PM",
          endTime: "11:00 PM",
        },
        {
          key: "3",
          shiftId: "#1233",
          shiftName: "Night Shift",
          startTime: "11:00 PM",
          endTime: "7:00 AM",
        },
      ];
      
      const columns: ColumnsType<Shift> = [
        {
          title: "SL. No.",
          dataIndex: "shiftId",
          key: "shiftId",
        },
        {
          title: "Shift Name",
          dataIndex: "shiftName",
          key: "shiftName",
        },
        {
          title: "Start Time",
          dataIndex: "startTime",
          key: "startTime",
        },
        {
          title: "End Time",
          dataIndex: "endTime",
          key: "endTime",
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
           
            <div className='flex gap-2 text-white'>
               <button onClick={()=> setOpenModal(true)}  className='bg-[#03346E] p-1 cursor-pointer rounded-sm'><MdOutlineModeEdit size={22} /></button> 
               <button className='bg-red-500 p-1 cursor-pointer rounded-sm'><RiDeleteBin6Line size={22} /></button> 
            </div>
          ),
        },
      ];
    
  return (
    <div className='bg-white p-4 rounded-md'>
         <div className="flex items-center justify-between">
        <BackButton title="Shift Management" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>
      <button onClick={()=> setOpenModal(true)} className="bg-[#03346E] text-white px-4 py-2 mt-2 rounded-sm cursor-pointer flex items-center  gap-2">
        <AiOutlinePlus />
        Add Shift
      </button>

      <Table columns={columns} dataSource={data} pagination={false} />

      <Modal centered footer={false} open={openModal} onCancel={()=> setOpenModal(false)}>
            <p className='text-center font-semibold text-xl'>Add New</p>
            <Form layout='vertical'>
                <Form.Item label="Shift Name">
                    <Input placeholder='Shift Name' />
                </Form.Item>
                <Form.Item label="Start Time">
                    <Input placeholder='Start time' />
                </Form.Item>
                <Form.Item label="End Time">
                    <Input placeholder='End time' />
                </Form.Item>
                <div className='flex justify-between items-center gap-2'>
                    <button className='w-full border border-[#B1C0D2] text-[#03346E] py-1 rounded-sm'>Cancel</button>
                    <button onClick={()=> setOpenModal(false)} className='bg-[#03346E] text-white w-full py-1 rounded-sm cursor-pointer'>Save</button>
                </div>
            </Form>
      </Modal>
    </div>
  )
}

export default ShiftManagementPage