"use client";
import { IProduct } from "@/utils/interface";
import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { formattedPrice } from "@/lib/utils";
import axios from "axios";
import { apiURL } from "@/utils/apiHome";
import { toast } from "react-toastify";
import Image from "next/image";

const Products = ({ name, price, images, discount, _id }: IProduct) => {
  const SaveProduct = async (product_id: string) => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `${apiURL}/api/v1/save/product`,
        { product_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Бараа амжилттай hadgallaa");
      }
      if (res.status === 201) {
        toast.error("хадгалсан бараа байна");
      }
    } catch (error) {
      toast.error("Нэвтэрнэ үү");
      console.error(error);
    }
  };
  const handleClick = (id: string) => {
    SaveProduct(id);
  };
  console.log("name", name);
  return (
    <div>
      <div className="text-white w-9/12 m-auto container grid grid-cols-4  gap-5 my-10 ">
        <div className="relative w-[245px] h-[391px]">
          <Link href={"/detail/" + _id} className="w-full h-full">
            <div className=" row-span-2 col-span-2  ">
              <div className=" relative w-full rounded-2xl overflow-hidden">
                <Image
                  fill={true}
                  src={images[0]}
                  alt="Photo product card"
                  className="w-auto h-auto"
                />
              </div>

              <p className="">{name}</p>
              <PriceWithDiscount price={price} discount={discount} />
            </div>
          </Link>
          <Heart
            className=" absolute top-8 right-8 text-gray-700"
            onClick={() => {
              handleClick(_id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;

const getDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

const PriceWithDiscount = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  const discountedPrice = getDiscountedPrice(price, discount);
  return (
    <div className="flex items-center gap-4 mt-1">
      <p className="font-bold">
        {formattedPrice(discount > 0 ? discountedPrice : price)}₮
      </p>
      {discount > 0 && (
        <>
          <span className="text-muted-foreground text-xs line-through">
            {`${formattedPrice(price)}₮`}
          </span>
          <span className="font-bold text-destructive">{discount}%</span>
        </>
      )}
    </div>
  );
};
