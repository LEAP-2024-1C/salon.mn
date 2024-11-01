'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
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
import { Button } from '../ui/button';
import { useParams } from 'next/navigation';
import { EmployeesContext } from '@/app/context/employee-context';

export const EmployeeForm = () => {
  const { employeeId } = useParams();
  const { employee, setEmployee, createdEmployee } =
    useContext(EmployeesContext);

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
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Password</Label>
          <Input
            type="password"
            onChange={(e) =>
              setEmployee({ ...employee, password: e.target.value })
            }
            placeholder="Email"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Category select</Label>
          <Select
            onValueChange={(value) =>
              setEmployee({ ...employee, category: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="6721a4727300f88d42793b76">Barber</SelectItem>
                <SelectItem value="6720654be0eb8fa8d9b935c8">
                  Manicur
                </SelectItem>
                <SelectItem value="6721a4837300f88d42793b78">Beuaty</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" row-span-4 w-full max-w-sm  items-start gap-1.5">
          <Label>Тайлбар</Label>
          <Input
            onChange={(e) =>
              setEmployee({ ...employee, discription: e.target.value })
            }
            type="text"
            placeholder="Ajliin turshalag"
            className="h-full "
          />
        </div>
      </div>
      <Button
        onClick={
          employeeId === 'create' ? createdEmployee : () => console.log('first')
        }
      >
        {employeeId === 'create' ? 'create' : 'edit'}
      </Button>
    </div>
  );
};
