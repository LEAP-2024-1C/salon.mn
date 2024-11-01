import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';
import EmployeesProvider from '@/app/context/employee-context';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-hidden `}
        suppressHydrationWarning={true}
      >
        <EmployeesProvider>
          <NextTopLoader showSpinner={false} />
          <Suspense>{children}</Suspense>
          <Toaster />

          <ToastContainer />
        </EmployeesProvider>
      </body>
    </html>
  );
}
