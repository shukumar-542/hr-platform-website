import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between items-center gap-0 bg-[#F2F2F2] ">
      <div className="w-[10px] md:w-[300px] bg-[var(--primary-color)]  h-screen overflow-y-scroll  ">
        <Sidebar />
      </div>

      <div className=" w-full h-screen  overflow-y-scroll">
        <Header />
        <div className="p-6 bg-[#F2F2F2] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
