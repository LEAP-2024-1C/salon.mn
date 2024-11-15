'use client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import React, { useContext, useState, createContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export interface IService {
  _id: string;
  name: string;
  price: number;
  time: string;
  description: string;
  category: string;
  subCategory: string;
}

export interface IServiceArr {
  _id: string;
  name: string;
  price: number;
  time: string;
  description: string;
  category: {
    name: string;
    _id: string;
  };
  subCategory: { _id: string; name: string };
}

interface ISubCategory {
  _id: string;
  name: string;
  descreption: string;
  category: string;
}

interface ICategory {
  _id: string;
  name: string;
  descreption: string;
}

interface IContext {
  services: IServiceArr[];
  setServices: React.Dispatch<React.SetStateAction<IServiceArr[]>>;

  service: IService;
  setService: React.Dispatch<React.SetStateAction<IService>>;

  createdService: () => void;
  fetchServiceData: () => void;

  category: ICategory[];
  setCategory: React.Dispatch<React.SetStateAction<ICategory[]>>;

  subCategory: ISubCategory[];
  setSubCategory: React.Dispatch<React.SetStateAction<ISubCategory[]>>;
}

export const ServiceContext = createContext<IContext>({
  services: [],
  setServices: () => {},

  service: {} as IService,
  setService: () => {},

  createdService: () => {},
  fetchServiceData: () => {},

  category: [],
  setCategory: () => {},

  subCategory: [],
  setSubCategory: () => {}
});

const ServiceProvider = ({ children }: { children: React.ReactNode }) => {
  const [services, setServices] = useState<IServiceArr[]>([]);
  const [service, setService] = useState<IService>({} as IService);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [subCategory, setSubCategory] = useState<ISubCategory[]>([]);

  const router = useRouter();

  const fetchServiceData = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:8008/api/v1/service'
      });

      if (res.status === 200) {
        setServices(res.data.services);
      }
    } catch (error) {
      toast.error('Үйлчилгээ дата татахад алдаа гарлаа.');
    }
  };

  const createdService = async () => {
    try {
      const { name, price, description, time, category, subCategory } = service;

      const res = await axios({
        method: 'post',
        url: 'http://localhost:8008/api/v1/service/create-service',
        headers: {},
        data: {
          name,
          price,
          description,
          time,
          category,
          subCategory
        }
      });

      if (res.status === 200) {
        await fetchServiceData();
        toast.success('Бүтээгдэхүүн амжилттай үүслээ', { autoClose: 0.8 });

        router.push('/dashboard/service');
      }
    } catch (error) {
      toast.error('Бүтээгдэхүүн үүсгэхэд алдаа гарлаа.');
    }
  };

  const fetchCategoryData = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:8008/api/v1/category/get-category'
      });

      if (res.status === 200) {
        setCategory(res.data.allCategory);
      }
    } catch (error) {
      toast.error('Category дата татахад алдаа гарлаа.');
    }
  };

  const fetchSubCategoryData = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:8008/api/v1/category/get-sub'
      });

      if (res.status === 200) {
        setSubCategory(res.data.getSubCategory);
      }
    } catch (error) {
      toast.error('Sub Category дата татахад алдаа гарлаа.');
    }
  };

  useEffect(() => {
    fetchServiceData();
    fetchCategoryData();
    fetchSubCategoryData();
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        services,
        setServices,

        service,
        setService,

        createdService,
        fetchServiceData,

        category,
        setCategory,
        subCategory,
        setSubCategory
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useUser = () => {
  return useContext(ServiceContext);
};

export default ServiceProvider;
