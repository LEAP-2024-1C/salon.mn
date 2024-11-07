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
import { Input } from '@/components/ui/input';
import { EmployeesContext } from '@/app/context/employee-context';
import { addHours, differenceInHours, format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { TimeModal } from '@/components/tables/tImeManagment/modal';
import axios from 'axios';
import { toast } from 'react-toastify';
<<<<<<< Updated upstream
import { Value } from '@radix-ui/react-select';
=======
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

>>>>>>> Stashed changes
const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Захиалсан цаг', link: '/dashboard/booking' }
];
const Booking = () => {
  const { employees, fetchEmployeeData, booking } =
    useContext(EmployeesContext);
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState<Date | null>();
  const [chooseEmployee, setChoosenEmployee] = useState<string>();

  const findIndex = employees?.findIndex(
    (employee) => employee?._id === chooseEmployee
  );

  const onConfirm = async () => {
    try {
      const empID = '6724b6663ef5350bded7339c';
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

<<<<<<< Updated upstream
  console.log('Avaible time', time);
  console.log('orson tsag', new Date('2024-11-06T13:03:49.316+00:00'));
=======
>>>>>>> Stashed changes
  return (
    <PageContainer>
      <TimeModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        isActive={isActive}
      />
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <p className="text-3xl font-bold">{`Захиалсан цагийн мэдээлэл `}</p>
        </div>
        <Separator />
        <div className="flex gap-5 ">
          <Input type="date" className="w-40" />
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
          </Select>
        </div>
<<<<<<< Updated upstream
        {employees[findIndex]?.availableDates.map((a, i) => (
          <div key={i}>
            <p className="font-bold">
              {format(new Date(a?.startDate), 'yyyy-MM-dd')}
            </p>
            <p className="ml-5">
              {new Array(
                differenceInHours(new Date(a?.endDate), new Date(a.startDate)) +
                  1
              )
                .fill(0)
                .map((n, key) => (
                  <Button
                    key={key}
                    disabled={
                      employees[0].unAvailableTime.findIndex(
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
                      setTime(new Date(addHours(new Date(a.startDate), key)));
                      console.log(
                        'click time',
                        new Date(addHours(new Date(a.startDate), key))
                      );
                    }}
                    // className={`${booking.findIndex(
                    //   (book) => book.employee._id
                    // )}`}
                  >
                    {format(addHours(new Date(a.startDate), key), 'hh:mm')}
                  </Button>
                ))}
            </p>

            {/* <div>BT: {format(bookedDates[0], 'yyyy-MM-dd hh:mm')}</div> */}
          </div>
        ))}
=======
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
                <TableCell className="ml-5">
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

                {/* <div>BT: {format(bookedDates[0], 'yyyy-MM-dd hh:mm')}</div> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
>>>>>>> Stashed changes
      </div>
    </PageContainer>
  );
};
export default Booking;
