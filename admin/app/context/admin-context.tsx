'use client';

import axios from 'axios';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';

interface IUserCOntext {
  user: {
    _id: string;
    name: string;

    email: string;
    phonenumber: string;
  } | null;
  fetchUserData: () => void;
  setToken: Dispatch<SetStateAction<string | null>>;
  setUser: Dispatch<SetStateAction<null>>;
}

export const UserContext = createContext<IUserCOntext>({
  user: {
    _id: '',
    name: '',
    email: '',
    phonenumber: ''
  },
  fetchUserData: () => {},
  setToken: () => {},
  setUser: () => {}
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState(null);
  const fetchUserData = async () => {
    try {
      console.log('user user');

      console.log('token', token);
      const res = await axios.get(`http://localhost:8008/api/v1/admin/login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status === 200) {
        setUser(res.data.user);
        console.log('USER', user);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
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
    <UserContext.Provider value={{ user, fetchUserData, setToken, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
