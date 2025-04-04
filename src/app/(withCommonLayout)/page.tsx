import React from "react";
import img from "../../assets/profileHome.png";
import img1 from "../../assets/article_person.png";
import img2 from "../../assets/calendar_clock.png";
import img3 from "../../assets/article.png";
import img4 from "../../assets/work.png";
import img5 from "../../assets/task.png";
import emp1 from "../../assets/emp1.png";
import emp2 from "../../assets/emp2.png";
import emp3 from "../../assets/emp3.png";
import Image from "next/image";
import { FaUserLarge } from "react-icons/fa6";
import TimeAndAttendance from "@/components/TimeAndAttendance/TimeAndAttendance";
import ExpiringCertifications from "@/components/ExpiringCertifications/ExpiringCertifications";
import Link from "next/link";
import TimeOffRequest from "@/components/TimeOffRequest/TimeOffRequest";
const page = () => {
  // ===== Time and attendance table data === //
  const data = [
    {
      key: "1",
      employee: "Annette Black",
      image: emp1,
      shift: "Morning",
      clockIn: "9:02 AM",
      clockOut: "4:04 PM",
      status: "Present",
    },
    {
      key: "2",
      employee: "Eleanor Pena",
      image: emp2,
      shift: "Evening",
      clockIn: "5:40 PM",
      clockOut: "9:05 PM",
      status: "Late",
    },
    {
      key: "3",
      employee: "Albert Flores",
      image: emp3,
      shift: "Morning",
      clockIn: "9:05 AM",
      clockOut: "4:01 PM",
      status: "Present",
    },
  ];

  //   ========= Time off request table data ==== //
  const timeOffTableData = [
    {
      key: "#123",
      employee: "Annette Black",
      image: emp1,
      requestDate: "12/03/25",
      leaveType: "Sick Leave",
      duration: "2 Days",
      status: "Pending",
      from : "12/03/25-14/02/25"
    },
    {
      key: "#124",
      employee: "Ranaid Richoards",
      image: emp2,
      requestDate: "12/03/25",
      leaveType: "Sick Leave",
      duration: "2 Days",
      status: "Pending",
      from : "12/03/25-14/02/25"
    },
  ];
  return (
    <div className="pb-10">
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
          <p className="text-xl text-[#333333] font-semibold">
            Time-off Requests
          </p>
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
          <p className="text-2xl text-[#333333] font-semibold">Open Position</p>
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
          <p className="text-2xl text-[#333333] font-semibold">New Applicant</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-5">
        <div className="bg-white shadow-2xl rounded-md p-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Time & Attendance</p>
            <Link href={"/time-and-attendance"}>
              <p className="text-[#03346E] font-semibold cursor-pointer">
                View All
              </p>
            </Link>
          </div>
          <TimeAndAttendance data={data} />
        </div>
        <ExpiringCertifications />
      </div>
      <div>
        <div className="bg-white shadow-2xl rounded-md p-4 mt-10">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Time-off Request</p>
            <Link href={"/time-and-attendance"}>
              <p className="text-[#03346E] font-semibold cursor-pointer">
                View All
              </p>
            </Link>
          </div>
          <TimeOffRequest timeOffTableData={timeOffTableData}  />
        </div>
      </div>
    </div>
  );
};

export default page;
