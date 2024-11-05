'use client';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { EmployeeDataTable } from '../employee-tables/employee-data-table';
import { useContext } from 'react';
import { ProfileTable } from './profile-table';

export const Profile = () => {
  // const { employees } = useContext(EmployeesContext);

  return (
    <>
      <div className="flex items-start justify-between">
        <Link
          href={'/dashboard/profile/create'}
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          <Plus className="mr-2 h-4 w-4" /> Өөрчлөх
        </Link>
      </div>
      {/* <Separator /> */}
      <ProfileTable />
    </>
  );
};
