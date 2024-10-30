"use client";
import React from "react";
import EmployeesCard from "@/components/cards/employees-card";

const Artists = () => {
  return (
    <div className="bg-[#101828] p-5 grid grid-cols-2 gap-5">
      <EmployeesCard />
      <EmployeesCard />
      <EmployeesCard />
    </div>
  );
};
export default Artists;
