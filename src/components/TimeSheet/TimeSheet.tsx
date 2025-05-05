import { Select, Table } from "antd";
import React, { useState } from "react";

const { Option } = Select;
interface DataType {
  date: string;
  clockIn: string;
  clockOut: string;
  breakTime: string;
  location: string;
  totalHours: string;
  overtime: string;
  status: "Present" | "Late" | "Absent";
}

const TimeSheet = () => {
  const [month, setMonth] = useState("February, 2025");

  const handleMonthChange = (value: string) => {
    setMonth(value);
  };
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Clock In",
      dataIndex: "clockIn",
      key: "clockIn",
    },
    {
      title: "Clock Out",
      dataIndex: "clockOut",
      key: "clockOut",
    },
    {
      title: "Break Time",
      dataIndex: "breakTime",
      key: "breakTime",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Total Hours",
      dataIndex: "totalHours",
      key: "totalHours",
    },
    {
      title: "Overtime",
      dataIndex: "overtime",
      key: "overtime",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: "Present" | "Late" | "Absent") => {
        let color = "green";
        if (status === "Late") {
          color = "yellow";
        } else if (status === "Absent") {
          color = "red";
        }
        return (
          <p
            className={` text-center rounded-full px-2 py-1 ${
              status === "Present"
                ? "text-[#18C33D] bg-[#E7F8EB]"
                : status === "Late"
                ? "text-[#D9B800] bg-[#FBF7E5]"
                : "text-[#D80027] bg-[#F8E7E7]"
            }`}
          >
            {status}
          </p>
        );
      },
    },
  ];

  const data: DataType[] = [
    {
      date: "01/02/25",
      clockIn: "9:00 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "Los Angeles, USA",
      totalHours: "8h 33m",
      overtime: "1 Hour",
      status: "Present",
    },
    {
      date: "02/02/25",
      clockIn: "9:00 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "San Diego, USA",
      totalHours: "8h 33m",
      overtime: "------",
      status: "Present",
    },
    {
      date: "03/02/25",
      clockIn: "10:12 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "Monterrey, MX",
      totalHours: "8h 33m",
      overtime: "1 Hour",
      status: "Late",
    },
    {
      date: "04/02/25",
      clockIn: "9:00 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "Guadalajara, MX",
      totalHours: "8h 33m",
      overtime: "------",
      status: "Present",
    },
    {
      date: "05/02/25",
      clockIn: "9:00 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "Guadalajara, MX",
      totalHours: "8h 33m",
      overtime: "1 Hour",
      status: "Late",
    },
    {
      date: "06/02/25",
      clockIn: "------",
      clockOut: "------",
      breakTime: "------",
      location: "------",
      totalHours: "------",
      overtime: "------",
      status: "Absent",
    },
    {
      date: "07/02/25",
      clockIn: "9:00 am",
      clockOut: "4:00 pm",
      breakTime: "30 min",
      location: "Los Angeles, USA",
      totalHours: "8h 33m",
      overtime: "------",
      status: "Present",
    },
  ];
  return (
    <div className="border border-[#E1E1E1] shadow-2xs rounded-md p-5 md:p-10 space-y-8 ">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Time Sheet Breakdown</p>
        <Select
          defaultValue={month}
          style={{ width: 200 }}
          onChange={handleMonthChange}
        >
          <Option value="January, 2025">January, 2025</Option>
          <Option value="February, 2025">February, 2025</Option>
          <Option value="March, 2025">March, 2025</Option>
          {/* Add more months as needed */}
        </Select>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-2">
        <div className="text-center border border-[#EBEBEB] rounded-md shadow-2xs py-5">
            <p className="font-semibold">Total Working Days</p>
            <p className="text-xl font-bold">24</p>
        </div>
        <div className="text-center border border-[#EBEBEB] rounded-md shadow-2xs py-5 ">
            <p className="font-semibold">Present</p>
            <p className="text-xl font-bold">18</p>
        </div>
        <div className="text-center border border-[#EBEBEB] rounded-md shadow-2xs py-5">
            <p className="font-semibold">Absent</p>
            <p className="text-xl font-bold">02</p>
        </div>
        <div className="text-center border border-[#EBEBEB] rounded-md shadow-2xs py-5">
            <p className="font-semibold">Late</p>
            <p className="text-xl font-bold">05</p>
        </div>
        <div className="text-center border border-[#EBEBEB] rounded-md shadow-2xs py-5">
            <p className="font-semibold">Leave</p>
            <p className="text-xl font-bold">04</p>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="date"
        bordered={false}
        pagination={false}
      />
    </div>
  );
};

export default TimeSheet;
