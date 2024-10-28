"use client";
import Image from "next/image";
import React from "react";

const Topic1 = () => {
  return (
    <div className=" flex flex-col gap-10">
      <div className="w-full h-[540px] relative ">
        <Image
          fill={true}
          alt="Logo"
          src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/barbershop-theme-2021-08-31-15-23-17-utc-puoqs5mgjl754vs4jygd56p8a45d0icwmdemu9rsxc.jpg"
          className="rounded-2xl object-cover"
        />
      </div>
      <div className=" flex flex-col gap-10">
        <h1 className="text-4xl font-extrabold text-start ">
          We can present all kinds of man hairstyles well and elegantly1
        </h1>
        <p>
          Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat auctor
          quam pellentesque facilisis egestas. Suspendisse turpis aliquet odio
          ultrices id orci fermentum nascetur ullamcorper. At eu.
        </p>

        <p>
          Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat auctor
          quam pellentesque facilisis egestas. Suspendisse turpis aliquet odio
          ultrices id orci fermentum nascetur ullamcorper. At eu.
        </p>
      </div>
    </div>
  );
};

export default Topic1;
