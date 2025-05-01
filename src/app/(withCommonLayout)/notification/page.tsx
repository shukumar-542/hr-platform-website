import { BackButton } from "@/components/BackButton/BackButton";
import React from "react";
import { FiTrash } from "react-icons/fi";
const notifications = [
  {
    title: "Upcoming Expiring Certificate",
    message:
      "The Certificate of HCCI for John is expiring on 12/02/25. Please ensure renewal to maintain compli...",
    time: "Just Now",
    highlight: false,
  },
  {
    title: "New Employee Document Uploaded",
    message:
      "A new [Document Name] has been uploaded for [Employee Name]. Please review and verify...",
    time: "5 min ago",
    highlight: true,
  },
  {
    title: "New Hire Alert!",
    message:
      "A new employee, [Employee Name], has been successfully onboarded in the [Department].",
    time: "30 min ago",
    highlight: false,
  },
  {
    title: "Pending Time-Off Request",
    message:
      "Employee Name has submitted a [Type of Leave] request from [Start Date] to [End Date].",
    time: "6 hours ago",
    highlight: true,
  },
  {
    title: "Training Session Reminder",
    message:
      "The [Training Name] session is scheduled for [Date & Time]. Please ensure [Employee Name] attends.",
    time: "8 hours ago",
    highlight: false,
  },
];

const NotificationPage = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <BackButton title="Notifications" />
      <p>Showing 48 Notifications</p>
      <div className="w-full  bg-white rounded shadow-md p-4">
        {notifications.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-start p-3 rounded-md ${
              item.highlight ? "bg-[#F3F6FF]" : ""
            }`}
          >
            <div>
              <p className="font-semibold text-sm text-[#333]">{item.title}</p>
              <p className="text-sm text-[#666]">{item.message}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {item.time}
              </span>
              <FiTrash className="text-red-500 cursor-pointer mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
