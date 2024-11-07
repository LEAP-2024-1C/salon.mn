'use client';

import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { TimeTable } from '@/components/tables/time-tables/time-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Цагийн хуваар', link: '/dashboard/time-table' }
];

export default async function page() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Ажилтаны цагийн хуваар`}
            description="Manage time table"
          />
        </div>
        <Separator />

        <TimeTable />
      </div>
    </PageContainer>
  );
}
