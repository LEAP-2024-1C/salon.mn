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
import { ServiceContext } from '@/app/context/service-context';

export const EmployeeForm = () => {
  const { employeeID } = useParams();

  const router = useRouter();

  const { employee, setEmployee, createdEmployee, fetchEmployeeData } =
    useContext(EmployeesContext);

  const { category, subCategory } = useContext(ServiceContext);
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
      toast.error(' Aжилтны мэдээлэл татахад алдаа гарлаа');
    }
  };

  const updateEmployee = async () => {
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
        method: 'put',
        url: `http://localhost:8008/api/v1/employee/update-employee/${employeeID}`,
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
          <Label>Нэр</Label>
          <Input
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            type="text"
            placeholder="Нэр"
            value={employee?.name}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Утсны дугаар</Label>
          <Input
            type="number"
            onChange={(e) =>
              setEmployee({
                ...employee,
                phoneNumber: Math.floor(Number(e.target.value))
              })
            }
            value={employee?.phoneNumber}
            placeholder="Number"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Email</Label>
          <Input
            type="email"
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
            placeholder="Email"
            value={employee?.email}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Password</Label>
          <Input
            type="password"
            onChange={(e) =>
              setEmployee({ ...employee, password: e.target.value })
            }
            placeholder="Password"
            value={employee?.password}
          />
        </div>

        <div className=" row-span-4 w-full max-w-sm  items-start gap-1.5">
          <Label>Тайлбар</Label>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, discription: e.target.value })
            }
            type="text"
            placeholder="Ajliin turshalag geh met"
            className="h-full "
            value={employee?.discription}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Category select</Label>
          <Select
            onValueChange={(value) =>
              setEmployee({ ...employee, category: value })
            }
            defaultValue={employee?.category}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {category?.map((cat) => {
                return (
                  <SelectGroup key={cat?._id}>
                    <SelectItem value={cat?._id}>{cat?.name}</SelectItem>
                  </SelectGroup>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Sub Category select</Label>
          <Select
            onValueChange={(value) =>
              setEmployee({ ...employee, subCategory: value })
            }
            defaultValue={employee?.category}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {subCategory?.map((cat) => {
                return (
                  <SelectGroup key={cat?._id}>
                    <SelectItem value={cat?._id}>{cat?.name}</SelectItem>
                  </SelectGroup>
                );
              })}
            </SelectContent>
          </Select>
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
