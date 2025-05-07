import { BackButton } from "@/components/BackButton/BackButton";
import React from "react";
import img from "@/assets/emp1.png";
import Image from "next/image";
const JobDetailsPage = () => {
  return (
    <div className="bg-white p-5 rounded-md min-h-[87vh]">
      <BackButton title="Job Details" />
      {/* Project details and team lead details */}
      <div className="border-b border-[#DFDFDF] pb-8">
        <p className="text-2xl font-semibold mt-5">Financial Analyst</p>
        <p className=" text-[#333333]">
          4517 Washington Ave. Manchester, Kentucky
        </p>

        <div className="flex items-center justify-between  mt-5">
          <button className="border border-[#B1C0D2] text-[#03346E] px-2 py-1 rounded-sm">
            Edit Job Opening
          </button>
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center  gap-2 border-r  border-[#DFDFDF] pr-10">
              <Image
                src={img}
                height={100}
                width={100}
                alt="img"
                className="rounded-full h-14 w-14"
              />
              <div>
                <p>Hiring Lead</p>
                <p className="font-semibold">Annette Black</p>
              </div>
            </div>
            <div>
              <p>Status</p>
              <p className="font-semibold">Open</p>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default JobDetailsPage;
