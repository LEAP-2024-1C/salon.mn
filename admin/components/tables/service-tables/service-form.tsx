'use client';
import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Button } from '../../ui/button';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ServiceContext } from '@/app/context/service-context';

export const ServiceForm = () => {
  const { serviceID } = useParams();
  const router = useRouter();

  const { service, setService, fetchServiceData, createdService } =
    useContext(ServiceContext);

  const getService = async () => {
    try {
      if (serviceID === 'create') {
        return;
      }
      const res = await axios({
        method: 'get',
        url: `http://localhost:8008/api/v1/service/${serviceID}`
      });

      if (res.status === 200) {
        setService(res.data.service);
      }
    } catch (error) {
      console.log(' Aжилтны мэдээлэл татахад алдаа гарлаа');
    }
  };

  const updateService = async () => {
    try {
      const { name, price, time, description, category } = service;
      const res = await axios({
        method: 'put',
        url: `http://localhost:8008/api/v1/service/update-service/${serviceID}`,
        headers: {},
        data: {
          name,
          price,
          time,
          description,
          category
        }
      });

      if (res.status === 200) {
        await fetchServiceData();
        toast.success('Үйлчилгээний мэдээлэл амжилттай шинэчлэгдлээ.', {
          autoClose: 0.8
        });
        router.push('/dashboard/service');
      }
    } catch (error) {
      toast.error('Үйлчилгээний мэдээлэл засахад алдаа гарлаа.');
    }
  };

  useEffect(() => {
    getService();
  }, [serviceID]);

  return (
    <div className=" flex flex-col gap-10">
      <div className="grid-row-3 grid   grid-flow-col gap-5 ">
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Label>Нэр</Label>
          <Input
            onChange={(e) => setService({ ...service, name: e.target.value })}
            type="text"
            placeholder="Нэр"
            value={service?.name}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Зарцуулах хугацаа</Label>
          <Input
            type="number"
            onChange={(e) => setService({ ...service, time: e.target.value })}
            value={service?.time}
            placeholder="Time"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Үнэ</Label>
          <Input
            type="number"
            onChange={(e) =>
              setService({
                ...service,
                price: Math.floor(Number(e.target.value))
              })
            }
            placeholder="Price"
            value={service?.price}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Category select</Label>
          <Select
            onValueChange={(value) =>
              setService({ ...service, category: value })
            }
            defaultValue={service?.category}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="6721a4727300f88d42793b76">Barber</SelectItem>
                <SelectItem value="6720654be0eb8fa8d9b935c8">
                  Nail art
                </SelectItem>
                <SelectItem value="6721a4837300f88d42793b78">
                  Beauty artist
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" row-span-4 w-full max-w-sm  items-start gap-1.5">
          <Label>Тайлбар</Label>
          <Input
            onChange={(e) =>
              setService({ ...service, description: e.target.value })
            }
            type="text"
            placeholder="Үйлчилгээний дэлгэрэнгүйг бичнэ үү"
            className="h-full "
            value={service?.description}
          />
        </div>
      </div>
      <Button onClick={serviceID === 'create' ? createdService : updateService}>
        {serviceID === 'create' ? 'create' : 'edit'}
      </Button>
    </div>
  );
};
