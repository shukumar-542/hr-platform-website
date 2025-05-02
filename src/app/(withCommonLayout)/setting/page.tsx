"use client"
import React, { useState } from "react";
import { BsKey } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

const SettingPage = () => {
  const [setting, setSetting] = useState("profile")

  return (
    <div className="grid grid-cols-12 gap-5 h-[87vh] ">
      <div className="bg-white p-4 col-span-2 rounded-sm">
        <p className="font-bold text-xl mb-5">Settings</p>
        <div onClick={()=>setSetting('profile')} className={`flex items-center gap-2  cursor-pointer justify-center py-2 rounded-sm  ${setting === "profile"  ? "bg-[#E6EBF1] text-[#03346E]" : "text-[#5C5C5C]"}`}>
          <FaRegUserCircle size={22} />
          <p>My Profile</p>
        </div>
        <div onClick={()=>setSetting('password')} className={`flex items-center gap-2 py-2 rounded-sm justify-center mt-2 text-[#5C5C5C] cursor-pointer ${setting === "password"  ? "bg-[#E6EBF1] text-[#03346E]" : ""}`}>
        <BsKey size={22} />
          <p>Change Password</p>
        </div>
      </div>
      <div className="bg-white col-span-10 rounded-sm">
        
      </div>
    </div>
  );
};

export default SettingPage;
