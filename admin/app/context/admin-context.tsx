'use client';

import axios from 'axios';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { toast } from 'react-toastify';

interface IAdminCOntext {
  admin: {
    _id: string;
    name: string;
    email: string;
    phonenumber: string;
  } | null;
  fetchAdminData: () => void;
  setToken: Dispatch<SetStateAction<string | null>>;
  setAdmin: Dispatch<SetStateAction<null>>;
}

export const AdminContext = createContext<IAdminCOntext>({
  admin: {
    _id: '',
    name: '',
    email: '',
    phonenumber: ''
  },
  fetchAdminData: () => {},
  setToken: () => {},
  setAdmin: () => {}
});

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [admin, setAdmin] = useState(null);
  const fetchAdminData = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/api/v1/admin/get`);

      if (res.status === 200) {
        toast.success('fetchin data done');
        setAdmin(res.data.user[0]);
      }
    } catch (error) {
      // console.error('Error fetching user data:', error.message);
      toast.error('Error fetching user data');
    }
  };
  useEffect(() => {
    if (token) {
      fetchAdminData();
    } else {
      setToken(localStorage.getItem('token'));
    }
  }, [token]);

  return (
    <AdminContext.Provider
      value={{ admin, fetchAdminData, setToken, setAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
};
