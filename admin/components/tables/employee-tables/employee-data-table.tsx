'use client';

import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { CellAction } from './cell-action';
import { Button } from '@/components/ui/button';
import { useContext } from 'react';
import { EmployeesContext } from '@/app/context/employee-context';
import Image from 'next/image';

export function EmployeeDataTable() {
  const { employees } = useContext(EmployeesContext);
  return (
    <>
      <Input placeholder={`Search ...`} className="w-full md:max-w-sm" />
      <ScrollArea className="h-[calc(80vh-220px)] rounded-md border md:h-[calc(80dvh-200px)]">
        <Table className="relative">
          <TableHeader>
            <TableRow>
              <TableHead>Зураг</TableHead>
              <TableHead>Нэр</TableHead>
              <TableHead>Утсны дугаар</TableHead>
              <TableHead>Категори</TableHead>
              <TableHead>Дэд категори</TableHead>
              <TableHead>Тайлбар</TableHead>
              <TableHead>Имэйл</TableHead>
              <TableHead>Password</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((user) => (
              <TableRow key={user._id}>
                <TableCell>
                  {' '}
                  <Image
                    alt="Profile_img"
                    src={user?.profile_img}
                    width={40}
                    height={40}
                  />
                </TableCell>
                <TableCell>{user?.name}</TableCell>
                <TableCell>{user?.phoneNumber}</TableCell>
                <TableCell>{user?.category?.name}</TableCell>
                <TableCell>{user?.subCategory?.name}</TableCell>
                <TableCell>{user?.discription}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.password}</TableCell>

                <TableCell>
                  <CellAction id={user._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex flex-col items-center justify-end gap-2 space-x-2 py-4 sm:flex-row">
        <div className="flex w-full items-center justify-between gap-2 sm:justify-end">
          <div className="flex items-center space-x-2">
            <Button
              aria-label="Go to previous page"
              variant="outline"
              className="h-8 w-8 p-0"
            >
              <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              aria-label="Go to next page"
              variant="outline"
              className="h-8 w-8 p-0"
            >
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
