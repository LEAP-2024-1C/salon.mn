"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
`import { any } from "zod";`;
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
interface IImage {
  name: string;
  img: string;
}

const OurServices = () => {
  const [services, setServices] = useState<IServiceArr[]>([]);
  const [subCategory, setSubCategory] = useState<ISubCategory[]>([]);

  // const new= new Array(6).fill(0).map((sub)=>)

  const getService = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/api/v1/service`);
      setServices(res.data.services);
      console.log("data", res.data.services);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSubCategoryData = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "http://localhost:8008/api/v1/category/get-sub",
      });

      if (res.status === 200) {
        setSubCategory(res.data.getSubCategory);
      }
    } catch (error) {
      console.error("Sub Category дата татахад алдаа гарлаа.");
    }
  };

  useEffect(() => {
    getService();
    fetchSubCategoryData();
  }, []);
  console.log("subCategory", services);
  const images: IImage[] = [
    {
      name: "Эрэгтэй үс засалт",
      img: "https://media.istockphoto.com/id/1056459872/photo/male-hairdressers-grooming-clients-haircuts-in-barbershop.jpg?s=612x612&w=0&k=20&c=BD5wBbH8rn9OuFRKlKxIN8_O5U3SpB_3rd-2s98eDAQ=",
    },
    {
      name: "Эмэгтэй үс засалт",
      img: "https://media.istockphoto.com/id/1887700422/photo/hairdresser-creating-a-beautiful-finish-with-drying.webp?a=1&b=1&s=612x612&w=0&k=20&c=S-Jv3YUrEbgy8v84JfeQfHOKX9eGqRI_6QpIKI5dKAA=",
    },
    {
      name: "органик будаг",
      img: "https://media.istockphoto.com/id/2096693782/photo/rear-back-behind-view-portrait-of-lovely-woman-dressed-stylish-t-shirt-hands-touching-wavy.jpg?s=612x612&w=0&k=20&c=_-CAQI0vuAb0MUAdCXO5a1JdADDHwp2WWpRkEdVUbwo=",
    },
    {
      name: "гоо сайхан",
      img: "https://media.istockphoto.com/id/689027030/photo/one-day-in-the-clinic-of-aesthetic-medicine.jpg?s=612x612&w=0&k=20&c=nYCoX_N--jVhowCKTTSH8hhbruGzgbsjIynAczJFlxs=",
    },
    {
      name: "маникюр",
      img: "https://media.istockphoto.com/id/1271506997/photo/nails-manicure-with-file.jpg?s=612x612&w=0&k=20&c=BaFLcYc06EN40-fxdAY_2yciqJ5hEwJfCP2lBTyZzqA=",
    },
    {
      name: "waxing",
      img: "https://media.istockphoto.com/id/1363326948/photo/liquid-sugar-paste-for-hair-removal-in-a-bowl-with-peony-flower-on-white-background.jpg?s=612x612&w=0&k=20&c=kbotNKO1QPIHvetS2QACiKBkUrovKgJGvqR8Ow3HAz0=",
    },
  ];
  return (
    <div className="bg-[#F7E5C180] text-[#eaeaea] font-serif">
      <div className="block bg-[#422A3C] md:text-xl lg:text-2xl lg:text-center lg:py-6 animate-fadeInUp3">
        <p className="text-center lg:text-4xl lg:pt-4">Үнэ & Үйлчилгээ</p>
        <p className="text-center md:max-w-[300px] lg:max-w-[900px] mx-auto pt-3">
          Сайхан үс хүний бие, нүүрний өөг далдалдаг шидтэй
        </p>
      </div>

      <div className="block w-full md:flex md:justify-between md:items-center md:text-xl  mt-28 mb-28 gap-28 felx flex-col animate-fadeInUp5 ">
        {subCategory?.map((sub, i) => {
          if (i !== 2 && i !== 5 && i !== 8) {
            return (
              <div
                key={`subcat` + i}
                className="w-[90%] h-[500px] bg-[#422A3C] flex justify-center items-center"
              >
                <div className="flex-1 h-[388px] mt-5 overflow-scroll">
                  <p className="font-bold text-white text-center">{sub.name}</p>
                  {services?.map((item, i) => {
                    console.log("item", item.subCategory.name === sub?.name);
                    return (
                      <div key={`service` + i} className="w-full">
                        {item.subCategory.name === sub?.name ? (
                          <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xs text-white px-4">
                            <p className="font-semibold text-white">
                              {item.name}
                            </p>
                            <div className="flex-1 border-t border-dotted border-white opacity-10 mx-2"></div>
                            <p className="text-[#e0dcdd]">{item.price}₮</p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="flex-1 h-[600px]  relative">
                  <div className=" absolute bg-red-400 w-[600px] h-[600px]">
                    {images?.map((image) => {
                      if (sub.name === image.name)
                        return (
                          <Image
                            layout="fill"
                            objectFit=" cover"
                            alt="Logo"
                            src={image?.img}
                          />
                        );
                    })}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default OurServices;
