import { Breadcrumbs } from '@/components/breadcrumbs';
import { CreateProfileOne } from '@/components/forms/user-profile-stepper/create-profile';
import PageContainer from '@/components/layout/page-container';
import { Profile } from '@/components/tables/profile-tables/profile';


const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Бидний тухай', link: '/dashboard/profile' }
];
export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <CreateProfileOne categories={[]} initialData={null} />
        <Profile />
      </div>
    </PageContainer>
  );
}
