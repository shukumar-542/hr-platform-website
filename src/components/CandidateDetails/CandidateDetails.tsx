import React from 'react'

const CandidateDetails = () => {
  return (
    <div className="border border-[#E1E1E1] shadow-2xs rounded-md p-2 md:p-10 w-full space-y-10">
      <div className="">
        <p className="text-sm text-gray-500">Email</p>
        <p className="font-semibold">smithjons@gmail.com</p>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">Phone Number</p>
        <p className="font-semibold">3365778687979</p>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">Expected Salary</p>
        <p className="font-semibold">$550</p>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">Available Start Time</p>
        <p className="font-semibold">15 January, 2025</p>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">Address</p>
        <p className="font-semibold">Elgin St. Celina, Delaware 10299</p>
      </div>
     
    </div>
  )
}

export default CandidateDetails