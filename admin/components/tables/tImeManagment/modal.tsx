'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isActive: boolean;
}

export const TimeModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isActive
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Та уг цагийг идэвхгүй болгох гэж байна!!!"
      description="Уг цагийг хэрэглэгч захиалах боломжгүй болохыг анхаарна уу?"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button variant="outline" onClick={onClose}>
          Буцах
        </Button>
        <Button variant="destructive" onClick={onConfirm}>
          Done
        </Button>
      </div>
    </Modal>
  );
};
