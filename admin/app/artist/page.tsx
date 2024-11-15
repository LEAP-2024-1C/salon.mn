'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { EmployeesContext } from '../context/employee-context';
import { useContext, useEffect, useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CellAction } from '../../components/tables/cash/cell-action';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '../../components/ui/card';
import Image from 'next/image';

import { FaRegUser } from 'react-icons/fa';

import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

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

const breadcrumbItems = [{ title: 'Ажилтан', link: '/employee' }];
export default function page() {
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

  const { artistData, setArtistData, token, setToken } =
    useContext(EmployeesContext);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8008/api/v1/employee//getArtist`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status === 200) {
        setArtistData(response.data.user);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    if (token) {
      fetchUserData();
    } else {
      setToken(localStorage.getItem('token'));
    }
  }, [token]);
  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="m-auto flex w-9/12 justify-between">
          <div>{artistData?.name}</div>
          <Dialog>
            <DialogTrigger asChild>
              <FaRegUser />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="grid-col grid">
                <Card
                  key={artistData?._id}
                  className="rounded-md border p-4 shadow-md"
                >
                  <CardHeader className="flex items-center">
                    <Image
                      alt="Profile Image"
                      src={artistData?.profile_img || '/placeholder.png'}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold">
                        {artistData?.name}
                      </h2>
                      <p className="text-gray-500">
                        {artistData?.category?.name}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>Утас:</strong> {artistData?.phoneNumber}
                    </p>
                    <p>
                      <strong>Имэйл:</strong> {artistData?.email}
                    </p>
                    <p>
                      <strong>Дэд категори:</strong>{' '}
                      {artistData?.subCategory?.name}
                    </p>
                    <p>
                      <strong>Тайлбар:</strong> {artistData?.discription}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-end"></CardFooter>
                </Card>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <ScrollArea className="h-[calc(80vh-220px)] rounded-md border p-4">
          <ScrollBar orientation="horizontal" />
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
                            {format(
                              addHours(new Date(a.startDate), key),
                              'HH:mm'
                            )}
                          </Button>
                        ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
        <ScrollArea>
          <div className=" flex flex-wrap items-center justify-start gap-4">
            {booking.map((book, ke) => {
              return (
                <div key={ke} className="">
                  <div className="h-[386px] w-[264px] overflow-hidden rounded-2xl border border-gray-400">
                    <div className="relative h-[174px]">
                      <Image
                        fill
                        alt="Logo"
                        src={book?.employee?.profile_img}
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-3">
                      <h1 className="text-xl">{book?.employee?.name}</h1>
                      <p className="text-[#555555]">
                        Client number:{book?.phoneNumber}
                      </p>
                      <p className="text-[#555555]">{book?.service}</p>
                      <p>{format(new Date(book.date), 'yyyy-MM-dd HH:mm')}</p>

                      <CellAction id={book?._id} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </PageContainer>
  );
}
