'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { EmployeeForm } from '@/components/forms/employee-form';
import PageContainer from '@/components/layout/page-container';
import React from 'react';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Ажилтан', link: '/dashboard/employee' },
  { title: 'Ажилтан үүсгэх', link: '/dashboard/employees/create' }
];
export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <EmployeeForm />
      </div>
    </PageContainer>
  );
}
