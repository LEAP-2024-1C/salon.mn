'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CategoryForm } from '@/components/tables/category-table/category-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Категор', link: '/dashboard/category' },
  { title: 'Категор үүсгэх', link: '/dashboard/category/create' }
];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <CategoryForm />
      </div>
    </ScrollArea>
  );
}
