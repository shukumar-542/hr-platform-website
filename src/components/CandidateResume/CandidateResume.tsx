import React from "react";
import img from "@/assets/cv.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";

const CandidateResume = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-md shadow-xl p-5 mb-5 md:mb-0">
      <div className="flex justify-end">
        <div className="flex items-center  gap-2">
          <p>page 1 of 1 </p>
          <button className="bg-white rounded-sm p-1 shadow-md">
            <MdArrowBackIosNew />
          </button>
          <button className="bg-white rounded-sm p-1 shadow-md">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Image
        src={img}
        height={800}
        width={800}
        className="w-full  md:h-[900px] p-5"
        alt="img"
      />
    </div>
  );
};

export default CandidateResume;
