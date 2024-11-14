'use client';
import React, { useContext, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { AdminContext } from '@/app/context/admin-context';
import { EmployeesContext } from '@/app/context/employee-context';

function EmplyeeSingin() {
  const { setToken } = useContext(EmployeesContext);
  const { setArtistData } = useContext(EmployeesContext);
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const signin = async () => {
    const { email, password } = userData;
    console.log('values', email);
    console.log('values', password);
    try {
      const res = await axios.post(
        `http://localhost:8008/api/v1/employee/artist`,
        {
          email,
          password
        }
      );

      if (res.status === 200) {
        toast.success('Амжилттай нэвтэрлээ', { autoClose: 1000 });
        const { token } = res.data;
        console.log('firstlogin,', token);
        const { user } = res.data;
        localStorage.setItem('token', token);
        setArtistData(user);
        setToken(token);
        router.push('/artist');
      }
    } catch (error: any) {
      console.log('There was an error signing in:', error);

      toast.error('nevtrehed aldaa garlaa');
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="m-auto">Ажилтан</p>
        <Input
          type="email"
          placeholder="Артист нэрээ оруул"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Нууц үгээ оруул"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <Button onClick={signin}>Sign In</Button>
      </div>
    </div>
  );
}

export default EmplyeeSingin;
