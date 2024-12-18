'use client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  Dispatch
} from 'react';
import { useRouter } from 'next/navigation';
import { any, string } from 'zod';

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
  subCategory: { _id: string; name: string };
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
  _id: string;
  employee: { _id: string; profile_img: string; name: string };
  user: string;
  date: string;
  firstname: string;
  phoneNumber: number;
  service: string;
}

interface ICreateEm {
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
  profile_img: string;
  discription: string;
  category: string;
  subCategory: string;
}
interface IContext {
  employees: IEmployee[];
  setEmployees: Dispatch<React.SetStateAction<IEmployee[]>>;
  artistData: IEmployee | null;
  setArtistData: Dispatch<React.SetStateAction<IEmployee | null>>;
  employee: ICreateEm;
  setEmployee: Dispatch<React.SetStateAction<ICreateEm>>;
  createdEmployee: () => void;
  fetchEmployeeData: () => void;
  getBooking: () => void;
  setToken: Dispatch<React.SetStateAction<string | null>>;
  token: string | null;
  booking: IBooking[];
  setBooking: React.Dispatch<React.SetStateAction<IBooking[]>>;
}

export const EmployeesContext = createContext<IContext>({
  employees: [],
  setEmployees: () => {},
  artistData: null,
  setArtistData: () => {},
  employee: {} as ICreateEm,
  setEmployee: () => {},
  createdEmployee: () => {},
  fetchEmployeeData: () => {},
  getBooking: () => {},
  booking: [],
  setBooking: () => {},
  setToken: () => {},
  token: ''
});

const EmployeesProvider = ({ children }: { children: React.ReactNode }) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [employee, setEmployee] = useState<ICreateEm>({} as ICreateEm);
  const [booking, setBooking] = useState<IBooking[]>([]);
  const [artistData, setArtistData] = useState<IEmployee | null>(null);
  const [token, setToken] = useState<string | null>(null);

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
  // const getArtist = async () => {
  //   try {
  //     const res = await axios({
  //       method: 'get',
  //       url: `http://localhost:8008/api/v1/employee/get-employee/${artId}`
  //     });

  //     if (res.status === 200) {
  //       setEmployees(res.data.artist);
  //     }
  //   } catch (error) {
  //     toast.error('Ажилтны дата татахад алдаа гарлаа.');
  //   }
  // };

  const createdEmployee = async () => {
    try {
      const {
        name,
        email,
        password,
        category,
        subCategory,
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
          subCategory,
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
      console.log('first', error);
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
        setBooking,
        artistData,
        setArtistData,
        setToken,
        token
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
