import React from "react";

import HrDashboard from "@/components/HrDashboard/HrDashboard";
import ManagerDashboard from "@/components/ManagerDashboard/ManagerDashboard";
import EmployeeDashboard from "@/components/EmployeeDashboard/EmployeeDashboard";

type UserRole = "HR" | "MANAGER" | "EMPLOYEE";
const userRole = "MANAGER" as UserRole;

const Page = () => {
  const renderContent = () => {
    switch (userRole) {
      case "MANAGER":
        return <ManagerDashboard />;
      case "HR":
        return <HrDashboard />;
      case "EMPLOYEE":
        return <EmployeeDashboard />;
      default:
        return <p>You are not authorized to view this page.</p>;
    }
  };

  return <>{renderContent()}</>;
};

export default Page;
