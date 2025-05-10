"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import React, { useState } from "react";
import { Button, DatePicker, Form, Modal, Select, Table, Upload } from "antd";
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Option } from "antd/es/mentions";
import { UploadOutlined } from "@ant-design/icons";
import certificaate from "@/assets/certtificate.png";
import Image from "next/image";

interface Training {
  slNo: string;
  trainingTitle: string;
  trainingType: string;
  completedOn: string;
  expirationDate: string;
  status: "Uploaded" | "Expiring Soon" | "Expired";
}

const TrainingAndCertificatesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openCertificateModal, setOpenCertificateModal] = useState(false);
  const [form] = Form.useForm();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setSearchValue(e.target.value);
  };

  const data: Training[] = [
    {
      slNo: "#1231",
      trainingTitle: "Annual Safety Training",
      trainingType: "Online",
      completedOn: "12/03/25",
      expirationDate: "12/03/25",
      status: "Uploaded",
    },
    {
      slNo: "#1232",
      trainingTitle: "HIPAA Training",
      trainingType: "Onsite",
      completedOn: "12/03/25",
      expirationDate: "12/03/25",
      status: "Uploaded",
    },
    {
      slNo: "#1233",
      trainingTitle: "Annual Safety Training",
      trainingType: "Online",
      completedOn: "12/03/25",
      expirationDate: "12/03/25",
      status: "Expiring Soon",
    },
    {
      slNo: "#1234",
      trainingTitle: "HIPAA Training",
      trainingType: "Onsite",
      completedOn: "12/03/25",
      expirationDate: "12/03/25",
      status: "Uploaded",
    },
    {
      slNo: "#1235",
      trainingTitle: "Annual Safety Training",
      trainingType: "Online",
      completedOn: "12/03/25",
      expirationDate: "12/03/25",
      status: "Expired",
    },
  ];

  const columns = [
    {
      title: "SL No.",
      dataIndex: "slNo",
      key: "slNo",
    },
    {
      title: "Training Title",
      dataIndex: "trainingTitle",
      key: "trainingTitle",
    },
    {
      title: "Training Type",
      dataIndex: "trainingType",
      key: "trainingType",
    },
    {
      title: "Completed On",
      dataIndex: "completedOn",
      key: "completedOn",
    },
    {
      title: "Expiration Date",
      dataIndex: "expirationDate",
      key: "expirationDate",
    },
    {
      title: "Status",
      key: "status",
      render: (_: any, record: Training) => {
        const status = record.status;
        let color = "";
        if (status === "Uploaded") {
          color = "green";
        } else if (status === "Expiring Soon") {
          color = "orange";
        } else if (status === "Expired") {
          color = "red";
        }

        return (
          <p
            className={`text-center rounded-full max-w-36 py-2 ${
              color === "green"
                ? "text-[#18C33D] bg-[#E7F8EB]"
                : color === "orange"
                ? "text-[#D9B800] bg-[#FBF7E5]"
                : color === "red"
                ? "text-[#D80027] bg-[#F8E7E7]"
                : ""
            }`}
          >
            {status}
          </p>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex items-center gap-2 text-white">
          <button
            onClick={() => setOpenCertificateModal(true)}
            className="rounded-xs p-1 cursor-pointer bg-[#03346E]"
          >
            <IoEyeOutline size={20} />
          </button>
          <button className="rounded-xs p-1 cursor-pointer bg-red-500">
            <CiEdit size={20} />
          </button>
        </div>
      ),
    },
  ];

  const handleUpload = (file: any) => {
    console.log("File uploaded:", file);
    return false; // Prevent automatic upload
  };

  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <div className="md:flex items-center justify-between">
        <BackButton title="Training Certification" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-[#03346E] text-white px-3 py-2  cursor-pointer rounded-sm mb-5"
      >
        Add New
      </button>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="slNo"
        pagination={false}
      />

      <Modal
        centered
        footer={false}
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <p className="text-center text-xl">Add Document</p>
        <Form
          form={form}
          layout="vertical"
          // onFinish={onFinish}
          initialValues={{
            trainingName: "Annual Safety Training",
            trainingType: "Online",
          }}
        >
          <Form.Item
            label="Training Name"
            name="trainingName"
            rules={[
              { required: true, message: "Please select a training name!" },
            ]}
          >
            <Select>
              <Option value="Annual Safety Training">
                Annual Safety Training
              </Option>
              <Option value="HIPAA Training">HIPAA Training</Option>
              <Option value="Fire Safety Training">Fire Safety Training</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Training Type"
            name="trainingType"
            rules={[
              { required: true, message: "Please select the training type!" },
            ]}
          >
            <Select>
              <Option value="Online">Online</Option>
              <Option value="Onsite">Onsite</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Date Completed"
            name="dateCompleted"
            rules={[
              { required: true, message: "Please select the completion date!" },
            ]}
          >
            <DatePicker
              format="MM/DD/YYYY"
              style={{ width: "100%" }}
              // defaultValue={moment()}
            />
          </Form.Item>

          <Form.Item
            label="Expiration Date"
            name="expirationDate"
            rules={[
              { required: true, message: "Please select the expiration date!" },
            ]}
          >
            <DatePicker
              format="MM/DD/YYYY"
              style={{ width: "100%" }}
              // defaultValue={moment()}
            />
          </Form.Item>

          <Form.Item label="Upload" name="upload">
            <Upload beforeUpload={handleUpload} showUploadList={false}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <div className="flex justify-between items-center gap-5">
            <button className="border-[#03346E] border w-full py-2 rounded-sm">
              Cancel
            </button>
            <button className="bg-[#03346E] text-white w-full py-2 rounded-sm">
              Save
            </button>
          </div>
        </Form>
      </Modal>

      {/* Certificate Modal */}
      <Modal
        centered
        open={openCertificateModal}
        footer={false}
        onCancel={() => setOpenCertificateModal(false)}
      >
        <p className="text-center text-xl font-semibold">Document</p>
        <div className="flex justify-center mt-5 ">
          <Image src={certificaate} height={400} width={400} alt="img" />
        </div>
      </Modal>
    </div>
  );
};

export default TrainingAndCertificatesPage;
