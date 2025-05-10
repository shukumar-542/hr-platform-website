"use client";
import { BackButton } from "@/components/BackButton/BackButton";
import React, { useState } from "react";
import { Checkbox, Collapse, Button} from "antd";
import { TfiBag } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
const { Panel } = Collapse;

interface JobListingProps {
  jobTitle: string;
  location: string;
  jobType: string;

  experience: string;
  salaryRange: string;
  applicants: number;
  postedTime: string;
}

const ApplyForJobPage = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedSalaryRange, setSelectedSalaryRange] = useState<string[]>([]);

  const handleDepartmentChange = (checkedValues: any) => {
    setSelectedDepartments(checkedValues);
  };

  const handleJobTypeChange = (checkedValues: any) => {
    setSelectedJobTypes(checkedValues);
  };

  const handleExperienceChange = (checkedValues: any) => {
    setSelectedExperience(checkedValues);
  };

  const handleSalaryRangeChange = (checkedValues: any) => {
    setSelectedSalaryRange(checkedValues);
  };

  const clearAllFilters = () => {
    setSelectedDepartments([]);
    setSelectedJobTypes([]);
    setSelectedExperience([]);
    setSelectedSalaryRange([]);
  };

  const jobListings: JobListingProps[] = [
    {
      jobTitle: "Senior Manager",
      location: "Los Angeles, USA",
      jobType: "Full Time",
      experience: "1-2 Years",
      salaryRange: "$40-$50/hour",
      applicants: 155,
      postedTime: "2 Days Ago",
    },
    {
      jobTitle: "Financial Analyst",
      location: "California, USA",
      jobType: "Full Time",
      experience: "1-2 Years",
      salaryRange: "$35-$45/hour",
      applicants: 155,
      postedTime: "2 Days Ago",
    },
    {
      jobTitle: "Graphic Designer",
      location: "New York, USA",
      jobType: "Full Time",
      experience: "1-2 Years",
      salaryRange: "$55-$60/hour",
      applicants: 155,
      postedTime: "2 Days Ago",
    },
    {
      jobTitle: "Senior Manager",
      location: "California, USA",
      jobType: "Full Time",
      experience: "1-2 Years",
      salaryRange: "$45-$50/hour",
      applicants: 155,
      postedTime: "2 Days Ago",
    },
    {
      jobTitle: "Accountant",
      location: "Los Angeles, USA",
      jobType: "Full Time",
      experience: "1-2 Years",
      salaryRange: "$25-$35/hour",
      applicants: 155,
      postedTime: "2 Days Ago",
    },
    {
      jobTitle: "Financial Analyst",
      location: "New York, USA",
      jobType: "Full Time",
      experience: "1-2 Years",
      salaryRange: "$40-$50/hour",
      applicants: 155,
      postedTime: "2 Days Ago",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md min-h-[87vh]">
      <BackButton title="Jobs" />
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <div
            style={{
              width: 250,
              padding: "20px",
              borderRight: "1px solid #ddd",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <p>Filter</p>
              <Button type="link" onClick={clearAllFilters}>
                <p className="text-[#03346E]">Clear All</p>
              </Button>
            </div>

            <Collapse defaultActiveKey={["1", "2", "3", "4"]}>
              <Panel header="Department" key="1">
                <Checkbox.Group
                  value={selectedDepartments}
                  onChange={handleDepartmentChange}
                >
                  <Checkbox value="Human Resources (HR)">
                    Human Resources (HR)
                  </Checkbox>
                  <Checkbox value="IT & Systems">IT & Systems</Checkbox>
                  <Checkbox value="Finance & Payroll">
                    Finance & Payroll
                  </Checkbox>
                  <Checkbox value="Administration & Executive">
                    Administration & Executive
                  </Checkbox>
                  <Checkbox value="Scheduling & Compliance">
                    Scheduling & Compliance
                  </Checkbox>
                  <Checkbox value="Training & Development">
                    Training & Development
                  </Checkbox>
                  <Checkbox value="Operations">Operations</Checkbox>
                </Checkbox.Group>
              </Panel>

              <Panel header="Job Type" key="2">
                <Checkbox.Group
                  value={selectedJobTypes}
                  onChange={handleJobTypeChange}
                >
                  <Checkbox value="Full Time">Full Time</Checkbox>
                  <Checkbox value="Part Time">Part Time</Checkbox>
                  <Checkbox value="Contractual">Contractual</Checkbox>
                </Checkbox.Group>
              </Panel>

              <Panel header="Experience" key="3">
                <Checkbox.Group
                  value={selectedExperience}
                  onChange={handleExperienceChange}
                >
                  <Checkbox value="Freshers">Freshers</Checkbox>
                  <Checkbox value="< 1 Year">{"< 1 Year"}</Checkbox>
                  <Checkbox value="1-2 Years">1-2 Years</Checkbox>
                  <Checkbox value="2-5 Years">2-5 Years</Checkbox>
                  <Checkbox value="5-10 Years">5-10 Years</Checkbox>
                  <Checkbox value="10+ Years">10+ Years</Checkbox>
                </Checkbox.Group>
              </Panel>

              <Panel header="Salary Range" key="4">
                <Checkbox.Group
                  value={selectedSalaryRange}
                  onChange={handleSalaryRangeChange}
                >
                  <Checkbox value="< $1,000">{"< $1,000"}</Checkbox>
                  <Checkbox value="$1,000-$5,000">$1,000-$5,000</Checkbox>
                  <Checkbox value="$5,000-$10,000">$5,000-$10,000</Checkbox>
                  <Checkbox value="$10,000-$20,000">$10,000-$20,000</Checkbox>
                  <Checkbox value="$20,000+">$20,000+</Checkbox>
                </Checkbox.Group>
              </Panel>
            </Collapse>
          </div>
        </div>
        <div className="col-span-10 ">
          <div className="grid grid-cols-3 gap-5">
            {jobListings.map((job, index) => (
              <div
                className="col-span-1  border border-[#E1E1E1] rounded-md shadow-xs "
                key={index}
              >
                <div className="flex items-center justify-center gap-5 border-b border-[#E1E1E1] py-5 ">
                  <TfiBag size={25} color="#03346E" />
                  <div>
                    <p className=" font-semibold">{job?.jobTitle}</p>
                    <div className="flex items-center">
                      <CiLocationOn color="#03346E" />
                      {job?.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 px-5 py-5">
                    <p className="bg-[#E6EBF1] px-5 py-1 rounded-full">{job?.jobType}</p>
                    <p className="bg-[#E6EBF1] px-5 py-1 rounded-full">{job?.experience}</p>
                </div>
                <div className="flex items-center gap-5 px-8 ">
                    <p>{job?.postedTime}</p>
                    <p>{job?.applicants} Applications</p>
                </div>
                <div className="flex justify-between px-7 py-6">
                   <p className="text-xl font-semibold text-[#03346E]">{job?.salaryRange}</p> 
                   <button className="bg-[#03346E] text-white px-4 py-2 rounded-sm cursor-pointer">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForJobPage;
