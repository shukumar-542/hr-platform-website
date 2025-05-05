"use client";

import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { PiBagSimpleLight } from "react-icons/pi";
import { GrDocumentUser } from "react-icons/gr";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";

interface MenuItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
  sub_menu?: MenuItem[];
  roles : string[]
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const role = "HR";

  const links: MenuItem[] = [
    {
      path: "/",
      label: "Dashboard",
      icon: <MdOutlineDashboard size={25} />,
      roles : ['HR' , "MANAGER" , "EMPLOYEE"]
    },
  
    {
      path: "/requirement-and-hiring",
      label: "Requirement & Hiring",
      icon: <PiBagSimpleLight size={25} />,
      roles : ['HR']
    },
    {
      path: "/employee-management",
      label: "Employee Management",
      icon: <GrDocumentUser size={25} />,
      roles : ['HR']
    },
    {
      path: "/shift-management",
      label: "Shift Management",
      icon: <LiaBusinessTimeSolid size={25} />,
      roles : ['HR']
    },
    {
      path: "/setting",
      label: "Setting",
      icon: <IoSettingsOutline size={25} />,
      roles : ['MANAGER', "HR", "EMPLOYEE"]
    },
  ];

    // Filter links based on user role
    const visibleLinks = links.filter(link => link.roles.includes(role));

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden fixed top-5 left-5 z-50">
        <button
          style={{ boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.24)" }}
          className="text-[#03346E] bg-[#F2F2F2] p-2 rounded-md shadow-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-[#ffff] text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block z-40`}
      >
        <div className="flex flex-col gap-5 ">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <p className="text-black mt-8 text-3xl font-bold">LOGO</p>
          </div>

          {/* Sidebar Links */}
          {visibleLinks.map((item, index) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <div key={index}>
                <Link
                  href={item.path}
                  className={`cursor-pointer flex justify-start pl-8 mr-3 gap-2 items-center ${
                    isActive
                      ? "bg-[#E6EBF1] text-[#2A216D] shadow-sm"
                      : "bg-white text-[#5C5C5C]"
                  } py-[12px] hover:bg-[#E6EBF1] hover:text-[#2A216D] rounded-tr-md rounded-br-md font-medium text-[16px]`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
