"use client";

import React, { useContext, useState, createContext, useEffect } from "react";

interface IUser {
  firstname: string;
  email: string;
  _id: string;
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
  setToken: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const fetchUserData = async () => {
    try {
    } catch (error) {
      console.error(
        "User ийн датаагаа backend ээс авахад алдаа гарсан байна.",
        error
      );
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData();
    } else {
      setToken(localStorage.getItem("token"));
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
