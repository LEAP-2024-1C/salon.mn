'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

import axios from 'axios';

import { toast } from 'react-toastify';

import { ServiceContext } from '@/app/context/service-context';
import { CategoryAlertModal } from './category-alert-modal';

interface CellActionProps {
  id: string;
}

export const CellAction: React.FC<CellActionProps> = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { fetchServiceData } = useContext(ServiceContext);

  const onConfirm = async () => {
    const serviceID = id;

    try {
      const res = await axios({
        method: 'delete',
        url: `http://localhost:8008/api/v1/service/delete-service/${serviceID}`
      });

      if (res.status === 200) {
        await fetchServiceData();
        toast.success('Үйлчилгээний мэдээлэл амжилттай устгалаа.', {
          autoClose: 0.7
        });
        setOpen(true);
      }
    } catch (error) {
      toast.error('Үйлчилгээний утгахад алдаа гарлаа.');
    }
  };

  return (
    <>
      <CategoryAlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/category/${id}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
