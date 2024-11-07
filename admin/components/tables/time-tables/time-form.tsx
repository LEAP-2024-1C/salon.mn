'use client';

import React, { ChangeEvent, useContext, useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Button } from '../../ui/button';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';

import { EmployeesContext } from '@/app/context/employee-context';
import { addDays, differenceInDays } from 'date-fns';

export const TimeTableForm = () => {
  const [time, setTime] = useState<string>('');
  const [choosenDays, setChoosenDays] = useState<{
    startDay: Date;
    endDay: Date;
  }>({ startDay: new Date(), endDay: new Date() });

  const [availableDates, setAvailableDates] = useState<
    { startDate: String; endDate: String }[]
  >([]);

  const { employeetimeID } = useParams();
  const router = useRouter();
  const { fetchEmployeeData } = useContext(EmployeesContext);

  const changeDay = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChoosenDays({ ...choosenDays, [name]: new Date(value) });
  };

  const onChangeTime = () => {
    const differenceDay = differenceInDays(
      choosenDays.endDay,
      choosenDays.startDay
    );

    if (time === 'start8') {
      for (let idx = 0; idx <= differenceDay; idx++) {
        availableDates.push({
          startDate: new Date(
            addDays(choosenDays.startDay, idx).setHours(8)
          ).toJSON(),
          endDate: new Date(
            addDays(choosenDays.startDay, idx).setHours(17)
          ).toJSON()
        });
      }
    }
    if (time === 'start9') {
      for (let idx = 0; idx <= differenceDay; idx++) {
        availableDates.push({
          startDate: new Date(
            addDays(choosenDays.startDay, idx).setHours(9)
          ).toJSON(),
          endDate: new Date(
            addDays(choosenDays.startDay, idx).setHours(18)
          ).toJSON()
        });
      }
    }

    if (time === 'start10') {
      for (let idx = 0; idx <= differenceDay; idx++) {
        availableDates.push({
          startDate: new Date(
            addDays(choosenDays.startDay, idx).setHours(10)
          ).toJSON(),
          endDate: new Date(
            addDays(choosenDays.startDay, idx).setHours(19)
          ).toJSON()
        });
      }
    }

    if (time === 'start11') {
      for (let idx = 0; idx <= differenceDay; idx++) {
        availableDates.push({
          startDate: new Date(
            addDays(choosenDays.startDay, idx).setHours(11)
          ).toJSON(),
          endDate: new Date(
            addDays(choosenDays.startDay, idx).setHours(20)
          ).toJSON()
        });
      }
    }
  };

  const createAvailableDate = async () => {
    onChangeTime();

    try {
      const res = await axios.post(
        `http://localhost:8008/api/v1/employee/create-available-dates/${employeetimeID}`,
        { availableDates }
      );

      if (res.status === 200) {
        await fetchEmployeeData();
        toast.success('Хуваар амжилттай үүслээ.', {
          autoClose: 0.8
        });
        router.push('/dashboard/time-table');
      }
    } catch (error) {
      toast.error('Хуваар үүсгэхэд алдаа гарлаа');
    }
  };

  return (
    <div className=" flex flex-col gap-10">
      <div className="flex w-2/3 flex-col gap-5">
        <div className="flex w-full gap-5 ">
          <div>
            <Label>Эхлэх огноо</Label>
            <Input onChange={changeDay} type="date" name="startDay" />
          </div>
          <div>
            <Label>Дуусах огноо</Label>
            <Input onChange={changeDay} type="date" name="endDay" />
          </div>
        </div>
        <Select
          onValueChange={(value) => {
            setTime(value);
          }}
        >
          <SelectTrigger className="">
            <Label>Цагийн хуваарийн сонголт</Label>
            <SelectValue placeholder="Хувиар сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="start8">08:00-17:00</SelectItem>
            <SelectItem value="start9">09:00-18:00</SelectItem>
            <SelectItem value="start10">10:00-19:00</SelectItem>
            <SelectItem value="start11">11:00-20:00</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={createAvailableDate}>Хуваар үүсгэх</Button>
    </div>
  );
};
