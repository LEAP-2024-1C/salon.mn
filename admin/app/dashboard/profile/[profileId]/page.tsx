'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import React from 'react';
import { ProfileForm } from '@/components/tables/profile-tables/profile-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Бидний тухай', link: '/dashboard/profile' },
  { title: 'Ажилтан үүсгэх', link: '/dashboard/profile/create' }
];
export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <ProfileForm/>
      </div>
    </PageContainer>
  );
}