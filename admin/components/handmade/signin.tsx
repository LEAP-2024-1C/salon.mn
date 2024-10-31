'use client';
import React, { useContext, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { UserContext } from '@/app/context/admin-context';
function Signin() {
  const { setToken } = useContext(UserContext);
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  console.log(userData);
  const signin = async () => {
    const { email, password } = userData;
    try {
      console.log('first');
      const res = await axios.post(`http://localhost:8008/api/v1/admin/login`, {
        email,
        password
      });
      console.log(res);
      if (res.status === 200) {
        toast.success('Амжилттай нэвтэрлээ', { autoClose: 1000 });
        const { token } = res.data;
        localStorage.setItem('token', token);

        router.push('/dashboard');
      }
    } catch (error: any) {
      console.log('There was an error signing in:', error.message);
      toast.error('nevtrehed aldaa garlaa');
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="enter your email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="enter your password"
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

export default Signin;
