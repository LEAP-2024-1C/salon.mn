'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { EmployeesContext } from '../context/employee-context';
import { useContext, useEffect } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '../../components/ui/card';
import Image from 'next/image';
import axios from 'axios';
import { FaRegUser } from 'react-icons/fa';

const breadcrumbItems = [{ title: 'Ажилтан', link: '/employee' }];
export default function page() {
  const { artistData, setArtistData, token, setToken } =
    useContext(EmployeesContext);
  // const [isOpen, setIsOpen] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8008/api/v1/employee//getArtist`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status === 200) {
        setArtistData(response.data.user);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    if (token) {
      fetchUserData();
    } else {
      setToken(localStorage.getItem('token'));
    }
  }, [token]);
  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="m-auto flex w-9/12 justify-between">
          <div>{artistData?.name}</div>
          <Dialog>
            <DialogTrigger asChild>
              <FaRegUser />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="grid-col grid">
                <Card
                  key={artistData?._id}
                  className="rounded-md border p-4 shadow-md"
                >
                  <CardHeader className="flex items-center">
                    <Image
                      alt="Profile Image"
                      src={artistData?.profile_img || '/placeholder.png'}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold">
                        {artistData?.name}
                      </h2>
                      <p className="text-gray-500">
                        {artistData?.category?.name}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>Утас:</strong> {artistData?.phoneNumber}
                    </p>
                    <p>
                      <strong>Имэйл:</strong> {artistData?.email}
                    </p>
                    <p>
                      <strong>Дэд категори:</strong>{' '}
                      {artistData?.subCategory?.name}
                    </p>
                    <p>
                      <strong>Тайлбар:</strong> {artistData?.discription}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-end"></CardFooter>
                </Card>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <ScrollArea className="h-[calc(80vh-220px)] rounded-md border p-4">
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </PageContainer>
  );
}
