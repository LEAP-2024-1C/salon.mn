'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { TimeTableForm } from '@/components/tables/time-tables/time-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Цагийн хуваар', link: '/dashboard/time-table' },
  { title: 'Цагийн хуваар үүсгэх', link: '/dashboard/time-table/new' }
];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <TimeTableForm />
      </div>
    </ScrollArea>
  );
}
