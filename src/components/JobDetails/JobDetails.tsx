import React from "react";

const JobDetails = () => {
  return (
    <div className="border border-[#E1E1E1] shadow-2xs rounded-md p-5 md:p-10 space-y-8 ">
      <div>
        <p className="text-sm text-gray-500 mb-1">Employee ID</p>
        <p className="border px-3 py-2 rounded-md">5466346</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Job Title</p>
        <p className="border px-3 py-2 rounded-md">Marketing Manager</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">House/Business</p>
          <p className="border px-3 py-2 rounded-md">Farm House 2</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Department</p>
          <p className="border px-3 py-2 rounded-md">Sales</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Employment Type</p>
          <p className="border px-3 py-2 rounded-md">Full Time</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Start Date</p>
          <p className="border px-3 py-2 rounded-md">12/03/2002</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Compensation</p>
          <p className="border px-3 py-2 rounded-md">$25000/year</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Pay Schedule</p>
          <p className="border px-3 py-2 rounded-md">Twice a month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Work Email</p>
          <p className="border px-3 py-2 rounded-md">jemessmith@company.com</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Manager</p>
          <p className="border px-3 py-2 rounded-md">Annette Black</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
