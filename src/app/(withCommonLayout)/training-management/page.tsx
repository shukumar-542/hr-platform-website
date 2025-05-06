"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Button, DatePicker, Form, Input, Modal, Select, Table } from "antd";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
const { Option } = Select;
// Define types for training data
interface TrainingData {
  key: string;
  slNo: string;
  title: string;
  category: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
}

const TrainingManagementPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [form] = Form.useForm();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  const data: TrainingData[] = [
    {
      key: "1",
      slNo: "#1233",
      title: "Annual Safety Training",
      category: "Soft Skills",
      type: "Online",
      location: "-------",
      startDate: "12/03/25",
      endDate: "12/03/25",
    },
    {
      key: "2",
      slNo: "#1233",
      title: "HIPAA Training",
      category: "Job Skills",
      type: "Onsite",
      location: "Los Angeles, USA",
      startDate: "12/03/25",
      endDate: "12/03/25",
    },
    {
      key: "3",
      slNo: "#1233",
      title: "Annual Safety Training",
      category: "Soft Skills",
      type: "Online",
      location: "-------",
      startDate: "12/03/25",
      endDate: "12/03/25",
    },
    {
      key: "4",
      slNo: "#1233",
      title: "HIPAA Training",
      category: "Job Skills",
      type: "Onsite",
      location: "Philadelphia, USA",
      startDate: "12/03/25",
      endDate: "12/03/25",
    },
    {
      key: "5",
      slNo: "#1233",
      title: "Annual Safety Training",
      category: "Soft Skills",
      type: "Online",
      location: "-------",
      startDate: "12/03/25",
      endDate: "12/03/25",
    },
    {
      key: "6",
      slNo: "#1233",
      title: "HIPAA Training",
      category: "Job Skills",
      type: "Online",
      location: "-------",
      startDate: "12/03/25",
      endDate: "12/03/25",
    },
    {
      key: "7",
      slNo: "#1233",
      title: "Annual Safety Training",
      category: "Soft Skills",
      type: "Onsite",
      location: "Philadelphia, USA",
      startDate: "12/03/25",
      endDate: "12/03/25",
    },
    {
      key: "8",
      slNo: "#1233",
      title: "HIPAA Training",
      category: "Job Skills",
      type: "Onsite",
      location: "Puebla, MX",
      startDate: "12/03/25",
      endDate: "12/03/25",
    },
    {
      key: "9",
      slNo: "#1233",
      title: "Annual Safety Training",
      category: "Soft Skills",
      type: "Online",
      location: "-------",
      startDate: "12/03/25",
      endDate: "12/03/25",
    },
    {
      key: "10",
      slNo: "#1233",
      title: "HIPAA Training",
      category: "Job Skills",
      type: "Onsite",
      location: "San Diego, USA",
      startDate: "12/03/25",
      endDate: "12/03/25",
    },
  ];

  // Define columns for the table
  const columns = [
    { title: "SL No.", dataIndex: "slNo", key: "slNo" },
    { title: "Training Title", dataIndex: "title", key: "title" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Training Type", dataIndex: "type", key: "type" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Start Date", dataIndex: "startDate", key: "startDate" },
    { title: "End Date", dataIndex: "endDate", key: "endDate" },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: TrainingData) => (
        <button className="bg-red-500 text-white p-2 cursor-pointer rounded-sm">
          <FaEdit size={20} />
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <div className="flex justify-between items-center mb-4">
        <BackButton title="Training Management" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>
      <button onClick={()=> setOpenModal(true)} className="flex items-center gap-2 bg-[#03346E] text-white px-5 py-2 rounded-sm cursor-pointer mb-5">
        <FaPlus />
        Add New{" "}
      </button>
      <Table columns={columns} dataSource={data} pagination={false} />

      <Modal
        centered
        footer={false}
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <h1 className="text-center font-semibold text-xl">Add New</h1>
        <Form layout="vertical">
          <Form.Item
            name="title"
            label="Training Title"
            rules={[
              { required: true, message: "Please enter the training title!" },
            ]}
          >
            <Input placeholder="Title here" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please select a category!" }]}
          >
            <Select>
              <Option value="Soft Skills">Soft Skills</Option>
              <Option value="Job Skills">Job Skills</Option>
              <Option value="Technical Skills">Technical Skills</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="trainingType"
            label="Training Type"
            rules={[
              { required: true, message: "Please select a training type!" },
            ]}
          >
            <Select>
              <Option value="Onsite">Onsite</Option>
              <Option value="Online">Online</Option>
            </Select>
          </Form.Item>

          <Form.Item name="location" label="Location (If applicable)">
            <Input placeholder="Type here" />
          </Form.Item>

          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true, message: "Please select a start date!" }]}
          >
            <DatePicker
              format="MM/DD/YYYY"
              placeholder="MM/DD/YYYY"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true, message: "Please select an end date!" }]}
          >
            <DatePicker
              format="MM/DD/YYYY"
              placeholder="MM/DD/YYYY"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <div className="flex ">
            <button
              style={{ marginRight: 8 }}
              onClick={() => form.resetFields()}
              className="border border-[#03346E] rounded-sm py-2 w-full"
            >
              Cancel
            </button>
            <button className="bg-[#03346E] text-white w-full rounded-sm py-2" >
              Save
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default TrainingManagementPage;
