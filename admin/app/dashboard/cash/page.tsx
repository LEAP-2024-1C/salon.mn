'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import BookingCart from '@/components/tables/cash/booking-cart';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Касс', link: '/dashboard/cash' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <BookingCart />
      </div>
    </PageContainer>
  );
}
