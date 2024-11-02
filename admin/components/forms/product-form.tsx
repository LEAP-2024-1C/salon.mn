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
import { Button } from '../ui/button';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ProductContext } from '@/app/context/product-context';

export const ProductForm = () => {
  const { productID } = useParams();
  const router = useRouter();

  const { product, setProduct, fetchProductData, createdProduct } =
    useContext(ProductContext);

  const getProduct = async () => {
    try {
      if (productID === 'create') {
        return;
      }
      const res = await axios({
        method: 'get',
        url: `http://localhost:8008/api/v1/products/${productID}`
      });

      if (res.status === 200) {
        setProduct(res.data.product);
        console.log('first', res.data.product);
      }
    } catch (error) {
      console.log(' Aжилтны мэдээлэл татахад алдаа гарлаа');
    }
  };

  const updateProduct = async () => {
    try {
      const { name, price, images, description, quantity, category } = product;

      const res = await axios({
        method: 'put',
        url: `http://localhost:8008/api/v1/products/updated-product/${productID}`,
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
      console.log('ypdate');
      if (res.status === 200) {
        await fetchProductData();
        toast.success('Aжилтны мэдээлэл амжилттай шинэчлэгдлээ.', {
          autoClose: 0.8
        });
        router.push('/dashboard/product');
      }
    } catch (error) {
      toast.error('Ажилтны мэдээлэл засахад алдаа гарлаа.');
    }
  };

  useEffect(() => {
    getProduct();
  }, [productID]);

  return (
    <div className=" flex flex-col gap-10">
      <div>
        <div className="flex justify-between">
          {' '}
          <p>Зураг оруулах</p>
          {/* <CldUploadWidget
            uploadPreset="employeeAdmin "
            onSuccess={(result: any) => {
              setProduct({
                ...product,
                images: result?.info?.secure_url
              });
            }}
          >
            {({ open }) => {
              return (
                <Button className="" onClick={() => open()}>
                  Upload an Image
                </Button>
              );
            }}
          </CldUploadWidget> */}
        </div>

        <div className="relative h-60 w-full rounded-lg border">
          <Image
            fill={true}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="productIMG"
            className="h-auto w-auto object-cover"
          />
        </div>
      </div>
      <div className="grid-row-3 grid   grid-flow-col gap-5 ">
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Label>Нэр</Label>
          <Input
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            type="text"
            placeholder="Нэр"
            value={product?.name}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Утсны дугаар</Label>
          <Input
            type="number"
            onChange={(e) =>
              setProduct({
                ...product,
                price: Math.floor(Number(e.target.value))
              })
            }
            value={product?.price}
            placeholder="Number"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Тоо ширхэг</Label>
          <Input
            type="number"
            onChange={(e) =>
              setProduct({
                ...product,
                quantity: Math.floor(Number(e.target.value))
              })
            }
            placeholder="Quantity"
            value={product?.quantity}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Хямдрал</Label>
          <Input
            type="number"
            onChange={(e) =>
              setProduct({
                ...product,
                discount: Math.floor(Number(e.target.value))
              })
            }
            placeholder="Discount"
            value={product?.discount}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Category select</Label>
          <Select
            onValueChange={(value) =>
              setProduct({ ...product, category: value })
            }
            defaultValue={product?.category}
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
              setProduct({ ...product, description: e.target.value })
            }
            type="text"
            placeholder="Ajliin turshalag geh met"
            className="h-full "
            value={product?.description}
          />
        </div>
      </div>
      <Button onClick={productID === 'create' ? createdProduct : updateProduct}>
        {productID === 'create' ? 'create' : 'edit'}
      </Button>
    </div>
  );
};
