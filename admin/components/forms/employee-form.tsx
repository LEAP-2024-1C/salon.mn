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
import { Value } from '@radix-ui/react-select';

export const EmployeeForm = () => {
  const { employeeId } = useParams();
  const { employee, setEmployee } = useContext(EmployeesContext);
  console.log('first', employee);
  return (
    <div className=" flex flex-col gap-10">
      <div>
        <div className="flex justify-between">
          {' '}
          <p>Зураг оруулах</p>
          <CldUploadWidget uploadPreset="employeeAdmin">
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
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
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
      <Button>{employeeId === 'create' ? 'create' : 'edit'}</Button>
    </div>
  );
};
