import { Metadata } from 'next';
import Signin from '@/components/handmade/signin';
import EmplyeeSingin from '@/components/handmade/employee-signin';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full w-full flex-col bg-[url('/adminbg.avif')] bg-cover bg-left p-10 lg:flex dark:border-r"></div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <EmplyeeSingin />
      </div>
    </div>
  );
}
