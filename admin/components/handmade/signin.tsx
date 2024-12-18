'use client';
import React, { useContext, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { AdminContext } from '@/app/context/admin-context';
import Link from 'next/link';
function Signin() {
  const { setToken } = useContext(AdminContext);
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const signin = async () => {
    const { email, password } = userData;
    try {
      const res = await axios.post(`http://localhost:8008/api/v1/admin/login`, {
        email,
        password
      });

      if (res.status === 200) {
        toast.success('Амжилттай нэвтэрлээ', { autoClose: 1000 });
        const { token } = res.data;
        localStorage.setItem('token', token);
        setToken(token);

        router.push('/dashboard');
      }
    } catch (error: any) {
      // console.log('There was an error signing in:', error.message);
      toast.error('nevtrehed aldaa garlaa');
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="m-auto">Admen</p>
        <Input
          type="email"
          placeholder="Нэвтрэх нэрээ оруул"
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
        <Button onClick={signin}>Нэвтрэх</Button>
        <Link
          href="/employee-signin"
          className={
            'absolute right-4 top-4  rounded-xl border border-red-500 p-2 md:right-8 md:top-8'
          }
        >
          Ажилтан
        </Link>
      </div>
    </div>
  );
}

export default Signin;
