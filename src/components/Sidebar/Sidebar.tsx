"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import {
  PiBagSimpleLight,
  PiBookOpenText,
  PiCertificateLight,
  PiGraduationCap,
} from "react-icons/pi";
import { GrDocumentUser } from "react-icons/gr";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { IoBagOutline, IoSettingsOutline } from "react-icons/io5";
import { SlCalender, SlGraduation } from "react-icons/sl";
import { CiDollar, CiTimer } from "react-icons/ci";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

interface MenuItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
  sub_menu?: MenuItem[];
  roles: string[];
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const role = "EMPLOYEE";

  const links: MenuItem[] = [
    {
      path: "/",
      label: "Dashboard",
      icon: <MdOutlineDashboard size={25} />,
      roles: ["HR", "MANAGER", "EMPLOYEE"],
    },
    {
      path: "/team-members",
      label: "Team Members",
      icon: <GrDocumentUser size={25} />,
      roles: ["MANAGER"],
    },
    {
      path: "/schedule",
      label: "Schedule",
      icon: <SlCalender size={25} />,
      roles: ["MANAGER", "EMPLOYEE"],
    },
    {
      path: "/training-management",
      label: "Training Management",
      icon: <SlGraduation size={25} />,
      roles: ["MANAGER"],
    },
    {
      path: "/training-lessons",
      label: "Training Lessons",
      icon: <PiBookOpenText size={25} />,
      roles: ["MANAGER"],
    },
    {
      path: "/certifications",
      label: "Certifications",
      icon: <PiCertificateLight size={25} />,
      roles: ["MANAGER"],
    },
    {
      path: "/requirement-and-hiring",
      label: "Requirement & Hiring",
      icon: <PiBagSimpleLight size={25} />,
      roles: ["HR"],
    },
    {
      path: "/employee-management",
      label: "Employee Management",
      icon: <GrDocumentUser size={25} />,
      roles: ["HR"],
    },
    {
      path: "/shift-management",
      label: "Shift Management",
      icon: <LiaBusinessTimeSolid size={25} />,
      roles: ["HR"],
    },
    {
      path: "/attendance",
      label: "Attendance",
      icon: <CiTimer size={25} />,
      roles: ["EMPLOYEE"],
    },
    {
      path: "/documents",
      label: "Documents",
      icon: <HiOutlineClipboardDocumentList size={25} />,
      roles: ["EMPLOYEE"],
    },
    {
      path: "/jobs",
      label: "Jobs",
      icon: <IoBagOutline size={25} />,
      sub_menu: [
        {
          path: "/job/apply-for-job",
          label: "Apply for job",
          icon: <></>,
          roles: ["EMPLOYEE"],
        },
        {
          path: "/job/application-center ",
          label: "Application Center",
          icon: <></>,
          roles: ["EMPLOYEE"],
        },
      ],
      roles: ["EMPLOYEE"],
    },
    {
      path: "/training",
      label: "Training",
      icon: <PiGraduationCap size={25} />,
      sub_menu: [
        {
          path: "/training-and-resource",
          label: "Training & Resource",
          icon: <></>,
          roles: ["EMPLOYEE"],
        },
        {
          path: "/Training Certification",
          label: "training-certification",
          icon: <></>,
          roles: ["EMPLOYEE"],
        },
      ],
      roles: ["EMPLOYEE"],
    },
    {
      path: "/payroll",
      label: "Payroll",
      icon: <CiDollar size={25} />,
      roles: ["EMPLOYEE"],
    },
    {
      path: "/setting",
      label: "Setting",
      icon: <IoSettingsOutline size={25} />,
      roles: ["MANAGER", "HR", "EMPLOYEE"],
    },
  ];

  const visibleLinks = links.filter((link) => link.roles.includes(role));

  const handleSubMenuToggle = (path: string) => {
    setOpenSubMenu((prev) => (prev === path ? null : path));
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
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
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block z-40`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center">
            <p className="text-black mt-8 text-3xl font-bold">LOGO</p>
          </div>

          {/* Sidebar Menu Items */}
          {visibleLinks.map((item, index) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            const hasSubMenu = item.sub_menu && item.sub_menu.length > 0;
            const isSubMenuOpen = openSubMenu === item.path;

            return (
              <div key={index}>
                {hasSubMenu ? (
                  <>
                    <div
                      className={`cursor-pointer flex justify-between items-center pl-8 pr-4 gap-2 ${
                        isActive || isSubMenuOpen
                          ? "bg-[#E6EBF1] text-[#2A216D] shadow-sm"
                          : "bg-white text-[#5C5C5C]"
                      } py-[12px] hover:bg-[#E6EBF1] hover:text-[#2A216D] rounded-tr-md rounded-br-md font-medium text-[16px]`}
                      onClick={() => handleSubMenuToggle(item.path)}
                    >
                      <div className="flex gap-2 items-center">
                        {item.icon}
                        {item.label}
                      </div>
                      <div className="transition-all duration-500 ease-in-out">
                        {isSubMenuOpen ? (
                          <IoIosArrowDown size={18} />
                        ) : (
                          <IoIosArrowForward size={18} />
                        )}
                      </div>
                    </div>

                    {/* Sub Menu Items */}
                    <div
                      className={`ml-10 overflow-hidden transition-all duration-500 ease-in-out ${
                        isSubMenuOpen
                          ? "max-h-96 opacity-100 "
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {isSubMenuOpen &&
                        Array.isArray(item.sub_menu) &&
                        item.sub_menu.length > 0 && (
                          <div className="ml-10">
                            {item.sub_menu
                              .filter((subItem) => subItem.roles.includes(role))
                              .map((subItem, subIndex) => {
                                const isSubActive = pathname === subItem.path;

                                return (
                                  <Link
                                    href={subItem.path}
                                    key={subIndex}
                                    className={`block py-2 px-2 rounded-md  ${
                                      isSubActive
                                        ? "text-[#2A216D] font-medium"
                                        : "text-gray-600"
                                    } hover:text-[#2A216D]`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                );
                              })}
                          </div>
                        )}
                    </div>
                  </>
                ) : (
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
