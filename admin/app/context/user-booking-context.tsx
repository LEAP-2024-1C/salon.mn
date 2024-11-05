'use client';

import axios from 'axios';
import React, { useContext, useState, createContext, useEffect } from 'react';
import { toast } from 'react-toastify';

interface IUser {
  _id: string;
  firstname: string;
  phoneNumber: string;
  role: string;
  profile_img: string;
  otp: string;
  passwordResetToken: string;
  passwordResetTokenExpire: Date;
  created_at: Date;
  updated_at: Date;
  address: string;
}

interface IContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext<IContext>({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {}
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const fetchUserData = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8008/api/v1/auth/currentuser',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (res.status === 200) {
        setUser(res.data.findUser);
      }
    } catch (error) {
      toast.error('User ийн датаагаа backend ээс авахад алдаа гарсан байна.');
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData();
    } else {
      setToken(localStorage.getItem('token'));
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, setToken, token }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
