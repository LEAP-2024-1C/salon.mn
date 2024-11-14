'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import React from 'react';
import Cash from '@/components/tables/cash/cash-edit';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Касс', link: '/dashboard/cash' },
  { title: 'Касс update', link: '/dashboard/cash/edit' }
];
export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <Cash />
      </div>
    </PageContainer>
  );
}
