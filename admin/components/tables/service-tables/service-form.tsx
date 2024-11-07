'use client';

import React, { useContext, useEffect } from 'react';

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

  const {
    service,
    setService,
    fetchServiceData,
    createdService,
    category,
    subCategory
  } = useContext(ServiceContext);

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
      <div className="grid grid-cols-2   gap-5 ">
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
              {category?.map((cat) => {
                return (
                  <SelectGroup key={cat?._id}>
                    <SelectItem value={cat?._id}>{cat?.name}</SelectItem>
                  </SelectGroup>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Sub Category select</Label>
          <Select
            onValueChange={(value) =>
              setService({ ...service, subCategory: value })
            }
            defaultValue={service?.category}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {subCategory?.map((cat) => {
                return (
                  <SelectGroup key={cat?._id}>
                    <SelectItem value={cat?._id}>{cat?.name}</SelectItem>
                  </SelectGroup>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button onClick={serviceID === 'create' ? createdService : updateService}>
        {serviceID === 'create' ? 'create' : 'edit'}
      </Button>
    </div>
  );
};
