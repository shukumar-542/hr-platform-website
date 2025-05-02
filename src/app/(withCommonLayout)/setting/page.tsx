"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsKey } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import img from "../../../assets/profileHome.png";
import { Form, Input } from "antd";

const SettingPage = () => {
  const [setting, setSetting] = useState("profile");

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-[87vh] ">
      <div className="bg-white p-4 col-span-12 md:col-span-2 rounded-sm">
        <p className="font-bold text-xl mb-5">Settings</p>
        <div
          onClick={() => setSetting("profile")}
          className={`flex items-center gap-2  cursor-pointer justify-center py-2 rounded-sm  ${
            setting === "profile"
              ? "bg-[#E6EBF1] text-[#03346E]"
              : "text-[#5C5C5C]"
          }`}
        >
          <FaRegUserCircle size={22} />
          <p>My Profile</p>
        </div>
        <div
          onClick={() => setSetting("password")}
          className={`flex items-center gap-2 py-2 rounded-sm justify-center mt-2 text-[#5C5C5C] cursor-pointer ${
            setting === "password" ? "bg-[#E6EBF1] text-[#03346E]" : ""
          }`}
        >
          <BsKey size={22} />
          <p>Change Password</p>
        </div>
      </div>
      <div className="bg-white col-span-12 md:col-span-10 rounded-sm flex flex-col justify-center items-center">
        {setting === "profile" ? (
          <>
            <p className="text-xl font-semibold mb-8">Personal Details</p>
            <div>
              <Image
                src={img}
                height={100}
                width={100}
                className="rounded-full"
                alt="profile"
              />
            </div>
            <div className="mt-5 space-y-3">
              <p className="flex  justify-between  w-full min-w-2xs">
                <span>User Name : </span>
                <span>Robert Smith</span>
              </p>
              <p className="flex  justify-between  w-full min-w-2xs">
                <span>Email: </span>
                <span>shukumar542@gmail.com</span>
              </p>
              <p className="flex  justify-between  w-full min-w-2xs">
                <span>Contact no: </span>
                <span>+8801872999038</span>
              </p>
            </div>
            <button className="mt-20 bg-[#03346E] text-white px-6 py-2 rounded-sm cursor-pointer">
              Edit
            </button>
          </>
        ) : (
          <div className=" w-full max-w-xl">
            <p className="text-xl font-semibold mb-12 text-center ">
              Change Password
            </p>
            <Form layout="vertical">
              <Form.Item label="Current Password">
                <Input.Password placeholder="*********" className="min-w-2xl" />
              </Form.Item>
              <Form.Item label="New Password">
                <Input.Password placeholder="*********" className="min-w-2xl" />
              </Form.Item>
              <Form.Item label="Confirm New Password">
                <Input.Password placeholder="*********" className="min-w-2xl" />
              </Form.Item>
              <div className="flex justify-center">
                <button className="bg-[#03346E] text-white px-6 py-2 rounded-sm cursor-pointer">
                  Change Password
                </button>
              </div>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingPage;
