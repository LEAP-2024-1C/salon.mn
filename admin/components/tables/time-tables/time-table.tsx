'use client';

import { Button } from '@/components/ui/button';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useContext } from 'react';
import { CellAction } from './cell-action';
import { EmployeesContext } from '@/app/context/employee-context';
import { format } from 'date-fns';

export function TimeTable() {
  const { employees } = useContext(EmployeesContext);

  return (
    <>
      <ScrollArea className="h-[calc(80vh-220px)] rounded-md border-[2px]">
        <Table className="relative  text-[12px]">
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead className="text-wrap border-[2px] text-center">
                Ажилтаны нэр
              </TableHead>
              {employees[0]?.availableDates.map((day) => (
                <TableHead key={day._id} className="text-center">
                  {' '}
                  {format(new Date(day?.startDate), 'd MMM yyyy')}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees?.map((employee) => (
              <TableRow key={employee?._id} className="text-nowrap ">
                <TableCell className=" border-2 bg-gray-200">
                  {employee?.name}
                </TableCell>
                {employee?.availableDates.map((timeEvent) => {
                  return (
                    <TableCell
                      key={timeEvent?._id}
                      className=" border-2 text-center"
                    >
                      {format(new Date(timeEvent?.startDate), 'HH:mm')}:
                      {format(new Date(timeEvent?.endDate), 'HH:mm')}
                    </TableCell>
                  );
                })}

                <TableCell>
                  <CellAction id={employee?._id} />
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
