'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ProductForm } from '@/components/tables/product-tables/product-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Бүтээгдэхүүн', link: '/dashboard/product' },
  { title: 'Бүтээгдэхүүн үүсгэх', link: '/dashboard/product/create' }
];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductForm />
      </div>
    </ScrollArea>
  );
}
