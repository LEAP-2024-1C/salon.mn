'use client';
import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Button } from '../../ui/button';
import { useParams, useRouter } from 'next/navigation';
import { EmployeesContext } from '@/app/context/employee-context';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ProfileForm = () => {
  const { employeeID } = useParams();
  const router = useRouter();

  const { employee, setEmployee, createdEmployee, fetchEmployeeData } =
    useContext(EmployeesContext);

  const getEmployee = async () => {
    try {
      if (employeeID === 'create') {
        return;
      }
      const res = await axios({
        method: 'get',
        url: `http://localhost:8008/api/v1/employee/get-employee/${employeeID}`
      });
      if (res.status === 200) {
        setEmployee(res.data.employee);
      }
    } catch (error) {
      console.log(' Aжилтны мэдээлэл татахад алдаа гарлаа');
    }
  };

  const updateEmployee = async () => {
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
        method: 'put',
        url: `http://localhost:8008/api/v1/employee/update-employee/${employeeID}`,
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
        toast.success('Aжилтны мэдээлэл амжилттай шинэчлэгдлээ.', {
          autoClose: 0.8
        });
        router.push('/dashboard/employees');
      }
    } catch (error) {
      toast.error('Ажилтны мэдээлэл засахад алдаа гарлаа.');
    }
  };

  useEffect(() => {
    getEmployee();
  }, [employeeID]);

  return (
    <div className=" flex flex-col gap-10">
      <div>
        <div className="flex justify-between">
          {' '}
          <p>Зураг оруулах</p>
          <CldUploadWidget
            uploadPreset="employeeAdmin "
            onSuccess={(result: any) => {
              setEmployee({
                ...employee,
                profile_img: result?.info?.secure_url
              });
            }}
          >
            {({ open }) => {
              return (
                <Button className="" onClick={() => open()}>
                  Upload an Image
                </Button>
              );
            }}
          </CldUploadWidget>
        </div>

        <div className="relative h-60 w-full rounded-lg border">
          <Image
            fill={true}
            src={
              employee.profile_img
                ? employee.profile_img
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            }
            alt="employeeIMG"
            className="h-auto w-auto object-cover"
          />
        </div>
      </div>
      <div className="grid-row-3 grid   grid-flow-col gap-5 ">
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Label>Text</Label>
          <Input
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            type="text"
            placeholder="Text"
            value={employee?.name}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Email</Label>
          <Input
            type="text"
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
            placeholder="Text"
            value={employee?.email}
          />
        </div>
        <div className=" row-span-4 w-full max-w-sm  items-start gap-1.5">
          <Label>Тайлбар</Label>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, discription: e.target.value })
            }
            type="text"
            placeholder=""
            className="h-full "
            value={employee?.discription}
          />
        </div>
      </div>
      <Button
        onClick={employeeID === 'create' ? createdEmployee : updateEmployee}
      >
        {employeeID === 'create' ? 'create' : 'edit'}
      </Button>
    </div>
  );
};
