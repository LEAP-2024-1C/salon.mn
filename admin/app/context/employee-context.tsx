'use client';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import React, { useContext, useState, createContext, useEffect } from 'react';

export interface IEmployee {
  _id: string;
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
  profile_img: string;
  discription: string;
  category: {
    name: string;
    _id: string;
  };
  comment: [
    {
      user: string;
      description: string;
      rate: number;
    }
  ];
}

interface ICreateEm {
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
  profile_img: string;
  discription: string;
  category: string;
}
interface IContext {
  employees: IEmployee[];
  setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>;

  employee: ICreateEm;
  setEmployee: React.Dispatch<React.SetStateAction<ICreateEm>>;
}

export const EmployeesContext = createContext<IContext>({
  employees: [],
  setEmployees: () => {},

  employee: {
    name: '',
    email: '',
    phoneNumber: 0,
    password: '',
    profile_img: '',
    discription: '',
    category: ''
  },
  setEmployee: () => {}
});

const EmployeesProvider = ({ children }: { children: React.ReactNode }) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [employee, setEmployee] = useState<ICreateEm>({} as ICreateEm);

  // {
  //   name: '',
  //   email: '',
  //   phoneNumber: 0,
  //   password: '',
  //   profile_img: '',
  //   discription: '',
  //   category: ''
  // }

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
      toast.error('Ажилтны дата татахад алдаа гарлаа.');
    }
  };

  const createdEmployee = async () => {
    try {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:8008/api/v1/employee/created-employee',
        data: employees
      });
      if (res.status === 200) {
        toast.success('Aжилтан амжилттай үүслээв');
      }
      // await fetchEmployeeData()
    } catch (error) {
      toast.error('Ажилтан үүсгэхэд алдаа гарлаа.');
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

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
