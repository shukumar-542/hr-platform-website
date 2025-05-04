"use client";
import React, { useState } from "react";
import {
  Table,
  Space,
  Modal,
  Form,
  Input,
  DatePicker,
  Upload,
  Button,
} from "antd";
import { FaPlus } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { UploadOutlined } from "@ant-design/icons";

// Define the type for your data
interface DataType {
  documentName: string;
  expirationDate: string;
  status: "Uploaded" | "Expiring Soon" | "Missing";
  action: string;
}

const DocumentLibrary = () => {
  const [openModal, setOpenModal] = useState(false);

  const [fileList, setFileList] = useState<any[]>([]);

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleSave = () => {
    // Handle save logic
    setOpenModal(false);
  };

  // Handle file change (to update file list)
  const handleChange = (info: any) => {
    setFileList(info.fileList);
  };
  const columns = [
    {
      title: "Document Name",
      dataIndex: "documentName",
      key: "documentName",
    },
    {
      title: "Expiration Date",
      dataIndex: "expirationDate",
      key: "expirationDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: "Uploaded" | "Expiring Soon" | "Missing") => {
        return (
          <p
            className={` text-center rounded-full  py-2 ${
              status === "Uploaded"
                ? "text-[#18C33D] bg-[#E7F8EB]"
                : status === "Expiring Soon"
                ? "text-[#D9B800] bg-[#FBF7E5]"
                : "text-[#D80027] bg-[#F8E7E7]"
            }`}
          >
            {status}
          </p>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Space size="middle">
          <button className="bg-[#03346E] text-white p-1 rounded-sm cursor-pointer">
            <IoEyeOutline size={22} />
          </button>
          <button className="bg-red-500 text-white p-1 rounded-sm cursor-pointer">
            <CiEdit size={22} />
          </button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      documentName: "Driver's License & Insurance",
      expirationDate: "25/09/28",
      status: "Uploaded",
      action: "view/edit",
    },
    {
      documentName: "Fingerprint Clearance Card",
      expirationDate: "15/10/26",
      status: "Expiring Soon",
      action: "view/edit",
    },
    {
      documentName: "CPR Certificate",
      expirationDate: "02/12/25",
      status: "Missing",
      action: "view/edit",
    },
    {
      documentName: "I-9 Form",
      expirationDate: "N/A",
      status: "Uploaded",
      action: "view/edit",
    },
  ];

  return (
    <div className="border border-[#E1E1E1] shadow-2xs rounded-md p-5 md:p-10 space-y-8 ">
      <p className="text-xl font-semibold">Document Library</p>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="documentName"
        pagination={false}
      />
      <div className="flex justify-center">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-[#03346E] cursor-pointer flex items-center gap-2 text-white px-4 py-2 rounded-sm"
        >
          <FaPlus />
          Upload
        </button>
      </div>

      <Modal open={openModal} onCancel={handleCancel} footer={null} centered>
        <p className="text-center text-xl font-semibold">Add Document</p>
        <Form layout="vertical">
          <Form.Item label="Document Name">
            <Input placeholder="Enter Document name" />
          </Form.Item>
          <Form.Item label="Expiration Date">
            <DatePicker format="MM/DD/YYYY" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Upload" className="w-full">
            <Upload
              beforeUpload={() => false} // Disable automatic upload
              listType="picture" // Display image preview
              showUploadList={{
                showPreviewIcon: true, // Show preview icon for uploaded images
                showRemoveIcon: true, // Show remove icon
              }}
              fileList={fileList} // Keep track of the file list
              onChange={handleChange} // Update the file list on file change
              className="w-full"
            >
              {/* This will make the button take up the full width of its parent container */}
              <div className="w-full flex  justify-center items-center gap-2 border border-dashed p-2">
                <FaPlus />
                <span>Upload</span>
              </div>
            </Upload>
          </Form.Item>
          <div className="flex justify-between items-center gap-2">
            <button  onClick={handleCancel} className="border border-[#B1C0D2] text-[#03346E] rounded-sm w-full py-2">
              Cancel
            </button>
            <button onClick={handleSave} className="bg-[#03346E] text-white rounded-sm w-full py-2">
              Save
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default DocumentLibrary;
