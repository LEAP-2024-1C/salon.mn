"use client";
import Image from "next/image";
import React from "react";
import { FaSquare } from "react-icons/fa6";

const Topic2 = () => {
  return (
    <div className=" flex flex-col gap-10 md:flex-col-reverse">
      <div className=" flex flex-col  gap-5">
        <div className="w-full h-[250px] relative ">
          <Image
            fill={true}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/client-during-beard-and-moustache-grooming-in-barb-2021-08-27-10-29-28-utc-puonx5h5m63wdlr9m4pvcaxqqa7nmrrffq3tnp91y0.jpg"
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="w-full h-[250px] relative ">
          <Image
            fill={true}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/client-during-beard-and-moustache-grooming-in-barb-2021-08-27-13-49-14-utc-puonyoxmte7telipmaouxexxs0mb8wvlbclgz0ytqw.jpg"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className=" flex flex-col gap-10">
        <h1 className="text-4xl font-extrabold text-star">
          We always provide sincere service from the heart just for you2
        </h1>
        <p>
          Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat auctor
          quam pellentesque facilisis egestas. Suspendisse turpis aliquet odio
          ultrices id orci fermentum nascetur ullamcorper. At eu.
        </p>

        <div className="flex gap-3 items-center">
          <FaSquare className="text-pink-600 text-lg" />
          <p>Scelerisque nunc, at nisl non. Est.</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaSquare className="text-pink-600 text-lg" />
          <p>Scelerisque nunc, at nisl non. Est.</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaSquare className="text-pink-600 text-lg" />
          <p>Scelerisque nunc, at nisl non. Est.</p>
        </div>
      </div>
    </div>
  );
};

export default Topic2;
