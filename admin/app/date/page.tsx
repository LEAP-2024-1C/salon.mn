// Uka bagsh Dates

'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  addDays,
  addHours,
  differenceInBusinessDays,
  differenceInHours,
  isThisHour,
  lastDayOfMonth,
  setHours,
  setMinutes,
  setSeconds
} from 'date-fns';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { date } from 'zod';
import { Button } from '@/components/ui/button';

const EmployeeTime = () => {
  //   const day = addDays(new Date(), 1);
  //   const [startDate, setStartDate] = useState(new Date());
  //   const [endDate, setEndDate] = useState(new Date());
  //   const onChange = (dates: any) => {
  //     const [start, end] = dates;
  //     setStartDate(start);
  //     setEndDate(end);
  //   };

  const startDate = new Date();
  //    endDate = addDays(new Date(), 1);

  const onChange = () => {
    const lastDayofMonth = Math.floor(
      Number(format(lastDayOfMonth(startDate), 'dd'))
    );
    const lenght = lastDayofMonth - Math.floor(Number(format(startDate, 'dd')));

    for (let i = 1; i <= lenght; i++) {
      startDate.setDate(startDate.getDate() + 1);

      const hour = setHours(startDate, 8);
      const minute = setMinutes(hour, 0);
      const sec = setSeconds(minute, 0);

      const startDate1 = format(sec, 'yyyy-MM-dd H:mm');

      const hour1 = setHours(sec, 18);
      const minute1 = setMinutes(hour1, 0);
      const sec1 = setSeconds(minute1, 0);
      const endDate1 = format(sec1, 'yyyy-MM-dd H:mm');

      return console.log({ startDate1, endDate1, startDate });
    }

    // if (format(startDate, 'yyyy-MM-dd') === format(endDate, 'yyyy-MM-dd')) {
    //   const hour = setHours(startDate, 8);
    //   const minute = setMinutes(hour, 0);
    //   const sec = setSeconds(minute, 0);
    //   const startDate1 = format(sec, 'yyyy-MM-dd H:mm');

    //   const hour1 = setHours(endDate, 18);
    //   const minute1 = setMinutes(hour1, 0);
    //   const sec1 = setSeconds(minute1, 0);
    //   const endDate1 = format(sec1, 'yyyy-MM-dd H:mm');

    //   return console.log(
    //     'startDate',
    //     startDate1,
    //     'endDate',
    //     endDate1,
    //     'lastDayofMonth',
    //     lastDayofMonth
    //   );
    // } else {
    //   return console.log('teneetse');
    // }
  };

  useEffect(() => {
    onChange();
  }, []);

  const [choosenDates, setChoosenDates] = useState<{
    startDate: Date;
    endDate: Date;
  }>({ startDate: new Date(), endDate: new Date() });

  const [availableDates, setAvailableDates] = useState<
    {
      startDate: Date;
      endDate: Date;
    }[]
  >([{ startDate: new Date(), endDate: new Date() }]);

  const [bookedDates, setBookedDates] = useState<Date[]>([
    new Date('2024-11-08T11:00'),
    new Date('2024-11-08T12:00')
  ]);

  const changeDateInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('ST', e.target.name);
    console.log('ST', e.target.value);
    const { name, value } = e.target;
    setChoosenDates({ ...choosenDates, [name]: new Date(value) });
  };

  useEffect(() => {
    const dif = differenceInBusinessDays(
      choosenDates.endDate,
      choosenDates.startDate
    );
    console.log('DIF', dif);
    const dates = [];

    for (let idx = 0; idx <= dif; idx++) {
      dates.push({
        startDate: new Date(addDays(choosenDates.startDate, idx)),
        endDate: new Date(addDays(choosenDates.startDate, idx).setHours(18))
      });
    }
    setAvailableDates(dates);
    console.log('Dates arr', dates);
  }, [choosenDates]);

  return (
    <div>
      <p>EmployeeTime</p>

      {/* <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        showTimeSelect
        timeFormat="HH:mm"
        // timeIntervals={15}
        timeCaption="time"
        // dateFormat="MMMM d, yyyy h:mm aa"
      /> */}

      <Table className="relative">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>09:00</TableHead>
            <TableHead>10:00</TableHead>
            <TableHead>11:00</TableHead>
            <TableHead>12:00</TableHead>
            <TableHead>14:00</TableHead>
            <TableHead>15:00</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>{format(startDate, 'dd EEE')}</TableCell>
            <TableCell>
              <p>99220022</p>
              <p>99220022</p>
              <p>99220022</p>
            </TableCell>
            <TableCell>
              <p>99220022</p>
              <p>99220022</p>
              <p>99220022</p>
            </TableCell>
            <TableCell>
              <p>99220022</p>
              <p>99220022</p>
              <p>99220022</p>
            </TableCell>
            <TableCell>
              <p>99220022</p>
              <p>99220022</p>
              <p>99220022</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{format(startDate, 'dd EEE')}</TableCell>
            <TableCell>
              <p>99220022</p>
              <p>99220022</p>
              <p>99220022</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div>
        <Label>StartDate:</Label>
        <Input
          name="startDate"
          type="datetime-local"
          onChange={changeDateInput}
        />
        <Label>StartDate:</Label>
        <Input
          name="endDate"
          type="datetime-local"
          onChange={changeDateInput}
        />

        <div>
          Result Start: {format(choosenDates.startDate, 'yyyy-MM-dd HH:mm')}
        </div>
        <div>
          Result End: {format(choosenDates.endDate, 'yyyy-MM-dd HH:mm')}
        </div>
        <div>Result Av</div>
        <div>
          {availableDates.map((a, i) => (
            <div key={i}>
              <p className="font-bold">{format(a.startDate, 'yyyy-MM-dd')}</p>
              <p className="ml-5">
                {new Array(differenceInHours(a.endDate, a.startDate))
                  .fill(0)
                  .map((n, i) => (
                    <Button
                      key={i}
                      disabled={
                        bookedDates.findIndex(
                          (b) =>
                            format(b, 'yyy-MM-dd hh:mm') ===
                            format(addHours(a.startDate, i), 'yyyy-MM-dd hh:mm')
                        ) !== -1
                      }
                    >
                      {format(addHours(choosenDates.startDate, i), 'HH:mm')}
                    </Button>
                  ))}
              </p>
              <div>BT: {format(bookedDates[0], 'yyyy-MM-dd hh:mm')}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTime;
