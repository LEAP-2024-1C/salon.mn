"use client";


import React, { useState, useEffect } from "react";
import axios from "axios";
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

const OurServices = () => {
  const [services, setServices] = useState<IServiceArr[]>([]);
  const [subCategory, setSubCategory] = useState<ISubCategory[]>([]);

  // const new= new Array(6).fill(0).map((sub)=>)

  const getService = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/api/v1/service`);
      setServices(res.data.services);
      console.log("data", res.data.services)
    } catch (error) {
      console.log(error);
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
      console.error('Sub Category дата татахад алдаа гарлаа.');
    }
  };

  useEffect(() => {
    getService();
    fetchSubCategoryData()
  }, []);
console.log("subCategory", services)
  return (
    <div className="bg-[#101828] text-white font-serif">
      <div className="block md:text-xl lg:text-2xl lg:text-center lg:py-6 animate-fadeInUp3">
        <p className="text-center lg:text-4xl lg:pt-4">Үнэ & Үйлчилгээ</p>
        <p className="text-center md:max-w-[300px] lg:max-w-[900px] mx-auto pt-3">
          Сайхан үс хүний бие, нүүрний өөг далдалдаг шидтэй
        </p>
      </div>

      <div className="block md:flex md:justify-between md:items-center md:text-xl md:gap-2 lg:max-w-[1200px] lg:mx-auto lg:py-8 animate-fadeInUp5 lg:grid-cols-3 lg:grid">
        {
          subCategory?.map((sub, i) => {
            if(i !== 2 && i !== 5) {

            return <div key={i} className="w-[300px] h-[600px] bg-[#ECE8DE] border-2 border-red-300 rounded-xl ">
              <p className="font-semibold text-black text-center">{sub.name}</p>

              {services?.map((item, i) => {
                console.log("item", item.subCategory.name === sub?.name)
                return (
                  <div key={i} className="w-full">
                    {item.subCategory.name === sub?.name ?
                      <div className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xs text-white px-4">
                        <p className="font-semibold text-black">{item.name}</p>
                        <div className="flex-1 border-t border-dotted border-red-400 mx-2"></div>
                        <p className="text-[#F63D68]">{item.price}₮</p>
                      </div> : ""
                    }
                  </div>
                )
              })}
            </div>
            }
          })
        }
        {/* {services.filter((service) => service.subCategory.name === service.)} */}

      </div>
    </div>
  );
};

export default OurServices;
