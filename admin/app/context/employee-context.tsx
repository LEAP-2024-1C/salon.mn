'use client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import React, { useContext, useState, createContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
  availableDates: [{ startDate: Date; endDate: Date; _id: string }];
  unAvailableTime: [Date];
}

interface IBooking {
  employee: { _id: string; profile_img: string; name: string };
  user: string;
  date: string;
  firstname: string;
  phoneNumber: number;
  service: { _id: string; name: string };
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
  createdEmployee: () => void;
  fetchEmployeeData: () => void;
  getBooking: () => void;

  booking: IBooking[];
  setBooking: React.Dispatch<React.SetStateAction<IBooking[]>>;
}

export const EmployeesContext = createContext<IContext>({
  employees: [],
  setEmployees: () => {},

  employee: {} as ICreateEm,
  setEmployee: () => {},
  createdEmployee: () => {},
  fetchEmployeeData: () => {},
  getBooking: () => {},
  booking: [],
  setBooking: () => {}
});

const EmployeesProvider = ({ children }: { children: React.ReactNode }) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [employee, setEmployee] = useState<ICreateEm>({} as ICreateEm);
  const [booking, setBooking] = useState<IBooking[]>([]);
  // {
  //   name: '',
  //   email: '',
  //   phoneNumber: 0,
  //   password: '',
  //   profile_img: '',
  //   discription: '',
  //   category: ''
  // },

  const router = useRouter();

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
      const {
        name,
        email,
        password,
        category,
        profile_img,
        phoneNumber,
        discription
      } = employee;

      const res = await axios({
        method: 'post',
        url: 'http://localhost:8008/api/v1/employee/created-employee',
        headers: {},
        data: {
          name,
          email,
          password,
          category,
          profile_img,
          phoneNumber,
          discription
        }
      });

      if (res.status === 200) {
        await fetchEmployeeData();
        toast.success('Aжилтан амжилттай үүслээ', { autoClose: 0.8 });

        router.push('/dashboard/employees');
      }
    } catch (error) {
      toast.error('Ажилтан үүсгэхэд алдаа гарлаа.');
    }
  };

  const getBooking = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:8008/api/v1/booking'
      });

      if (res.status === 201) {
        setBooking(res.data.booking);
      }
    } catch (error) {
      toast.error('Booking дата татахад алдаа гарлаа.');
    }
  };

  useEffect(() => {
    fetchEmployeeData();
    getBooking();
  }, []);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        setEmployees,
        employee,
        setEmployee,
        createdEmployee,
        fetchEmployeeData,
        getBooking,
        booking,
        setBooking
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
