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
      console.log('user user');

      console.log('token', token);
      const res = await axios.get(`http://localhost:8008/api/v1/admin/get`);

      if (res.status === 200) {
        setAdmin(res.data.user);
        console.log('USER', admin);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('gg ez');
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
