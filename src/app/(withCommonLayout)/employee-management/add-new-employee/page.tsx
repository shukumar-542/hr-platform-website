"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import React, { useState } from "react";
import place from "@/assets/hold.png";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { Checkbox, DatePicker, Form, Input, Select } from "antd";
import { useRouter } from "next/navigation";
const { Option } = Select;

const AddEmployeePage = () => {
  const router = useRouter()
  const [image, setImage] = useState<File | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="bg-white min-h-[87vh] p-4 rounded-md">
      <BackButton title="Add New Employee" />

      {/* Add Employee image upload  */}
      <div className="relative w-[140px] h-[140px] mx-auto">
        <input
          type="file"
          onChange={handleChange}
          id="img"
          style={{ display: "none" }}
        />

        {image ? (
          // If user uploaded an image, show preview from File
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded preview"
            className="w-[140px] h-[140px] rounded-full object-cover"
          />
        ) : (
          <Image
            src={place}
            alt="Default profile"
            className="w-[140px] h-[140px] rounded-full object-cover"
            width={160}
            height={160}
          />
        )}

        <label
          htmlFor="img"
          className="absolute top-[95px] -right-1 bg-[#03346E] rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
        >
          <FaPlus size={20} className="text-white" />
        </label>
      </div>

      {/* Employee info and employee details  */}
      <Form layout="vertical">
        <div className="md:flex justify-between gap-10 md:px-10 mt-10">
          {/* Personal Information */}
          <div className="w-full ">
            <p className="text-xl mb-5">Personal Information</p>
            <Form.Item label="Full Name">
              <Input placeholder="Enter Full Name" />
            </Form.Item>
            <div className="flex gap-5">
              <Form.Item className="w-full" label="Date of Birth">
                <DatePicker className="w-full " />
              </Form.Item>
              <Form.Item className="w-full" label="Gender">
                <Select
                  defaultValue="Male"
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
              </Form.Item>
            </div>
            <Form.Item label="Email">
              <Input placeholder="Enter Email" />
            </Form.Item>
            <Form.Item label="Phone Number">
              <Input placeholder="Enter Phone Number" />
            </Form.Item>
            <Form.Item label="Address">
              <Input placeholder="Enter Address" />
            </Form.Item>
          </div>
          {/* Employee details */}
          <div className="w-full">
            <p className="text-xl mb-5">Employee Details</p>
            <Form.Item label="Employee ID">
              <Input placeholder="Enter Employee ID" />
            </Form.Item>
            <Form.Item label="Job Title">
              <Input placeholder="Enter Job Title" />
            </Form.Item>

            <div className="flex items-center gap-5">
              <Form.Item className="w-full" label="House/Business">
                <Select
                  defaultValue="Buihead House 2"
                  options={[
                    { value: "Buihead House 2", label: "Buihead House 2" },
                  ]}
                />
              </Form.Item>
              <Form.Item className="w-full" label="Department">
                <Select
                  defaultValue="Sales"
                  options={[{ value: "Sales", label: "Sales" }]}
                />
              </Form.Item>
            </div>

            <div className="flex gap-5">
              <Form.Item className="w-full" label="Employee Type">
                <Select
                  defaultValue="Full-Time"
                  options={[{ value: "Full-Time", label: "Full-Time" }]}
                />
              </Form.Item>
              <Form.Item className="w-full" label="Start Date">
                <DatePicker className="w-full " />
              </Form.Item>
            </div>

            <div className="flex items-center gap-10">
              {/* Compensation */}
              <div className="w-full">
                <p className="">Compensation</p>

                <div className="flex w-full">
                  <Form.Item label="" className="w-full">
                    <Input placeholder="$45" />
                  </Form.Item>
                  <span className="px-2 mt-1  ">Per</span>
                  <Form.Item className="w-full " label="">
                    <Select
                      defaultValue="Full-Time"
                      options={[{ value: "Full-Time", label: "Full-Time" }]}
                    />
                  </Form.Item>
                </div>
              </div>

              {/* Pay Schedule */}
              <Form.Item label="Pay Schedule" className=" w-full">
                <Select defaultValue="Twice a month">
                  <Option value="weekly">Weekly</Option>
                  <Option value="biweekly">Biweekly</Option>
                  <Option value="twice_a_month">Twice a month</Option>
                  <Option value="monthly">Monthly</Option>
                </Select>
              </Form.Item>
            </div>

            <div className="flex  gap-5">
              <Form.Item label="Work Email" className="w-full">
                <Input placeholder="Enter Work email" />
              </Form.Item>
              <Form.Item label="Manager" className=" w-full">
                <Select defaultValue="Jhon Smith">
                  <Option value="Jhon Smith">Jhon Smith</Option>
                </Select>
              </Form.Item>
            </div>
            <Form.Item
              name="sendPacket"
              valuePropName="checked"
              className="mb-0"
            >
              <Checkbox>Send this new employee a new hire packets</Checkbox>
            </Form.Item>
          </div>
        </div>
          <div className="flex justify-center gap-5">
            <button className="bg-[#03346E] text-white px-8 py-2 rounded-sm cursor-pointer" >
              Add
            </button>
            <button type="button" onClick={()=> router.push('/employee-management/new-hire-packet')} className="border cursor-pointer border-[#EAE9F0] px-5 text-[#03346E] rounded-sm">Add & Create New Hire Packet</button>
            <button className="border border-[#EAE9F0] px-5 text-[#03346E] rounded-sm">Cancel</button>
          </div>
      </Form>
    </div>
  );
};

export default AddEmployeePage;
