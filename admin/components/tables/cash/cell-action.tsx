'use client';

import { EmployeesContext } from '@/app/context/employee-context';
import { AlertModal } from '@/components/tables/employee-tables/alert-modal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import axios from 'axios';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

interface CellActionProps {
  id: string;
}

export const CellAction: React.FC<CellActionProps> = ({ id }) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(`/dashboard/cash/${id}`)}
      className="w-full border border-[#BA7894] bg-white  text-[#BA7894] hover:bg-[#BA7894] hover:text-white"
    >
      Төлөв өөрчлөх
    </Button>
  );
};
