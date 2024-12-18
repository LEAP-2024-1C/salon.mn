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
import { ProductContext } from '@/app/context/product-context';
import { useContext } from 'react';
import Image from 'next/image';

export function ProductTable() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <Input placeholder={`Search ...`} className="w-full md:max-w-sm" />
      <ScrollArea className="h-[calc(80vh-220px)] rounded-md border">
        <Table className="relative">
          <TableHeader>
            <TableRow>
              <TableHead>Зураг</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product?._id}>
                <TableCell>
                  <Image
                    alt="Profile_img"
                    src={product?.images[0]}
                    width={40}
                    height={40}
                  />
                </TableCell>
                <TableCell>{product?.name}</TableCell>
                <TableCell>{product?.category?.name}</TableCell>
                <TableCell>{product?.price}$</TableCell>
                <TableCell>{product?.quantity}</TableCell>
                <TableCell>{product?.description}</TableCell>
                <TableCell>
                  <CellAction id={product?._id} />
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
