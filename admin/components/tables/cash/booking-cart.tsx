'use client';
import React, { useContext } from 'react';
import '@smastrom/react-rating/style.css';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import Link from 'next/link';
import { EmployeesContext } from '@/app/context/employee-context';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

const BookingCart = () => {
  const { booking } = useContext(EmployeesContext);
  const router = useRouter();
  return (
    <main>
      <p className="text-3xl font-bold">{`Тооцоо хийх`}</p>
      <div className=" flex flex-wrap items-center justify-start gap-4">
        {booking.map((book, ke) => {
          return (
            <div key={ke} className="">
              <div className="h-[336px] w-[184px] overflow-hidden rounded-2xl border border-gray-400">
                <div className="relative h-[174px]">
                  <Image fill alt="Logo" src={book?.employee?.profile_img} />
                </div>
                <div className="flex flex-col gap-2 p-3">
                  <h1 className="text-xl">{book?.employee?.name}</h1>
                  <p className="text-[#555555]">{book?.service}</p>
                  <p>{format(new Date(book.date), 'yyyy-MM-dd HH:MM')}</p>
                  {/* <Link href={`/dashboard/cash/edit/${book?._id}`}> */}
                  <Button
                    onClick={() =>
                      router.push(`/dashboard/cash/edit/${book?._id}`)
                    }
                    className="w-full border border-[#BA7894] bg-white  text-[#BA7894] hover:bg-[#BA7894] hover:text-white"
                  >
                    Төлбөр төлөх
                  </Button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default BookingCart;
