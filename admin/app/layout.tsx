import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';
import EmployeesProvider from '@/app/context/employee-context';
import { AdminProvider } from './context/admin-context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import ProductProvider from './context/product-context';
import 'react-toastify/dist/ReactToastify.css';
import ServiceProvider from './context/service-context';

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
          <ToastContainer />
          <Toaster />
          <AdminProvider>{children}</AdminProvider>
          <ProductProvider>
            <ServiceProvider>
              <NextTopLoader showSpinner={false} />
              <Suspense>{children}</Suspense>
              <Toaster />

              <ToastContainer />
            </ServiceProvider>
          </ProductProvider>
        </EmployeesProvider>
      </body>
    </html>
  );
}
