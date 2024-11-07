'use client';
import { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { EmployeesContext } from '@/app/context/employee-context';
import { MdDelete } from 'react-icons/md';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { format } from 'date-fns';
import axios from 'axios';
import { toast } from 'react-toastify';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string | null;
  findIndex: number;
  onConfirmTime: (date: any) => void;
}

export const UnAvaiTimeModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirmTime,
  findIndex
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { employees, fetchEmployeeData } = useContext(EmployeesContext);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Та идэвхигүй цагын жагсаалт"
      description="Tа уг цагийг устгаснаар хэрэглэгч цаг захиалах боломжттой болно"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex w-full flex-col items-center  justify-center scroll-auto">
        <input
          type="text"
          placeholder="Search ... "
          className="rounded-md border px-3"
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Огноо</TableHead>
              <TableHead className="text-center">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees[findIndex]?.unAvailableTime.sort().map((time, i) => (
              <TableRow key={`key UnTim ${i}`} className="text-center">
                <TableCell>{format(new Date(time), 'yyyy-MM-dd')}</TableCell>
                <TableCell>{format(new Date(time), 'HH:mm')}</TableCell>
                <TableCell>
                  <button className="text-right text-xl hover:text-red-700">
                    <MdDelete onClick={() => onConfirmTime({ date: time })} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant="outline" onClick={onClose}>
          Буцах
        </Button>
      </div>
    </Modal>
  );
};
