'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { UserClient } from '@/components/tables/employee-tables/client';
import { EmployeeDataTable } from '@/components/tables/employee-tables/employee-data-table';

const breadcrumbItems = [{ title: 'Ажилтан', link: '/employee' }];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div>bataa</div>
        {/* <EmployeeDataTable /> */}

        <UserClient />
      </div>
    </PageContainer>
  );
}
