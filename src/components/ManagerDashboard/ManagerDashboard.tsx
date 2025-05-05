import Image from "next/image";
import React from "react";
import img from "../../assets/profileHome.png";
import img1 from "../../assets/school.png";
import img2 from "../../assets/acute.png";
import img3 from "../../assets/article.png";
import img4 from "../../assets/calendar_clock.png";
import img5 from "../../assets/shift.png";
import { FaUserLarge } from "react-icons/fa6";
import Link from "next/link";
import TimeAndAttendance from "../TimeAndAttendance/TimeAndAttendance";
import ExpiringCertifications from "../ExpiringCertifications/ExpiringCertifications";
import emp1 from "../../assets/emp1.png";
import emp2 from "../../assets/emp2.png";
import emp3 from "../../assets/emp3.png";
import TimeOffRequest from "../TimeOffRequest/TimeOffRequest";
const ManagerDashboard = () => {
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
            <span>82</span>
          </p>
          <p className="text-xl text-[#333333] font-semibold">Team Members</p>
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
          <p className="text-xl text-[#333333] font-semibold">Total Training</p>
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
            <span>23</span>
          </p>
          <p className="text-xl text-[#333333] font-semibold">
            Ongoing Training
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
            <span>268</span>
          </p>
          <p className="text-xl text-[#333333] font-semibold">
            Issue Certificates
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
            <span>25</span>
          </p>
          <p className="text-2xl text-[#333333] font-semibold">
            Time-off Request
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
            <span>07</span>
          </p>
          <p className="text-2xl text-[#333333] font-semibold">
            Shift Swap Request
          </p>
        </div>
      </div>

      {/* Time attendance and shift swap request section */}
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

      {/* Time Off request section */}
      <div>
        <div className="bg-white shadow-2xl rounded-md p-4 mt-10">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Time-off Request</p>
            <Link href={"/time-off-request"}>
              <p className="text-[#03346E] font-semibold cursor-pointer">
                View All
              </p>
            </Link>
          </div>
          <TimeOffRequest timeOffTableData={timeOffTableData} />
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
