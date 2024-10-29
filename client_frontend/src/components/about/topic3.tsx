"use client";
import Image from "next/image";
import React from "react";
import { FaSquare } from "react-icons/fa6";

const Topic3 = () => {
  return (
    <div className=" flex flex-col gap-10">
      <div className="w-full h-[540px] relative ">
        <Image
          fill={true}
          alt="Logo"
          src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/barber-and-customer-with-a-mustache-barbershop-2021-08-27-17-08-47-utc-puoobdr72vo8moqaxl0tnl60k1pe1lxj2zbr5heckw.jpg"
          className="rounded-2xl object-cover"
        />
      </div>
      <div className=" flex flex-col gap-10">
        <h1 className="text-4xl font-extrabold text-star">
          Not only hair, we also have expertise to make your face look beautiful
        </h1>
        <p>
          Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat auctor
          quam pellentesque facilisis egestas. Suspendisse turpis aliquet odio
          ultrices id orci fermentum nascetur ullamcorper. At eu.
        </p>

        <div className="flex gap-3 items-center">
          <FaSquare className="text-pink-600 text-lg" />
          <p>
            Ac vitae commodo amet, varius. Ut rhoncus consectetur magna quis
            gravida massa. Habitasse sed feugiat massa.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <FaSquare className="text-pink-600 text-lg" />

          <p>
            Ac vitae commodo amet, varius. Ut rhoncus consectetur magna quis
            gravida massa. Habitasse sed feugiat massa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topic3;
