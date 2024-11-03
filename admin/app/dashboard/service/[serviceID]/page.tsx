'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ServiceForm } from '@/components/tables/service-tables/service-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Үйлчилгээ', link: '/dashboard/service' },
  { title: 'Үйлчилгээ үүсгэх', link: '/dashboard/service/create' }
];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <ServiceForm />
      </div>
    </ScrollArea>
  );
}
