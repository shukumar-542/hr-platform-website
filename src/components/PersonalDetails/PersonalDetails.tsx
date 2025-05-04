import React from "react";

const PersonalDetails = () => {
  return (
    <div className="border border-[#E1E1E1] shadow-2xs rounded-md p-5 md:p-10 space-y-8 ">
      <div>
        <p className="text-sm text-gray-500 mb-1">Full Name</p>
        <p className="border border-[#2A216D] px-3 py-2 rounded-md">Jemes Clarck</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Email</p>
        <p className="border border-[#2A216D]  px-3 py-2 rounded-md">jemessmith335@gmail.com</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Phone Number</p>
        <p className="border border-[#2A216D]  px-3 py-2 rounded-md">3645745868688</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Address</p>
        <p className="border border-[#2A216D] px-3 py-2 rounded-md">
          3517 W. Gray St. Utica, Pennsylvania 57867
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
          <p className="border border-[#2A216D] px-3 py-2 rounded-md">12/03/2002</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Gender</p>
          <p className="border border-[#2A216D] px-3 py-2 rounded-md">Male</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
