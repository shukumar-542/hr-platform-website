import React from "react";
import img from "../../assets/profileHome.png";
import img1 from "../../assets/article_person.png";
import img2 from "../../assets/calendar_clock.png";
import img3 from "../../assets/article.png";
import img4 from "../../assets/work.png";
import img5 from "../../assets/task.png";
import Image from "next/image";
import { FaUserLarge } from "react-icons/fa6";
import TimeAndAttendance from "@/components/TimeAndAttendance/TimeAndAttendance";
import ExpiringCertifications from "@/components/ExpiringCertifications/ExpiringCertifications";
const page = () => {
  return (
    <div>
      <div className="bg-white flex items-center gap-3 p-2 rounded-sm">
        <Image
          src={img}
          height={200}
          width={200}
          className="h-10 w-10 rounded-full"
          alt="img"
        />
        <p className="text-xl font-semibold">Good Morning , Robert</p>
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-5 mt-5">
        <div className="bg-white w-full text-center py-8 rounded-md shadow-xl space-y-8">
          <p className="flex items-center justify-center gap-2 text-[#03346E] text-3xl font-semibold">
            <FaUserLarge color="#03346E" />
            <span>82,902</span>
          </p>
          <p className="text-xl text-[#333333] font-semibold">Total Employee</p>
        </div>
        <div className="bg-white w-full text-center py-8 rounded-md shadow-xl space-y-8">
          <p className="flex items-center justify-center gap-2 text-[#03346E] text-3xl font-semibold">
            <Image
              src={img1}
              height={200}
              width={200}
              className="h-10 w-10 "
              alt="img"
            />
            <span>05</span>
          </p>
          <p className="text-xl text-[#333333] font-semibold">New Employee</p>
        </div>

        {/* Second  */}
        <div className="bg-white w-full text-center py-8 rounded-md shadow-xl space-y-8">
          <p className="flex items-center justify-center gap-2 text-[#03346E] text-3xl font-semibold">
            <Image
              src={img2}
              height={200}
              width={200}
              className="h-10 w-10 "
              alt="img"
            />
            <span>25</span>
          </p>
          <p className="text-xl text-[#333333] font-semibold">Time-off Requests</p>
        </div>
        <div className="bg-white w-full text-center py-8 rounded-md shadow-xl space-y-8">
          <p className="flex items-center justify-center gap-2 text-[#03346E] text-3xl font-semibold">
          <Image
              src={img3}
              height={200}
              width={200}
              className="h-10 w-10 "
              alt="img"
            />
            <span>12</span>
          </p>
          <p className="text-xl text-[#333333] font-semibold">
            Expiring Certificates
          </p>
        </div>
        <div className="bg-white w-full text-center py-8 rounded-md shadow-xl space-y-8">
          <p className="flex items-center justify-center gap-2 text-[#03346E] text-3xl font-semibold">
          <Image
              src={img4}
              height={200}
              width={200}
              className="h-10 w-10 "
              alt="img"
            />
            <span>07</span>
          </p>
          <p className="text-2xl text-[#333333] font-semibold">
            Open Position
          </p>
        </div>
        <div className="bg-white w-full text-center py-8 rounded-md shadow-xl space-y-8">
          <p className="flex items-center justify-center gap-2 text-[#03346E] text-3xl font-semibold">
          <Image
              src={img5}
              height={200}
              width={200}
              className="h-10 w-10 "
              alt="img"
            />
            <span>23</span>
          </p>
          <p className="text-2xl text-[#333333] font-semibold">
            New Applicant
          </p>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-5">
            <TimeAndAttendance/>
            <ExpiringCertifications/>
        </div>
        <div>
            
        </div>

    </div>
  );
};

export default page;
