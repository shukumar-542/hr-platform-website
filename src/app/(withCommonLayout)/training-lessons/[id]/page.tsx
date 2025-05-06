"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Button, Form, Input, Modal, Space, Table, Upload, message } from "antd";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { UploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload/interface';

// Define the data type for the table
interface LessonData {
  key: string;
  slNo: string;
  lessonTitle: string;
  file: string;
  action: string;
}

const LesionDetailsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();
  const [searchValue, setSearchValue] = useState("");
  const [fileList, setFileList] = useState<any[]>([]); // To track file uploads

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  // Function to handle file upload
  const handleFileUpload = (file: RcFile) => {
    const isPDF = file.type === 'application/pdf';
    const isVideo = file.type.startsWith('video/');
    const isDoc = file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    if (!isPDF && !isVideo && !isDoc) {
      message.error('You can only upload PDF, Video, or DOC file!');
      return false;
    }

    return true;
  };

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    message.success('Lesson updated successfully!');
    setOpenModal(false); // Close the modal after update
  };

  // Sample data for the table
  const data: LessonData[] = [
    {
      key: "1",
      slNo: "#1233",
      lessonTitle: "Introduction to Annual Safety",
      file: "Introduction.pdf",
      action: "Edit/Delete",
    },
    {
      key: "2",
      slNo: "#1233",
      lessonTitle: "Tutorial on HIPAA",
      file: "TutorialClass2.mp4",
      action: "Edit/Delete",
    },
    {
      key: "3",
      slNo: "#1233",
      lessonTitle: "Class Materials",
      file: "Class2_lesson1.doc",
      action: "Edit/Delete",
    },
    {
      key: "4",
      slNo: "#1233",
      lessonTitle: "Soft Skills Overview",
      file: "TutorialClass5.mp4",
      action: "Edit/Delete",
    },
  ];

  // Define columns for the table
  const columns = [
    { title: "SL No.", dataIndex: "slNo", key: "slNo" },
    { title: "Lesson Title", dataIndex: "lessonTitle", key: "lessonTitle" },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
      render: (file: string) => <a href="#">{file}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: LessonData) => (
        <div className="flex items-center gap-2">
          <button onClick={() => setOpenModal(true)} className="p-1 rounded-sm bg-[#03346E] text-white cursor-pointer">
            <CiEdit size={20} />
          </button>
          <button className="p-1 rounded-sm bg-red-500 text-white cursor-pointer">
            <RiDeleteBin5Line size={20} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white p-4 min-h-[87vh]">
      <div className="flex justify-between items-center mb-4">
        <BackButton title="Lessons" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />

      <Modal
        centered
        footer={false}
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <h2 className="text-center font-semibold text-xl">Update Lesson</h2>
        <Form
          form={form}
          name="update_lesson"
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{
            lessonTitle: "Introduction to Annual Safety",
          }}
        >
          <Form.Item
            name="lessonTitle"
            label="Lesson Title"
            rules={[{ required: true, message: "Please input the lesson title!" }]}
          >
            <Input placeholder="Lesson title" />
          </Form.Item>

          <Form.Item
            name="file"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={(e: any) => e?.fileList}
            rules={[{ required: true, message: "Please upload a file!" }]}
          >
            <Upload
              name="file"
              customRequest={({ file, onSuccess }) => {
                setTimeout(() => {
                  onSuccess?.({}, file);
                  setFileList([file]); // Store the file in state
                }, 0);
              }}
              beforeUpload={handleFileUpload}
              fileList={fileList} // Display the uploaded file
              showUploadList={true}
            >
              <Button icon={<UploadOutlined />}>+ Upload</Button>
            </Upload>
          </Form.Item>

          <div className="flex items-center gap-2">
            <button className="border border-[#B1C0D2] rounded-sm  w-full py-2" onClick={() => form.resetFields()}>
              Cancel
            </button>
            <button className="bg-[#03346E] rounded-sm text-white w-full py-2">
              Update
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default LesionDetailsPage;
