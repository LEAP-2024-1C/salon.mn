"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useContext, useState, createContext, useEffect } from "react";

export interface IEmployee {
  _id: string;
  name: string;
  email: string;
  password: string;
  profile_img: string;
  discription: string;
  category: string;
  subCategory: { name: string };
  comment: [
    {
      user: string;
      description: string;
      rate: number;
    }
  ];
  availableDates: [{ startDate: Date; endDate: Date; _id: string }];
  unAvailableTime: [Date];
}

interface IContext {
  employee: IEmployee;
  setEmployee: React.Dispatch<React.SetStateAction<IEmployee>>;
  employees: IEmployee[];
  setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>;
  getEmployee: () => void;
}

export const EmployeesContext = createContext<IContext>({
  employees: [],
  setEmployees: () => {},
  employee: {} as IEmployee,
  setEmployee: () => {},
  getEmployee: () => {},
});

const EmployeesProvider = ({ children }: { children: React.ReactNode }) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [employee, setEmployee] = useState<IEmployee>({} as IEmployee);
  const { employeeID } = useParams();
  const fetchEmployeeData = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "http://localhost:8008/api/v1/employee/all-employee",
      });
      if (res.status === 200) {
        setEmployees(res.data.allEmployee);
      }
    } catch (error) {
      console.error(
        "Emloyees ийн датаагаа backend ээс авахад алдаа гарсан байна.",
        error
      );
    }
  };

  const getEmployee = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `http://localhost:8008/api/v1/employee/get-employee/${employeeID}`,
      });
      if (res.status === 200) {
        setEmployee(res.data.employee);
      }
    } catch (error) {
      console.log("Params employee harahad aldaa garlaa", error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);
  useEffect(() => {
    getEmployee();
  }, [employeeID]);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        setEmployees,
        employee,
        setEmployee,
        getEmployee,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useUser = () => {
  return useContext(EmployeesContext);
};

export default EmployeesProvider;
