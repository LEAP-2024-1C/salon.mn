'use client';

import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useContext, useState, createContext, useEffect } from 'react';

export interface IEmployee {
  _id: string;
  name: string;
  email: string;
  password: string;
  profile_img: string;
  discription: string;
  category: string;
  comment: [
    {
      user: string;
      description: string;
      rate: number;
    }
  ];
}

interface IContext {
  employee: IEmployee | null;
  setEmployee: React.Dispatch<React.SetStateAction<IEmployee | null>>;
  employees: IEmployee[];
  setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>;
}

export const EmployeesContext = createContext<IContext>({
  employees: [],
  setEmployees: () => {},
  employee: null,
  setEmployee: () => {}
});

const EmployeesProvider = ({ children }: { children: React.ReactNode }) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [employee, setEmployee] = useState<IEmployee | null>(null);

  const { employeeID } = useParams();

  const fetchEmployeeData = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:8008/api/v1/employee/all-employee'
      });

      if (res.status === 200) {
        setEmployees(res.data.allEmployee);
      }
    } catch (error) {
      console.log(
        'Emloyees ийн датаагаа backend ээс авахад алдаа гарсан байна.',
        error
      );
    }
  };

  const getEmployee = async (employeeID: string | string[]) => {
    try {
      const res = await axios({
        method: 'get',
        url: `http://localhost:8008/api/v1/employee/get-employee/${employeeID}`
      });
      if (res.status === 200) {
        setEmployee(res.data.employee);
      }
    } catch (error) {
      console.log('Params employee harahad aldaa garlaa', error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);
  useEffect(() => {
    getEmployee(employeeID);
  }, [employeeID]);

  return (
    <EmployeesContext.Provider
      value={{ employees, setEmployees, employee, setEmployee }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useUser = () => {
  return useContext(EmployeesContext);
};

export default EmployeesProvider;
