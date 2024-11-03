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
import { ProductAlertModal } from './product-alert-modal';
import axios from 'axios';
import { ProductContext } from '@/app/context/product-context';
import { toast } from 'react-toastify';

interface CellActionProps {
  id: string;
}

export const CellAction: React.FC<CellActionProps> = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { fetchProductData } = useContext(ProductContext);

  const onConfirm = async () => {
    const productID = id;

    try {
      const res = await axios({
        method: 'delete',
        url: `http://localhost:8008/api/v1/products/delete-product/${productID}`
      });

      if (res.status === 200) {
        await fetchProductData();
        toast.success('Ажилтны мэдээлэл амжилттай устгалаа.');
        // router.push('/dashboard/employees');
        setOpen(true);
      }
    } catch (error) {
      toast.error('Ажилтны утгахад алдаа гарлаа.');
    }
  };

  return (
    <>
      <ProductAlertModal
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
            onClick={() => router.push(`/dashboard/product/${id}`)}
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
