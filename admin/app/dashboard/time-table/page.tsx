'use client';

import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';

import { TimeTable } from '@/components/tables/time-tables/time-table';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';

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

          {/* <Link
            href={'/dashboard/time-table/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link> */}
        </div>
        <Separator />

        <TimeTable />
      </div>
    </PageContainer>
  );
}
