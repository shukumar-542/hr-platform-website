"use client";
import { Form, Input } from "antd";
import React, { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import defaultImg from "../../assets/profileHome.png";
import Image from "next/image";

const EditProfile = () => {
  const [image, setImage] = useState<File | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div>
      <p className="text-xl font-semibold mb-12 text-center ">
        Edit Your Profile
      </p>

      {/* Profile image upload preview */}
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
          // Otherwise, show default image using Next.js Image
          <Image
            src={defaultImg}
            alt="Default profile"
            width={140}
            height={140}
            className="rounded-full object-cover"
          />
        )}

        <label
          htmlFor="img"
          className="absolute top-[95px] -right-2 bg-[#03346E] rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
        >
          <IoCameraOutline size={22} className="text-white" />
        </label>
      </div>

      <div className="mt-10 min-w-xl">
        <Form layout="vertical">
          <Form.Item label="User Name">
            <Input placeholder="Robert Smith" />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="Robertsmith@gmail.com" />
          </Form.Item>
          <Form.Item label="Contact no">
            <Input placeholder="+99007007007" />
          </Form.Item>
          <div className="flex justify-center">
            <button className="bg-[#03346E] text-white px-6 py-2 rounded-sm cursor-pointer">
              Save Changes
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
