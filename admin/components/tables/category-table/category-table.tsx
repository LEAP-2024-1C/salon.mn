'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
import { CellAction } from './cell-action';
import { useContext } from 'react';
import { ServiceContext } from '@/app/context/service-context';
import { Separator } from '@radix-ui/react-dropdown-menu';

export function CategoryTable() {
  const { category, subCategory } = useContext(ServiceContext);
  return (
    <>
      <Input placeholder={`Search ...`} className="w-full md:max-w-sm" />
      <ScrollArea className="h-[calc(80vh-220px)] rounded-md border">
        <Table className="relative">
          <TableHeader>
            <TableRow className="bg-gray-300">
              <TableHead>Категор</TableHead>
              <TableHead>Тайлбар</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {category?.map((cat) => (
              <TableRow key={cat?._id}>
                <TableCell>{cat?.name}</TableCell>
                <TableCell>{cat?.descreption}</TableCell>
                <TableCell>
                  <CellAction id={cat?._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Separator />
        <Table className="relative">
          <TableHeader>
            <TableRow className="bg-gray-300">
              <TableHead>Дэд категор</TableHead>
              <TableHead>Тайлбар</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subCategory?.map((cat) => (
              <TableRow key={cat?._id}>
                <TableCell>{cat?.name}</TableCell>
                <TableCell>{cat?.descreption}</TableCell>
                <TableCell>
                  <CellAction id={cat?._id} />
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
