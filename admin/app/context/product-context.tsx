'use client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import React, { useContext, useState, createContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: [string];
  quantity: number;
  discount: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductArr {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: [string];
  quantity: number;
  discount: number;
  category: {
    name: string;
    _id: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface IContext {
  products: IProductArr[];
  setProducts: React.Dispatch<React.SetStateAction<IProductArr[]>>;

  product: IProduct;
  setProduct: React.Dispatch<React.SetStateAction<IProduct>>;

  createdProduct: () => void;
  fetchProductData: () => void;
}

export const ProductContext = createContext<IContext>({
  products: [],
  setProducts: () => {},

  product: {} as IProduct,
  setProduct: () => {},

  createdProduct: () => {},
  fetchProductData: () => {}
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProductArr[]>([]);
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const router = useRouter();

  const fetchProductData = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:8008/api/v1/products'
      });

      if (res.status === 200) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.error('Бүтээгдэхүүний дата татахад алдаа гарлаа.');
    }
  };

  const createdProduct = async () => {
    try {
      const { name, price, images, description, quantity, category } = product;

      const res = await axios({
        method: 'post',
        url: 'http://localhost:8008/api/v1/products',
        headers: {},
        data: {
          name,
          price,
          images,
          description,
          quantity,
          category
        }
      });

      if (res.status === 200) {
        await fetchProductData();
        toast.success('Бүтээгдэхүүн амжилттай үүслээ', { autoClose: 0.8 });

        router.push('/dashboard/product');
      }
      console.log('first Бүтээгдэхүүн');
    } catch (error) {
      toast.error('Бүтээгдэхүүн үүсгэхэд алдаа гарлаа.');
      console.log('Бүтээгдэхүүн үүсгэхэд алдаа гарлаа.', error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,

        product,
        setProduct,
        createdProduct,
        fetchProductData
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useUser = () => {
  return useContext(ProductContext);
};

export default ProductProvider;
