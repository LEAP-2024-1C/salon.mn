'use client';
import Image from 'next/image';
import React from 'react';
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

export const EmployeeForm = () => {
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
          <Input type="text" id="text" placeholder="Нэр" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Утсны дугаар</Label>
          <Input type="number" id="number" placeholder="Number" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Category select</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="9:00">Barber</SelectItem>
                <SelectItem value="10:00">Manicur</SelectItem>
                <SelectItem value="11:00">Beuaty</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" row-span-4 w-full max-w-sm  items-start gap-1.5">
          <Label>Тайлбар</Label>
          <Input
            type="text"
            id="description"
            placeholder="Ajliin turshalag"
            className="h-full "
          />
        </div>
      </div>
    </div>
  );
};
