'use client';
import React, { useContext, useState } from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { EmployeesContext } from '@/app/context/employee-context';
import { addHours, differenceInHours, format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { TimeModal } from '@/components/tables/tImeManagment/modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { UnAvaiTimeModal } from '@/components/tables/tImeManagment/unAvaibleModal';
import Image from 'next/image';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Цаг тохиргоо', link: '/dashboard/booking' }
];
const Booking = () => {
  const { employees, fetchEmployeeData, booking } =
    useContext(EmployeesContext);
  const [open, setOpen] = useState(false);
  const [openAvaiTime, setOpenAvaiTime] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState<Date | null>();
  const [chooseEmployee, setChoosenEmployee] = useState<string | null>('');

  const findIndex = employees?.findIndex(
    (employee) => employee?._id === chooseEmployee
  );

  const onConfirm = async () => {
    try {
      const empID = employees[findIndex]._id;

      const res = await axios({
        method: 'post',
        url: 'http://localhost:8008/api/v1/employee/controlTime',
        data: { date: time, empID }
      });

      if (res.status === 200) {
        await fetchEmployeeData();
        toast.success('Aжилтан tsag  амжилттай idehgui bolloo', {
          autoClose: 0.8
        });
        setOpen(false);
      }
    } catch (error) {
      console.log('UnAvailab le time ilgeehd aldaa garlaa');
    }
  };

  const onConfirmTime = async (date: any) => {
    try {
      const empID = employees[findIndex]._id;
      const res = await axios({
        method: 'delete',
        url: 'http://localhost:8008/api/v1/employee/delete-unavailable-time',
        data: { date, empID }
      });

      if (res.status === 200) {
        await fetchEmployeeData();
        toast.success('Aжилтны цаг амжилттай идэвхитэй боллоо', {
          autoClose: 0.8
        });
        setOpenAvaiTime(false);
      }
    } catch (error) {
      console.log('UnAvailab le time ustgahad ilgeehd aldaa garlaa');
    }
  };

  return (
    <PageContainer>
      <TimeModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        isActive={isActive}
      />
      <UnAvaiTimeModal
        isOpen={openAvaiTime}
        onClose={() => setOpenAvaiTime(false)}
        id={chooseEmployee}
        findIndex={findIndex}
        onConfirmTime={onConfirmTime}
      />

      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <p className="text-3xl font-bold">{`Захиалсан цагийн мэдээлэл `}</p>
        </div>
        <Separator />
        <div className="flex gap-5 ">
          <Select onValueChange={(Value) => setChoosenEmployee(Value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ажилтаны нэр " />
            </SelectTrigger>
            <SelectContent>
              {employees?.map((employee, i) => {
                return (
                  <SelectItem key={employee._id} value={employee?._id}>
                    {employee?.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
            {chooseEmployee ? (
              <Button
                className="bg-gray-200 hover:bg-slate-300"
                onClick={() => setOpenAvaiTime(true)}
              >
                Цаг тохируулах /цагийг идэвхитэй болгох/
              </Button>
            ) : (
              ''
            )}
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[]">Огноо</TableHead>
              <TableHead className="w-[]">Time manage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees[findIndex]?.availableDates.map((a, i) => (
              <TableRow key={i}>
                <TableCell className="font-bold">
                  {format(new Date(a?.startDate), 'yyyy-MM-dd')}
                </TableCell>
                <TableCell className=" flex gap-5">
                  {new Array(
                    differenceInHours(
                      new Date(a?.endDate),
                      new Date(a.startDate)
                    ) + 1
                  )
                    .fill(0)
                    .map((n, key) => (
                      <Button
                        key={key}
                        disabled={
                          employees[findIndex].unAvailableTime.findIndex(
                            (b) =>
                              format(new Date(b), 'yyy-MM-dd HH:mm') ===
                              format(
                                addHours(new Date(a.startDate), key),
                                'yyyy-MM-dd HH:mm'
                              )
                          ) !== -1
                        }
                        onClick={() => {
                          setOpen(true), setIsActive(true);
                          setTime(
                            new Date(addHours(new Date(a.startDate), key))
                          );
                        }}
                        className={`${
                          booking?.findIndex(
                            (book) =>
                              book?.employee?._id === chooseEmployee &&
                              book?.date ===
                                new Date(
                                  addHours(new Date(a.startDate), key)
                                ).toJSON()
                          ) === -1
                            ? 'bg-blue-300'
                            : 'bg-green-300'
                        }`}
                      >
                        {format(addHours(new Date(a.startDate), key), 'HH:mm')}
                      </Button>
                    ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PageContainer>
  );
};
export default Booking;
