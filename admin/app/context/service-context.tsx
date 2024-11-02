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
}

interface IContext {
  services: IServiceArr[];
  setServices: React.Dispatch<React.SetStateAction<IServiceArr[]>>;

  service: IService;
  setService: React.Dispatch<React.SetStateAction<IService>>;

  createdService: () => void;
  fetchServiceData: () => void;
}

export const ServiceContext = createContext<IContext>({
  services: [],
  setServices: () => {},

  service: {} as IService,
  setService: () => {},

  createdService: () => {},
  fetchServiceData: () => {}
});

const ServiceProvider = ({ children }: { children: React.ReactNode }) => {
  const [services, setServices] = useState<IServiceArr[]>([]);
  const [service, setService] = useState<IService>({} as IService);

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
      console.error('Үйлчилгээ дата татахад алдаа гарлаа.');
    }
  };

  const createdService = async () => {
    try {
      const { name, price, description, time, category } = service;

      const res = await axios({
        method: 'post',
        url: 'http://localhost:8008/api/v1/service/create-service',
        headers: {},
        data: {
          name,
          price,
          description,
          time,
          category
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

  useEffect(() => {
    fetchServiceData();
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        services,
        setServices,

        service,
        setService,

        createdService,
        fetchServiceData
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
