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

export const CategoryForm = () => {
  const { serviceID } = useParams();

  const router = useRouter();

  const { service, setService, fetchServiceData, createdService } =
    useContext(ServiceContext);

  const getService = async () => {
    try {
      console.log('first');
    } catch (error) {
      console.log(' Aжилтны мэдээлэл татахад алдаа гарлаа');
    }
  };

  const updateSubCategory = async () => {
    try {
      console.log('first');
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
      <Button
        onClick={serviceID === 'create' ? createdService : updateSubCategory}
      >
        {serviceID === 'create' ? 'create' : 'edit'}
      </Button>
    </div>
  );
};
