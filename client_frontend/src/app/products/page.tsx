"use client";

import { apiURL } from "@/utils/apiHome";
import { IProduct } from "@/utils/interface";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "@/components/cards/product-card";

const Artists = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProductsData = async () => {
    try {
      const res = await axios.get(`${apiURL}/api/v1/products`);
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  console.log("product", products);
  useEffect(() => {
    fetchProductsData();
  }, []);
  return (
    <section className="mt-6 mb-24  bg-[#101828] mx-auto grid grid-cols-4  gap-x-5 sm:grid max-sm:grid-cols-1">
      {products.map((product, index) => {
        return (
          <>
            <Products key={index} {...product} />
          </>
        );
      })}
    </section>
  );
};
export default Artists;
